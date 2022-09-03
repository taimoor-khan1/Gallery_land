import * as React from "react";
import { useRef, useState, useMemo, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppState,
  AppStateStatus,
  Linking,
  StatusBar,
} from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  TapGestureHandler,
} from "react-native-gesture-handler";
import {
  CameraDeviceFormat,
  CameraRuntimeError,
  PhotoFile,
  sortFormats,
  useCameraDevices,
  VideoFile,
} from "react-native-vision-camera";
import { Camera, frameRateIncluded } from "react-native-vision-camera";
import {
  CONTENT_SPACING,
  MAX_ZOOM_FACTOR,
  SAFE_AREA_PADDING,
  Routes,
} from "./Constants";
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";
import { useEffect } from "react";
import { CaptureButton } from "./views/CaptureButton";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  useIsFocused,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/core";
import MyTouchableOpacity from "../MyTouchableOpacity";
import { COLORS, height, SIZES, width } from "../../constants";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Icon } from "native-base";
import { IconType } from "../Icon";

export const useIsForeground = (): boolean => {
  const [isForeground, setIsForeground] = useState(true);

  useEffect(() => {
    const onChange = (state: AppStateStatus): void => {
      setIsForeground(state === "active");
    };
    const listener = AppState.addEventListener("change", onChange);
    return () => listener.remove();
  }, [setIsForeground]);

  return isForeground;
};

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true,
});

const SCALE_FULL_ZOOM = 3;
const BUTTON_SIZE = 40;

type Props = NativeStackScreenProps<Routes, "CameraPage">;
export default function CameraPage(props: Props): React.ReactElement {
  const { goBack } = useNavigation();
  const camera = useRef<Camera>(null);
  const [isCameraInitialized, setIsCameraInitialized] = useState(false);
  const [cameraPermission, setCameraPermission] = useState<boolean>();
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState(false);
  const zoom = useSharedValue(0);
  const isPressingButton = useSharedValue(false);

  // check if camera page is active
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;

  const [cameraPosition, setCameraPosition] = useState<"front" | "back">(
    "back"
  );
  const [enableHdr, setEnableHdr] = useState(false);
  const [flash, setFlash] = useState<"off" | "on">("off");
  const [enableNightMode, setEnableNightMode] = useState(false);

  // camera format settings
  const devices = useCameraDevices();
  const device = devices[cameraPosition];
  const formats = useMemo<CameraDeviceFormat[]>(() => {
    if (device?.formats == null) return [];
    return device.formats.sort(sortFormats);
  }, [device?.formats]);

  //#region Memos
  const [is60Fps, setIs60Fps] = useState(true);
  const fps = useMemo(() => {
    if (!is60Fps) return 30;

    if (enableNightMode && !device?.supportsLowLightBoost) {
      // User has enabled Night Mode, but Night Mode is not natively supported, so we simulate it by lowering the frame rate.
      return 30;
    }

    const supportsHdrAt60Fps = formats.some(
      (f) =>
        f.supportsVideoHDR &&
        f.frameRateRanges.some((r) => frameRateIncluded(r, 60))
    );
    if (enableHdr && !supportsHdrAt60Fps) {
      // User has enabled HDR, but HDR is not supported at 60 FPS.
      return 30;
    }

    const supports60Fps = formats.some((f) =>
      f.frameRateRanges.some((r) => frameRateIncluded(r, 60))
    );
    if (!supports60Fps) {
      // 60 FPS is not supported by any format.
      return 30;
    }
    // If nothing blocks us from using it, we default to 60 FPS.
    return 60;
  }, [
    device?.supportsLowLightBoost,
    enableHdr,
    enableNightMode,
    formats,
    is60Fps,
  ]);

  const supportsCameraFlipping = useMemo(
    () => devices.back != null && devices.front != null,
    [devices.back, devices.front]
  );
  const supportsFlash = device?.hasFlash ?? false;
  const supportsHdr = useMemo(
    () => formats.some((f) => f.supportsVideoHDR || f.supportsPhotoHDR),
    [formats]
  );
  const supports60Fps = useMemo(
    () =>
      formats.some((f) =>
        f.frameRateRanges.some((rate) => frameRateIncluded(rate, 60))
      ),
    [formats]
  );
  const canToggleNightMode = enableNightMode
    ? true // it's enabled so you have to be able to turn it off again
    : (device?.supportsLowLightBoost ?? false) || fps > 30; // either we have native support, or we can lower the FPS
  //#endregion

  const format = useMemo(() => {
    let result = formats;
    if (enableHdr) {
      // We only filter by HDR capable formats if HDR is set to true.
      // Otherwise we ignore the `supportsVideoHDR` property and accept formats which support HDR `true` or `false`
      result = result.filter((f) => f.supportsVideoHDR || f.supportsPhotoHDR);
    }

    // find the first format that includes the given FPS
    return result.find((f) =>
      f.frameRateRanges.some((r) => frameRateIncluded(r, fps))
    );
  }, [formats, fps, enableHdr]);

  //#region Animated Zoom
  // This just maps the zoom factor to a percentage value.
  // so e.g. for [min, neutr., max] values [1, 2, 128] this would result in [0, 0.0081, 1]
  const minZoom = device?.minZoom ?? 1;
  const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR);

  const cameraAnimatedProps = useAnimatedProps(() => {
    const z = Math.max(Math.min(zoom.value, maxZoom), minZoom);
    return {
      zoom: z,
    };
  }, [maxZoom, minZoom, zoom]);
  //#endregion

  //#region Callbacks
  const setIsPressingButton = useCallback(
    (_isPressingButton: boolean) => {
      isPressingButton.value = _isPressingButton;
    },
    [isPressingButton]
  );
  // Camera callbacks
  const onError = useCallback((error: CameraRuntimeError) => {
    console.error(error);
  }, []);
  const onInitialized = useCallback(() => {
    console.log("Camera initialized!");
    setIsCameraInitialized(true);
  }, []);
  const onMediaCaptured = useCallback(
    (media: PhotoFile | VideoFile, type: "photo" | "video") => {
      console.log(`Media captured! ${JSON.stringify(media)}`);
      props.navigation.navigate("MediaPage", {
        path: media.path,
        type: type,
      });
    },
    [props.navigation]
  );
  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition((p) => (p === "back" ? "front" : "back"));
  }, []);
  const onFlashPressed = useCallback(() => {
    setFlash((f) => (f === "off" ? "on" : "off"));
  }, []);
  //#endregion

  //#region Tap Gesture
  const onDoubleTap = useCallback(() => {
    onFlipCameraPressed();
  }, [onFlipCameraPressed]);
  //#endregion

  //#region Effects
  const neutralZoom = device?.neutralZoom ?? 1;
  useEffect(() => {
    // Run everytime the neutralZoomScaled value changes. (reset zoom when device changes)
    zoom.value = neutralZoom;
  }, [neutralZoom, zoom]);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Camera.getCameraPermissionStatus()
        .then((status) => {
          if (status === "authorized") {
            setCameraPermission(true);
            return;
          }
          Camera.requestCameraPermission().then((value) => {
            if (value === "authorized") {
              setCameraPermission(true);
              return;
            }
            Linking.openSettings();
          });
        })
        .catch((e) => {
          console.log("Camera permission ==== >>>>> ", e);
        });

      Camera.getMicrophonePermissionStatus()
        .then((status) => {
          if (status === "authorized") {
            setHasMicrophonePermission(true);
            return;
          }

          Camera.requestMicrophonePermission().then((value) => {
            if (value === "authorized") {
              setHasMicrophonePermission(true);
              return;
            }
            Linking.openSettings();
          });
        })

        .catch((e) => {
          console.log("microphone permission ==== >>>>> ", e);
        });
      return () => {
        StatusBar.setBarStyle("dark-content");
      };
    }, [])
  );

  //#endregion

  //#region Pinch to Zoom Gesture
  // The gesture handler maps the linear pinch gesture (0 - 1) to an exponential curve since a camera's zoom
  // function does not appear linear to the user. (aka zoom 0.1 -> 0.2 does not look equal in difference as 0.8 -> 0.9)
  const onPinchGesture = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { startZoom?: number }
  >({
    onStart: (_, context) => {
      context.startZoom = zoom.value;
    },
    onActive: (event, context) => {
      // we're trying to map the scale gesture to a linear zoom here
      const startZoom = context.startZoom ?? 0;
      const scale = interpolate(
        event.scale,
        [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM],
        [-1, 0, 1],
        Extrapolate.CLAMP
      );
      zoom.value = interpolate(
        scale,
        [-1, 0, 1],
        [minZoom, startZoom, maxZoom],
        Extrapolate.CLAMP
      );
    },
  });
  //#endregion

  if (device != null && format != null) {
    console.log(
      `Re-rendering camera page with ${
        isActive ? "active" : "inactive"
      } camera. ` +
        `Device: "${device.name}" (${format.photoWidth}x${format.photoHeight} @ ${fps}fps)`
    );
  } else {
    console.log("re-rendering camera page without active camera");
  }

  return (
    <View style={styles.container}>
      {device != null && (
        <PinchGestureHandler onGestureEvent={onPinchGesture} enabled={isActive}>
          <Reanimated.View style={StyleSheet.absoluteFill}>
            <TapGestureHandler onEnded={onDoubleTap} numberOfTaps={2}>
              <ReanimatedCamera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                format={format}
                fps={fps}
                hdr={enableHdr}
                lowLightBoost={device.supportsLowLightBoost && enableNightMode}
                isActive={isActive}
                onInitialized={onInitialized}
                onError={onError}
                enableZoomGesture={false}
                // animatedProps={cameraAnimatedProps}
                photo={true}
                video={false}
                audio={hasMicrophonePermission}
                orientation="portrait"
              />
            </TapGestureHandler>
          </Reanimated.View>
        </PinchGestureHandler>
      )}

      {/* All Buttons related to camera screen  */}
      {cameraPermission && (
        <CaptureButton
          style={styles.captureButton}
          camera={camera}
          onMediaCaptured={onMediaCaptured}
          cameraZoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          flash={supportsFlash ? flash : "off"}
          enabled={isCameraInitialized && isActive}
          setIsPressingButton={setIsPressingButton}
        />
      )}

      <MyTouchableOpacity
        onPress={() => {
          goBack();
        }}
        style={{
          backgroundColor: COLORS.brownGray + 65,
          height: SIZES.twentyFive * 1.75,
          width: SIZES.twentyFive * 1.75,
          position: "absolute",
          borderRadius: width,
          top: height * 0.04,
          left: width * 0.02,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IonIcon
          name={"ios-close"}
          size={SIZES.twentyFive * 1.35}
          color={COLORS.white}
        />
      </MyTouchableOpacity>

      {/* <View style={styles.rightButtonRow}>
        {supportsCameraFlipping && (
          <MyTouchableOpacity style={styles.button} onPress={onFlipCameraPressed} disabledOpacity={0.4}>
            <IonIcon name="camera-reverse" color="white" size={24} />
          </MyTouchableOpacity>
        )}
        {supportsFlash && (
          <MyTouchableOpacity style={styles.button} onPress={onFlashPressed} disabledOpacity={0.4}>
            <IonIcon name={flash === 'on' ? 'flash' : 'flash-off'} color="white" size={24} />
          </MyTouchableOpacity>
        )}
        {supports60Fps && (
          <MyTouchableOpacity style={styles.button} onPress={() => setIs60Fps(!is60Fps)}>
            <Text style={styles.text}>
              {is60Fps ? '60' : '30'}
              {'\n'}FPS
            </Text>
          </MyTouchableOpacity>
        )}
        {supportsHdr && (
          <MyTouchableOpacity style={styles.button} onPress={() => setEnableHdr((h) => !h)}>
            <MaterialIcon name={enableHdr ? 'hdr' : 'hdr-off'} color="white" size={24} />
          </MyTouchableOpacity>
        )}
        {canToggleNightMode && (
          <MyTouchableOpacity style={styles.button} onPress={() => setEnableNightMode(!enableNightMode)} disabledOpacity={0.4}>
            <IonIcon name={enableNightMode ? 'moon' : 'moon-outline'} color="white" size={24} />
          </MyTouchableOpacity>
        )}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  captureButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: height * 0.02,
  },
  button: {
    marginBottom: SIZES.fifteen,
    width: SIZES.twentyFive * 1.8,
    height: SIZES.twentyFive * 1.8,
    borderRadius: (SIZES.twentyFive * 1.8) / 2,
    backgroundColor: "rgba(140, 140, 140, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButtonRow: {
    position: "absolute",
    right: SIZES.fifteen,
    top: getStatusBarHeight() * 1.8,
  },
  text: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
  },
});

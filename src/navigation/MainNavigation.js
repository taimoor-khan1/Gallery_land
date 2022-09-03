import { Linking, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { COLORS, SCREENS, SIZES } from "../constants";
import SplashScreen from "../screens/auth/SplashScreen";
import StartUp from "../screens/auth/StartUp";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Verification from "../screens/auth/Verification";
import ResetPassword from "../screens/auth/ResetPassword";
import Feed from "../screens/feed/Feed";
import BottomTabNavigation from "./TabBar/BottomTabNavigation";

import ProfileScreen from "../screens/Profile/Profile";
import EditProfile from "../screens/Profile/EditProfile";
import AboutApp from "../screens/Content/Aboutapp";
import TermsAndConditions from "../screens/Content/TermsAndCondition";
import PrivacyAndPolicy from "../screens/Content/PrivacyAndPolicy";
import Notifications from "../screens/notification/Notification";
import Setting from "../screens/settings/Setting";
import Support from "../screens/Content/Support";
import Search from "../screens/seacrh/Search";
import NearBy from "../screens/nearby/NearBy";
import TopArtist from "../screens/artist/TopArtist";
import SingleNFT from "../screens/artist/SingleNFT";
import MyCard from "../screens/myCard/MyCard";
import NotificationSettings from "../screens/notification/NotificationSettings";
import Gallery from "../screens/gallery/Gallery";
import CameraPage from "../components/camera/CameraPage";
import { Camera } from "react-native-vision-camera";
import ExploreLand from "../screens/exploreland/ExploreLand";
import { BackButton } from "../components";
import OtherProfile from "../screens/Profile/OtherProfile";
import LinearGradient from "react-native-linear-gradient";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

export default function (props) {
  const [appLoading, setAppLoading] = useState(true);
  const [cameraPermission, setCameraPermission] = useState();
  const [microphonePermission, setMicrophonePermission] = useState();
  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    Camera.getCameraPermissionStatus().then((status) => {
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
    });
    Camera.getMicrophonePermissionStatus().then((status) => {
      if (status === "authorized") {
        setCameraPermission(true);
        return;
      }
      Camera.requestMicrophonePermission().then((value) => {
        if (value === "authorized") {
          setMicrophonePermission(true);
          return;
        }
        Linking.openSettings();
      });
    });
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName={SCREENS.SplashScreen}
        >
          {appLoading ? (
            <Stack.Screen name={SCREENS.Splash} component={SplashScreen} />
          ) : (
            <>
              <Stack.Screen name={SCREENS.Startup} component={StartUp} />
              <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
              <Stack.Screen name={SCREENS.Login} component={Login} />
              <Stack.Screen
                name={SCREENS.ForgotPassword}
                component={ForgetPassword}
              />
              <Stack.Screen
                name={SCREENS.ResetPassword}
                component={ResetPassword}
              />
              <Stack.Screen
                name={SCREENS.Verification}
                component={Verification}
              />
              <Stack.Screen
                name={SCREENS.TabBar}
                component={BottomTabNavigation}
              />
              <Stack.Screen
                name={SCREENS.EditProfile}
                component={EditProfile}
              />
              <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
              <Stack.Screen name={SCREENS.NearByMapView} component={NearBy} />
              <Stack.Screen
                name={SCREENS.Noitification}
                component={Notifications}
              />
              <Stack.Screen
                name={SCREENS.TermsAndConditions}
                component={TermsAndConditions}
              />
              <Stack.Screen
                name={SCREENS.PrivacyAndPolicy}
                component={PrivacyAndPolicy}
              />
              <Stack.Screen name={SCREENS.Setting} component={Setting} />
              <Stack.Screen name={SCREENS.Seacrh} component={Search} />

              <Stack.Screen
                name={SCREENS.OtherProfile}
                component={(props) => (
                  <OtherProfile otherProfile={true} {...props} />
                )}
                options={{
                  headerShown: true,
                  headerTransparent: false,
                  headerShadowVisible: false,
                  headerMode: "float",
                  headerLeft: () => (
                    <View
                      style={{
                        paddingHorizontal: SIZES.ten,
                      }}
                    >
                      <BackButton />
                    </View>
                  ),
                  headerBackground: () => (
                    <LinearGradient
                      start={{ x: 1, y: 1 }}
                      end={{ x: -0.1, y: 1 }}
                      colors={[COLORS.secondary, COLORS.white].reverse()}
                      style={{ flex: 1 }}
                    />
                  ),
                  headerTitle: "",
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name={SCREENS.Profile}
                component={(props) => (
                  <ProfileScreen otherProfile={false} hasBackArrow {...props} />
                )}
              />
              <Stack.Screen name={SCREENS.HelpAndSupport} component={Support} />
              <Stack.Screen name={SCREENS.Gallery} component={Gallery} />
              <Stack.Screen name={SCREENS.TopArtist} component={TopArtist} />
              <Stack.Screen name={SCREENS.SingleNFT} component={SingleNFT} />
              <Stack.Screen
                name={SCREENS.CameraPage}
                component={CameraPage}
                animation
                options={{
                  animationEnabled: true,
                  ...TransitionPresets.BottomSheetAndroid,
                  cardStyleInterpolator:
                    CardStyleInterpolators.forBottomSheetAndroid,
                }}
              />
              <Stack.Screen name={SCREENS.MyCard} component={MyCard} />
              <Stack.Screen
                name={SCREENS.ExploreLand}
                component={ExploreLand}
                options={{
                  headerShown: true,
                  headerTransparent: true,
                  headerLeft: () => (
                    <View
                      style={{
                        paddingHorizontal: SIZES.ten,
                      }}
                    >
                      <BackButton />
                    </View>
                  ),
                  headerTitle: "",
                }}
              />
              <Stack.Screen
                name={SCREENS.NotificationSettings}
                component={NotificationSettings}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

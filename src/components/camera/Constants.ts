import { Dimensions, Platform } from 'react-native';
import { SIZES } from '../../constants';

export const CONTENT_SPACING = SIZES.twenty;

const SAFE_BOTTOM =
  Platform.select({
    ios: 50,
  }) ?? 0;

export const SAFE_AREA_PADDING = {
  paddingLeft: SIZES.fifteen + CONTENT_SPACING,
  paddingTop: SIZES.fifteen + CONTENT_SPACING,
  paddingRight: SIZES.fifteen + CONTENT_SPACING,
  paddingBottom: SAFE_BOTTOM + CONTENT_SPACING,
};

// The maximum zoom _factor_ you should be able to zoom in
export const MAX_ZOOM_FACTOR = 20;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Platform.select<number>({
  android: Dimensions.get('screen').height - 50,
  ios: Dimensions.get('window').height,
}) as number;

// Capture Button
export const CAPTURE_BUTTON_SIZE = 78;

export type Routes = {
  PermissionsPage: undefined;
  CameraPage: undefined;
  MediaPage: {
    path: string;
    type: 'video' | 'photo';
  };
};


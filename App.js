import React, { useEffect, useState } from "react";
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { COLORS, FONTS, IMAGES, SIZES } from "./src/constants";
import Icon, { IconType } from "./src/components/Icon";

import MainNavigation from "./src/navigation/MainNavigation";

//Redux imports
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/redux/store";

import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from "react-native-safe-area-context";

const App = () => {
  const [networkState, setNetworkState] = useState(true);
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async (state) => {
      setTimeout(() => {
        if (
          state.isInternetReachable !== null &&
          state.isInternetReachable !== undefined
        ) {
          setNetworkState(state.isInternetReachable);
        }
      }, 1000);
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={[styles.safeAreaView]}>
          <StatusBar
            backgroundColor={COLORS.transparent}
            translucent={Platform.OS === "android"}
            barStyle={
              Platform.OS === "android" ? "dark-content" : "dark-content"
            }
          />
          {networkState ? (
            // <Provider store={store}>
            <MainNavigation />
          ) : (
            // </Provider>
            <ImageBackground
              source={IMAGES.noWifi}
              resizeMode="cover"
              style={{ flex: 1 }}
            />
          )}
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;

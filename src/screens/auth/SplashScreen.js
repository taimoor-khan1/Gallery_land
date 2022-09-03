import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { IMAGES, SIZES, STYLES } from "../../constants/theme";
import * as Animatable from "react-native-animatable";

export default function SplashScreen() {
  return (
    <ImageBackground
      style={[
        STYLES.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
      source={IMAGES.Splash}
      resizeMode="cover"
    >
      <Animatable.Image
        easing="ease-in"
        iterationCount="infinite"
        animation="wobble"
        source={IMAGES.Logo}
        style={{ width: SIZES.fifty * 3.5, height: SIZES.fifty * 3.5 }}
        resizeMode="contain"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

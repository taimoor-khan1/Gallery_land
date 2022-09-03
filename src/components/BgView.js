import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { COLORS, IMAGES, STYLES } from "../constants";

export default function BgView(props) {
  const { style } = props;
  return (
    <View style={STYLES.container}>
      {/* <SafeAreaView style={STYLES.container}> */}
      <ImageBackground
        source={IMAGES.BgView}
        style={[{ flex: 1 }, style]}
        resizeMode="stretch"
      >
        {props.children}
      </ImageBackground>
      {/* <LinearGradient
        start={{ x: -5, y: 2 }}
        end={{ x: -12, y: -8 }}
        colors={[
          COLORS.white,
          COLORS.secondary,
          COLORS.white,
          COLORS.secondary,
        ]}
        style={[{ flex: 1 }, style]}
      >
        {props.children}
      </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({});

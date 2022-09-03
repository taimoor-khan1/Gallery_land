import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import BackButton from "./BackButton";
import { COLORS, SIZES } from "../constants";

export default function AuthHeader() {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 3 }}
        end={{ x: 2, y: 2 }}
        colors={[
          COLORS.primary,
          COLORS.secondary,
          COLORS.secondary,
          // COLORS.primary,
        ]}
        style={[styles.Header]}
      >
        <BackButton />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: SIZES.fifty,
    paddingBottom: SIZES.twentyFive,
    paddingLeft: SIZES.fifteen,
    borderBottomRightRadius: SIZES.twentyFive,
    borderBottomLeftRadius: SIZES.twentyFive,
  },
});

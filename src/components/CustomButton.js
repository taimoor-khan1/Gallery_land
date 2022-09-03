import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import MyTouchableOpacity from "./MyTouchableOpacity";
import { COLORS, FONTS, SIZES } from "../constants";
import Icon, { IconType } from "./Icon";
import LinearGradient from "react-native-linear-gradient";

export default function CustomButton(props) {
  const {
    title,
    btnStyle,
    titleStyle,
    onPress,
    disabled,
    hasForwordArrow,
    transparent,
    mediumText,
    small,
  } = props;

  return (
    <LinearGradient
      start={{ x: 0, y: 2 }}
      end={{ x: 1.3, y: 2 }}
      angle={35}
      colors={
        transparent
          ? [COLORS.transparent, COLORS.transparent]
          : [COLORS.secondary, COLORS.primary, COLORS.primary]
      }
      style={[
        !small && styles.container,
        { borderRadius: SIZES.fifty * 3 },
        small && {
          paddingHorizontal: SIZES.ten,
          paddingVertical: SIZES.ten,
          borderRadius: SIZES.fifteen,
        },
        btnStyle,
      ]}
    >
      <MyTouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Text
          style={[
            small
              ? FONTS.mediumFont12
              : mediumText
              ? FONTS.mediumFont14
              : FONTS.boldFont18,

            !small && styles.textStyle,
            titleStyle,
            transparent ? { color: COLORS.brownGray } : { color: COLORS.white },
          ]}
        >
          {title}
        </Text>
        {hasForwordArrow && (
          <Icon
            name="right"
            type={IconType.AntDesign}
            size={SIZES.twenty}
            color={COLORS.white}
            style={styles.iconStyle}
          />
        )}
      </MyTouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    // paddingVertical: SIZES.fifteen * 1.3,
    borderRadius: SIZES.fifty * 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.transparent,
    // paddingHorizontal: SIZES.twenty,
  },
  textStyle: {
    color: COLORS.white,
    // fontWeight: "650",
    // fontSize: SIZES.twenty * 1.3,
  },
  iconStyle: {
    right: SIZES.fifteen,
    position: "absolute",
  },
});

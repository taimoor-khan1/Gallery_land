import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { IconType, MyTouchableOpacity, Icon } from "../components";

import { FONTS, SIZES, COLORS } from "../constants/theme";
import utils from "../utils";

export default function CustomTextInput(props) {
  const {
    email,
    value,
    hasIcon,
    iconType,
    iconName,
    password,
    style,
    label,
    required = true,
    showArrow,
    multiline,
  } = props;

  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureTextIcon, setSecureTextIcon] = useState("eye");
  const [iconColor, setIconColor] = useState(COLORS.charcoalGrey);
  const [borderColor, setBorderColor] = useState(COLORS.charcoalGrey);

  const showPassword = () => {
    if (secureTextIcon === "eye") {
      setSecureTextIcon("eye-slash");
      setSecureText(false);
    } else {
      setSecureTextIcon("eye");
      setSecureText(true);
    }
  };

  const validate = () => {
    if (utils.isEmptyOrSpaces(value)) {
      return false;
    } else if (email && !utils.validateEmail(value)) {
      return false;
    } else {
      return true;
    }
  };

  const errorMsg = () => {
    if (utils.isEmptyOrSpaces(value)) {
      return "This field is required!";
    } else if (email && !utils.validateEmail(value)) {
      return "Invalid email!";
    } else {
      return "";
    }
  };

  return (
    <View style={{ marginTop: SIZES.twentyFive }}>
      {label && (
        <Text style={[FONTS.mediumFont14, styles.labelStyle]}>{label}</Text>
      )}

      <View
        style={[
          styles.container,
          style,
          {
            borderColor: borderColor,
            height: multiline ? 130 : 65,
          },
        ]}
      >
        <View style={styles.flexRow}>
          <View style={[{ flex: 1 }, styles.flexRow]}>
            {hasIcon ? (
              <View style={{ flex: 0.1 }}>
                <Icon
                  type={iconType}
                  name={iconName}
                  style={{
                    color: iconColor,
                    fontSize: SIZES.twenty,
                  }}
                />
              </View>
            ) : null}

            <TextInput
              {...props}
              selectionColor={COLORS.primary}
              placeholderTextColor={COLORS.gray}
              secureTextEntry={password ? secureText : false}
              style={[
                FONTS.mediumFont14,
                styles.txtInputStyle,
                {
                  height: multiline ? 120 : 60,
                  textAlignVertical: multiline ? "top" : "center",
                },
              ]}
              onFocus={() => {
                setFocused(true);
                setIconColor(COLORS.primary);
                setBorderColor(COLORS.secondary);
              }}
              onBlur={() => {
                setFocused(false);
                setIconColor(COLORS.charcoalGrey);
                setBorderColor(COLORS.charcoalGrey);
              }}
            />
          </View>

          {password ? (
            <MyTouchableOpacity
              onPress={showPassword}
              style={{ flex: 0.1, alignItems: "flex-end" }}
            >
              <Icon
                name={secureTextIcon}
                type={IconType.FontAwesome}
                style={styles.eyeIconStyle}
              />
            </MyTouchableOpacity>
          ) : showArrow ? (
            <Icon
              type={IconType.MaterialIcons}
              name="keyboard-arrow-down"
              style={{
                color: COLORS.gray + 85,
                fontSize: SIZES.twentyFive * 1.2,
              }}
            />
          ) : null}
        </View>
      </View>

      {focused && required && !validate() && (
        <Text style={[FONTS.mediumFont10, styles.errorTextStyle]}>
          {errorMsg()}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1.5,
    justifyContent: "center",
    borderRadius: SIZES.fifty,
    paddingHorizontal: SIZES.twentyFive,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  txtInputStyle: {
    flex: 1,
    color: COLORS.black,
  },
  eyeIconStyle: {
    fontSize: SIZES.twenty,
    marginLeft: SIZES.five,
    color: COLORS.charcoalGrey,
  },
  errorTextStyle: {
    color: "red",
    marginTop: SIZES.five,
    marginHorizontal: SIZES.ten,
  },
  labelStyle: {
    color: COLORS.primary,
    marginBottom: SIZES.ten,
  },
});

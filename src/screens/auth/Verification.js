import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants";
import {
  AuthHeader,
  BgView,
  CustomButton,
  CustomTextInput,
} from "../../components";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function Verification(props) {
  const { navigation, route } = props;
  const { data } = route?.params;
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 500);
  }, []);

  return (
    <BgView>
      <AuthHeader />
      <View style={{ flex: 1, paddingHorizontal: SIZES.twenty }}>
        <Text style={[FONTS.boldFont24, styles.heading]}>Verification</Text>
        <Text style={[FONTS.mediumFont14, { textAlign: "center" }]}>
          Enter your verification code that we send you through your email
        </Text>
        <View style={{ justifyContent: "space-around", flex: 1 }}>
          <OTPInputView
            code={code}
            pinCount={4}
            ref={inputRef}
            autoFocusOnLoad={false}
            onCodeChanged={(code) => setCode(code)}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            style={styles.otpContainer}
          />
          <CustomButton
            title={"Verify"}
            onPress={() => {
              navigation.navigate(
                data == SCREENS.ForgotPassword
                  ? SCREENS.ResetPassword
                  : SCREENS.Login
              );
            }}
          />
        </View>
      </View>
    </BgView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "900",
    alignSelf: "center",
    margin: SIZES.twentyFive,
  },
  otpContainer: {
    width: "100%",
    height: SIZES.twenty * 5,
  },
  underlineStyleBase: {
    width: SIZES.fifty,
    height: SIZES.fifty,
    borderWidth: 2,
    borderRadius: SIZES.fifty,
    borderColor: COLORS.gray,
    fontSize: SIZES.h22,
    color: COLORS.black,
    fontFamily: FONTFAMILY.Light,
  },
  underlineStyleHighLighted: {
    width: SIZES.fifty,
    height: SIZES.fifty,
    borderWidth: 2,
    borderRadius: SIZES.fifty,
    borderColor: COLORS.primary,
    fontSize: SIZES.h22,
    fontFamily: FONTFAMILY.Light,
  },
});

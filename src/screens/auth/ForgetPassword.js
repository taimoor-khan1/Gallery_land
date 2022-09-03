import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import {
  COLORS,
  FONTS,
  height,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants/theme";
import LinearGradient from "react-native-linear-gradient";
import {
  AuthHeader,
  BackButton,
  BgView,
  CustomButton,
  CustomTextInput,
} from "../../components";
import { useState } from "react";

export default function ForgetPassword(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");

  return (
    <BgView>
      <AuthHeader />
      <ScrollView
        style={{ flex: 1, paddingHorizontal: SIZES.twenty }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={[FONTS.boldFont24, styles.heading]}>Forgot Password?</Text>
        <Text style={[FONTS.mediumFont14, { textAlign: "center" }]}>
          Enter your email & we will send you a verification code
        </Text>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          label={"Email"}
          email
        />
        <CustomButton
          title={"Continue"}
          btnStyle={{
            position: "absolute",
            bottom: height * 0.015,
            width: "100%",
            alignSelf: "center",
          }}
          onPress={() => {
            navigation.navigate(SCREENS.Verification, {
              data: SCREENS.ForgotPassword,
            });
          }}
        />
      </ScrollView>
    </BgView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: "900",
    alignSelf: "center",
    margin: SIZES.twentyFive,
  },
});

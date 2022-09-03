import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FONTS, SCREENS, SIZES, STYLES } from "../../constants";
import {
  AuthHeader,
  BgView,
  CustomButton,
  CustomTextInput,
} from "../../components";
import { useState } from "react";

export default function ResetPassword(props) {
  const { navigation } = props;
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  return (
    <BgView>
      <AuthHeader />
      <View style={{ flex: 1, paddingHorizontal: SIZES.twenty }}>
        <Text style={[FONTS.boldFont24, styles.heading]}>Reset Password?</Text>

        <View style={{ flex: 1 }}>
          <CustomTextInput
            value={password}
            onChangeText={setPassword}
            label={"New Password"}
            password
          />
          <CustomTextInput
            value={reTypePassword}
            onChangeText={setReTypePassword}
            label={"Re Type Password"}
            password
          />

          <CustomButton
            title={"Continue"}
            btnStyle={{ marginTop: SIZES.fifty * 3 }}
            onPress={() => navigation.navigate(SCREENS.Login)}
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
});

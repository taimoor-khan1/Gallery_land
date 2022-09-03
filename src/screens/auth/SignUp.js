import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { STYLES } from "../../constants";
import {
  BgView,
  CustomButton,
  CustomTextInput,
  MyTouchableOpacity,
  PhoneTextInput,
  Row,
} from "../../components";
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from "../../constants/theme";

export default function SignUp(props) {
  const { navigation } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(1);
  return (
    <BgView style={STYLES.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode={"never"}
      >
        <ImageBackground
          borderBottomLeftRadius={SIZES.twentyFive}
          borderBottomRightRadius={SIZES.twentyFive}
          style={styles.AuthBackground}
          source={IMAGES.SignUp_Bg}
          resizeMode="cover"
        >
          <View style={[styles.headerContainer]}>
            <Text style={[FONTS.boldFont24, { fontWeight: "800" }]}>
              Sign Up
            </Text>
            <Text style={[FONTS.mediumFont14]}>Enter your details below</Text>
            <Text
              style={[
                FONTS.mediumFont14,
                { textAlign: "justify", marginTop: SIZES.twenty },
              ]}
            >
              *Lorem ipsum dolor sit amet, consectetur adipis elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua.
            </Text>
          </View>
        </ImageBackground>
        {/* <View style={{ height: SIZES.twentyFive * 1.3 }} /> */}
        <View style={{ padding: SIZES.twenty }}>
          <CustomTextInput
            value={name}
            onChangeText={setName}
            placeholder={"Name"}
            label={"Full name"}
          />
          <CustomTextInput
            value={email}
            placeholder={"Email"}
            onChangeText={setEmail}
            label={"Email"}
            email
          />
          <PhoneTextInput
            label="Mobile Phone"
            placeholder={"Phone Number"}
            phone={phoneNumber}
            setPhone={setPhoneNumber}
            setCountryCode={setCountryCode}
          />

          <CustomTextInput
            placeholder={"Password"}
            value={password}
            onChangeText={setPassword}
            label={"Password"}
            password
          />
          <CustomTextInput
            value={reTypePassword}
            placeholder={"Re Type Password"}
            onChangeText={setReTypePassword}
            label={"Re Type Password"}
            password
          />
          <Text
            style={[
              FONTS.mediumFont14,
              { marginVertical: SIZES.fifteen, textAlign: "center" },
            ]}
          >
            By connecting your wallet, you agree to our Terms of Service & our
            Privacy Policy
          </Text>
          <CustomButton
            title={"Sign up"}
            onPress={() =>
              navigation.navigate(SCREENS.Verification, {
                data: SCREENS.SignUp,
              })
            }
          />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.twenty,
            }}
          >
            <Text style={[FONTS.mediumFont14]}>Already have an account?</Text>
            <MyTouchableOpacity
              onPress={() => navigation.navigate(SCREENS.Login)}
            >
              <Text style={[FONTS.boldFont16, { color: COLORS.primary }]}>
                {" "}
                Log in
              </Text>
            </MyTouchableOpacity>
          </Row>
        </View>
      </ScrollView>
    </BgView>
  );
}
const styles = StyleSheet.create({
  AuthBackground: {
    width: "100%",
    height: SIZES.fifty * 5,
    alignItems: "center",
    justifyContent: "flex-end",
    justifyContent: "center",
  },
  headerContainer: {
    backgroundColor: COLORS.white + 90,
    padding: SIZES.twenty,
    marginHorizontal: SIZES.twenty,
    borderRadius: SIZES.twenty,
    alignItems: "center",
    marginBottom: -SIZES.twentyFive * 1.2,
  },
});

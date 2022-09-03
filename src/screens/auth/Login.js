import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Animated,
} from "react-native";
import { IMAGES, STYLES } from "../../constants";
import { COLORS, FONTS, height, SCREENS, SIZES } from "../../constants/theme";
import {
  BgView,
  CustomButton,
  CustomTextInput,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { BlurView, VibrancyView } from "@react-native-community/blur";

export default function Login(props) {
  const imageHeight = new Animated.Value(height * 0.45);
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <BgView style={STYLES.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode={"never"}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ImageBackground
          borderBottomLeftRadius={SIZES.twentyFive}
          borderBottomRightRadius={SIZES.twentyFive}
          style={styles.AuthBackground}
          source={IMAGES.Auth_Bg}
          resizeMode="cover"
        >
          <View style={[styles.headerContainer]}>
            <Text style={[FONTS.boldFont24, { fontWeight: "800" }]}>
              Log In
            </Text>
            <Text style={[FONTS.mediumFont14]}>Enter your details below</Text>
            <Text
              style={[
                FONTS.mediumFont14,
                { textAlign: "justify", marginBottom: SIZES.ten },
              ]}
            >
              *Lorem ipsum dolor sit amet, consectetur adipis elit, sed do
              eiusmod tempor ut labore et dolore magna aliqua.
            </Text>
          </View>
        </ImageBackground>

        <View style={{ padding: SIZES.twenty }}>
          <CustomTextInput
            value={email}
            placeholder={"Email"}
            onChangeText={setEmail}
            label={"Email"}
            email
          />
          <CustomTextInput
            value={password}
            placeholder={"Password"}
            onChangeText={setPassword}
            label={"Password"}
            password
          />
          <MyTouchableOpacity
            onPress={() => navigation.navigate(SCREENS.ForgotPassword)}
          >
            <Text style={[FONTS.mediumFont12, styles.forgetpass]}>
              Forget Password?
            </Text>
          </MyTouchableOpacity>
          <CustomButton
            title={"Login"}
            onPress={() => navigation.navigate(SCREENS.TabBar)}
          />
          <Row style={{ justifyContent: "center", marginTop: SIZES.twenty }}>
            <Text style={[FONTS.mediumFont14]}>Not a member?</Text>
            <MyTouchableOpacity
              onPress={() => navigation.navigate(SCREENS.SignUp)}
            >
              <Text style={[FONTS.boldFont16, { color: COLORS.primary }]}>
                {" "}
                Create Account
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
    // width: "100%",
    height: height * 0.45,
    alignItems: "center",
    justifyContent: "flex-end",
    justifyContent: "center",
    // aspectRatio: 1.35,
  },
  headerContainer: {
    backgroundColor: COLORS.white + 90,
    padding: SIZES.twenty,
    marginHorizontal: SIZES.twenty,
    borderRadius: SIZES.twenty,
    alignItems: "center",
    marginBottom: -SIZES.twentyFive * 1.2,
  },
  forgetpass: {
    color: COLORS.primary,
    marginVertical: SIZES.twenty,
    alignSelf: "flex-end",
  },
});

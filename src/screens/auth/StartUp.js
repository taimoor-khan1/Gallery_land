import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import {
  IMAGES,
  SIZES,
  STYLES,
  FONTS,
  SCREENS,
  height,
} from "../../constants/theme";
import CustomButton from "../../components/CustomButton";
import { BgView } from "../../components";

export default function StartUp(props) {
  const { navigation } = props;
  return (
    <BgView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={IMAGES.IntroLogo}
            style={styles.intoimage}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.Logo}
            style={styles.Logo}
            resizeMode="contain"
          />

          <Text style={[FONTS.boldFont22, { marginTop: SIZES.twenty }]}>
            Collect digital art
          </Text>
          <Text style={[FONTS.mediumFont14, { marginTop: SIZES.ten }]}>
            Buy & sell NFTs from the worlds top artists
          </Text>
        </View>
      </ScrollView>
      <CustomButton
        onPress={() => navigation.navigate(SCREENS.Login)}
        title={"Lets Get Started"}
        btnStyle={{ margin: SIZES.twentyFive }}
      />
    </BgView>
  );
}

const styles = StyleSheet.create({
  intoimage: {
    aspectRatio: 0.7,
    height: height * 0.4,
    // flex: 0.5,
    // margin: SIZES.ten,
    marginTop: SIZES.twentyFive,
  },
  Logo: {
    width: SIZES.fifty * 3,
  },
});

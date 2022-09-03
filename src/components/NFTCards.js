import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SIZES,
  width,
} from "../constants/theme";
import Row from "./Row";
import Icon, { IconType } from "./Icon";
import CircularImage from "./CircularImage";

export default function NFTCards(props) {
  const { image, title, name, username, lastActivem, like, style } = props;
  return (
    <ImageBackground
      source={image || IMAGES.Nft1}
      resizeMode="cover"
      imageStyle={{ borderRadius: SIZES.twenty }}
      style={style || styles.container}
    >
      <View style={styles.innerView}>
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Text style={FONTS.boldFont18}>Feel the space</Text>
          <Row style={{ alignItems: "center" }}>
            <Text style={[FONTS.boldFont16, { marginHorizontal: SIZES.ten }]}>
              1.5K
            </Text>
            <Icon
              name="heart"
              type={IconType.AntDesign}
              size={SIZES.twenty}
              color={COLORS.Red}
            />
          </Row>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            paddingVertical: SIZES.fifteen,
          }}
        >
          <Row style={{ alignItems: "center" }}>
            <CircularImage image={IMAGES.User} />
            <View
              style={{
                marginHorizontal: SIZES.fifteen,
                justifyContent: "space-around",
              }}
            >
              <Text
                style={[FONTS.boldFont18, { fontSize: SIZES.fifteen * 1.13 }]}
              >
                Adam Knight
              </Text>
              <Text
                style={[FONTS.mediumFont12, { color: COLORS.blackWithopacity }]}
              >
                @knight_653
              </Text>
            </View>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Icon
              style={{ marginRight: SIZES.ten }}
              name="clockcircleo"
              type={IconType.AntDesign}
              size={SIZES.fifteen}
              color={COLORS.gray}
            />
            <Text style={[FONTS.boldFont16]}>03:00</Text>
          </Row>
        </Row>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.fifteen,
    marginHorizontal: SIZES.fifteen,
    padding: SIZES.twenty,
    width: width * 0.95,
    alignSelf: "center",
    aspectRatio: 0.8,
    overflow: "hidden",
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
    borderColor: COLORS.black + 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  innerView: {
    backgroundColor: `${COLORS.lightGray}65`,
    padding: SIZES.twenty,
    borderRadius: SIZES.ten,
  },
});

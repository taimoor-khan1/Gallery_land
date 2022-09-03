import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import {
  BgView,
  CircularImage,
  CustomHeader,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { COLORS, FONTS, height, IMAGES, SIZES } from "../../constants";

export default function MyCard(props) {
  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <Image
        source={{
          uri: Image.resolveAssetSource(IMAGES.TopHalfBg).uri,
          cache: "force-cache",
        }}
        style={{
          height: "33%",
          // aspectRatio: 1.72,
          ...StyleSheet.absoluteFillObject,
          borderRadius: SIZES.twentyFive,
        }}
      />
      <CustomHeader hasBackArrow title={"My Card"} />
      <View style={styles.innerView}>
        <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
          <View>
            <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
              Your Balance
            </Text>
            <Text style={[FONTS.boldFont18, { color: COLORS.white }]}>
              15,365 US$
            </Text>
          </View>
        </Row>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <View>
            <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
              Expiry
            </Text>
            <Text style={[FONTS.boldFont18, { color: COLORS.white }]}>
              12/26
            </Text>
          </View>
          <View>
            <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
              Expiry
            </Text>
            <Text style={[FONTS.boldFont18, { color: COLORS.white }]}>
              12/26
            </Text>
          </View>
        </Row>

        <Row
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: SIZES.twenty,
          }}
        >
          <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
            Cardholder:
          </Text>
          <Text
            style={[
              FONTS.boldFont18,
              { color: COLORS.white, marginHorizontal: SIZES.ten },
            ]}
          >
            John Deen
          </Text>
        </Row>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: height * 0.025,
          padding: SIZES.fifteen,
        }}
      >
        <Text style={[FONTS.boldFont18, { color: COLORS.black }]}>
          Latest Transactions
        </Text>
        {data.map((item, index) => (
          <MyTouchableOpacity
            key={index}
            style={{ marginVertical: SIZES.fifteen }}
          >
            <Row
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <CircularImage image={IMAGES.User} />
                <View style={{ marginHorizontal: SIZES.ten }}>
                  <Text style={[FONTS.boldFont16, { color: COLORS.black }]}>
                    Archetype #356
                  </Text>
                  <Text
                    style={[
                      FONTS.mediumFont12,
                      { color: COLORS.gray, marginTop: SIZES.five },
                    ]}
                  >
                    Dipaulwood
                  </Text>
                </View>
              </Row>
              <Text style={[FONTS.mediumFont14, { color: COLORS.primary }]}>
                $623.156
              </Text>
            </Row>
          </MyTouchableOpacity>
        ))}
      </ScrollView>
    </BgView>
  );
}

const styles = StyleSheet.create({
  innerView: {
    backgroundColor: `${COLORS.gray}65`,
    paddingTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
    paddingVertical: SIZES.ten,
    borderRadius: SIZES.ten,
    marginHorizontal: SIZES.twentyFive * 1.5,
    marginTop: SIZES.twentyFive,
    marginBottom: SIZES.fifteen,
  },
});

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import PaginationDot from "react-native-animated-pagination-dot";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SIZES,
  STYLES,
  width,
} from "../../constants";
import {
  BgView,
  CircularImage,
  CustomButton,
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import CustomModal from "../../components/CustomModal";
import LinearGradient from "react-native-linear-gradient";
import ProgressiveImage from "rn-progressive-image";
import FastImage from "react-native-fast-image";

const ACTIVE_TAB_WIDTH = width / 3.15;
const ACTIVE_TAB_HEIGHT = height * 0.05;

export default function SingleNFT(props) {
  const activeTab = useRef(new Animated.Value(0)).current;
  const activeTabIndicator = useRef(new Animated.Value(5)).current;
  const [reviewModal, setReviewModal] = useState(false);
  const [selectTab, setSelectTab] = useState(0);
  const [visibleOffer, setVisibleOffer] = React.useState(0);

  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);

  useEffect(() => {
    console.log("asdas");
    if (selectTab === 0) {
      Animated.timing(activeTabIndicator, {
        toValue: 5,
        duration: 150,
        easing: Easing.linear,
      }).start(() => {
        Animated.timing(activeTab, {
          toValue: 0,
          duration: 150,
          easing: Easing.linear,
        }).start(() => {
          Animated.spring(activeTabIndicator, {
            toValue: ACTIVE_TAB_HEIGHT,
            easing: Easing.linear,
          }).start();
        });
      });
    } else if (selectTab === 1) {
      Animated.timing(activeTabIndicator, {
        toValue: 5,
        duration: 150,
        easing: Easing.linear,
      }).start(() => {
        Animated.timing(activeTab, {
          toValue: ACTIVE_TAB_WIDTH,
          duration: 150,
          easing: Easing.linear,
        }).start(() => {
          Animated.spring(activeTabIndicator, {
            toValue: ACTIVE_TAB_HEIGHT,
            easing: Easing.linear,
          }).start();
        });
      });
    } else if (selectTab === 2) {
      Animated.timing(activeTabIndicator, {
        toValue: 5,
        duration: 150,
        easing: Easing.linear,
      }).start(() => {
        Animated.timing(activeTab, {
          toValue: ACTIVE_TAB_WIDTH * 2,
          duration: 150,
          easing: Easing.linear,
        }).start(() => {
          Animated.spring(activeTabIndicator, {
            toValue: ACTIVE_TAB_HEIGHT,
            easing: Easing.linear,
          }).start();
        });
      });
    }
  }, [selectTab]);

  const firstView = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [
      ACTIVE_TAB_WIDTH * 3,
      -(ACTIVE_TAB_WIDTH * 3 * 2),
      -(ACTIVE_TAB_WIDTH * 3 * 3),
    ],
    extrapolate: "clamp",
  });

  const secondView = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [ACTIVE_TAB_WIDTH * 3 * 2, 0, -(ACTIVE_TAB_WIDTH * 3 * 3)],
    extrapolate: "clamp",
  });

  const ThirdView = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [
      ACTIVE_TAB_WIDTH * 3 * 2,
      ACTIVE_TAB_WIDTH * 3,
      -ACTIVE_TAB_WIDTH * 3,
    ],
    // outputRange: [-(ACTIVE_TAB_WIDTH * 3 * 3), -ACTIVE_TAB_WIDTH * 3 * 3, 0],
    extrapolate: "clamp",
  });

  const firstColor = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [COLORS.white, COLORS.black, COLORS.black],
    extrapolate: "clamp",
  });

  const secondColor = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [COLORS.black, COLORS.white, COLORS.black],
    extrapolate: "clamp",
  });

  const thirdColor = activeTab.interpolate({
    inputRange: [0, ACTIVE_TAB_WIDTH, ACTIVE_TAB_WIDTH * 2],
    outputRange: [COLORS.black, COLORS.black, COLORS.white],
    extrapolate: "clamp",
  });

  const KeyValue = ({ title, value, highlight }) => (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: SIZES.fifteen,
        paddingHorizontal: SIZES.ten * 1.35,
      }}
    >
      <Text style={[FONTS.boldFont16, { color: COLORS.black }]}>{title}</Text>
      <Text
        style={[
          FONTS.mediumFont14,
          { color: highlight ? COLORS.primary : COLORS.brownGray },
        ]}
      >
        {value}
      </Text>
    </Row>
  );

  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader hasBackArrow title={" "} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: SIZES.five,
          paddingBottom: height * 0.022,
        }}
      >
        <ProgressiveImage
          source={{
            uri: props?.route?.params?.pic,
            priority: FastImage.priority.high,
          }}
          style={{
            height: height * 0.45,
            width,
            borderBottomRightRadius: SIZES.twentyFive,
            borderBottomLeftRadius: SIZES.twentyFive,
          }}
          resizeMode={"contain"}
        />

        <View style={{ paddingTop: SIZES.twenty }}>
          <View style={{ paddingHorizontal: SIZES.fifteen }}>
            <Row
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Text style={[FONTS.boldFont20, { color: COLORS.black }]}>
                Woodland Tarantula
              </Text>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  type={IconType.AntDesign}
                  name={"heart"}
                  color={COLORS.primary}
                  style={{ marginHorizontal: SIZES.five }}
                  size={SIZES.twenty * 1.15}
                />
                <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
                  31 favorites
                </Text>
              </Row>
            </Row>
            <Row
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: SIZES.ten,
              }}
            >
              <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
                Owned by _mm
              </Text>
              <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon
                  type={IconType.Ionicons}
                  name={"ios-time-outline"}
                  color={COLORS.gray}
                  style={{ marginHorizontal: SIZES.five }}
                  size={SIZES.twenty * 1.15}
                />
                <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
                  3h ago
                </Text>
              </Row>
            </Row>
            <View style={STYLES.horLine} />

            <Text style={[FONTS.boldFont20, { color: COLORS.black }]}>
              Description
            </Text>
            <Text
              numberOfLines={2}
              style={[
                FONTS.mediumFont12,
                { color: COLORS.gray, marginVertical: SIZES.ten },
              ]}
            >
              8192 next-generation, high-fashion HAPES.
            </Text>
            <Text
              style={[
                FONTS.boldFont20,
                { color: COLORS.black, marginTop: SIZES.fifteen },
              ]}
            >
              Price
            </Text>
            <Text
              numberOfLines={2}
              style={[
                FONTS.mediumFont12,
                { color: COLORS.gray, marginVertical: SIZES.ten },
              ]}
            >
              ETH: 1.299 ($4,378.58)
            </Text>
          </View>
          <Row
            style={{
              alignSelf: "center",
              marginTop: SIZES.twenty,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
              backgroundColor: "white",
            }}
          >
            <MyTouchableOpacity
              style={styles.tabItem}
              onPress={() => {
                setSelectTab(0);
              }}
            >
              <Animated.Text
                style={[styles.tabItemText, { color: firstColor }]}
              >
                About
              </Animated.Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              style={styles.tabItem}
              onPress={() => {
                setSelectTab(1);
              }}
            >
              <Animated.Text
                style={[styles.tabItemText, { color: secondColor }]}
              >
                Details
              </Animated.Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              style={styles.tabItem}
              onPress={() => {
                setSelectTab(2);
              }}
            >
              <Animated.Text
                style={[styles.tabItemText, { color: thirdColor }]}
              >
                Offers
              </Animated.Text>
            </MyTouchableOpacity>

            <AnimatedLinearGradient
              start={{ x: 0, y: 2 }}
              end={{ x: 1.3, y: 2 }}
              angle={35}
              colors={[COLORS.secondary, COLORS.primary, COLORS.primary]}
              style={{
                width: width / 3.15,
                height: activeTabIndicator,
                bottom: 0,
                position: "absolute",
                backgroundColor: "green",
                left: activeTab,
                zIndex: -10,
              }}
            />
          </Row>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Animated.View
              style={{
                width: ACTIVE_TAB_WIDTH * 3,
                alignSelf: "center",
                transform: [{ translateX: firstView }],
                padding: SIZES.twenty,
              }}
            >
              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CircularImage
                  image={IMAGES.User}
                  imageStyle={styles.imageStyle}
                />
                <View style={{ marginHorizontal: SIZES.ten }}>
                  <Text style={[FONTS.boldFont22, { color: COLORS.black }]}>
                    {"Alexa John"}
                  </Text>
                  <Text
                    style={[FONTS.mediumFont12, { color: COLORS.brownGray }]}
                  >
                    {"@" + "alexa_john"}
                  </Text>
                </View>
              </Row>
              <Text style={[FONTS.mediumFont12, { color: COLORS.brownGray }]}>
                {`8K NEXT-GENERATION, HIGH FASHION HAPES

Unique, fully 3D and built to unite the ape 
multiverse. Designed and styled by Digimental.`}
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                width: ACTIVE_TAB_WIDTH * 3,
                alignSelf: "center",
                flexDirection: "column",
                justifyContent: "space-around",
                transform: [{ translateX: secondView }],
              }}
            >
              <KeyValue title={"Contract Address:"} value={"0x4db1...93af"} />
              <KeyValue title={"Token ID:"} value={"1165"} />
              <KeyValue title={"Blockchain:"} value={"Ethereum"} />
            </Animated.View>
            <Animated.View
              style={{
                width: ACTIVE_TAB_WIDTH * 3,
                alignSelf: "center",
                alignItems: "center",
                transform: [{ translateX: ThirdView }],
              }}
            >
              <ScrollView
                horizontal
                // viewabilityConfig={{ itemVisiblePercentThreshold: 90 }}
                pagingEnabled={true}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                style={{}}
                disableIntervalMomentum
                snapToInterval={ACTIVE_TAB_WIDTH * 3}
                onScroll={({ nativeEvent }) => {
                  // the current offset, {x: number, y: number}
                  const position = nativeEvent.contentOffset;
                  // page index
                  const index = Math.round(
                    nativeEvent.contentOffset.x / (ACTIVE_TAB_WIDTH * 3)
                  );

                  if (index !== visibleOffer) {
                    // onPageDidChanged
                    setVisibleOffer(index);
                  }
                }}
              >
                {data.map((_, index) => (
                  <View style={{ flex: 1, width: ACTIVE_TAB_WIDTH * 3 }}>
                    <KeyValue title={"Price:"} value={"1.122 WETH"} />
                    <KeyValue title={"Token ID:"} value={"$3,817.76"} />
                    <KeyValue title={"Floor Price:"} value={"16% below"} />
                    <KeyValue title={"Expiration:"} value={"3 hrs"} />
                    <KeyValue
                      title={"Offer From:"}
                      value={"Sabretooth NFT"}
                      highlight
                    />
                  </View>
                ))}
              </ScrollView>
              <PaginationDot
                activeDotColor={COLORS.primary}
                curPage={visibleOffer}
                maxPage={data.length}
                sizeRatio={0.5}
              />
            </Animated.View>
          </Row>

          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              paddingHorizontal: SIZES.fifteen,
              paddingVertical: SIZES.twenty,
            }}
          >
            <MyTouchableOpacity
              style={{
                height: 50,
                width: width * 0.35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 2 }}
                end={{ x: 1.3, y: 2 }}
                angle={35}
                colors={[COLORS.secondary, COLORS.primary, COLORS.primary]}
                style={{
                  paddingHorizontal: SIZES.twentyFive,
                  paddingVertical: SIZES.fifteen,
                  borderRadius: SIZES.five * 1.15,
                }}
              >
                <Text style={[FONTS.mediumFont14, { color: COLORS.white }]}>
                  Buy Now
                </Text>
              </LinearGradient>
            </MyTouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 2 }}
              end={{ x: 1.3, y: 2 }}
              angle={35}
              colors={[COLORS.secondary, COLORS.primary, COLORS.primary]}
              style={{
                padding: 1,
                borderRadius: SIZES.five * 1.15,
                height: 50,
                width: width * 0.35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MyTouchableOpacity
                style={{
                  height: "98%",
                  width: "98%",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  borderRadius: SIZES.five * 1.15,
                  // paddingHorizontal: SIZES.twentyFive,
                  // paddingVertical: SIZES.fifteen,
                  backgroundColor: COLORS.white,
                }}
              >
                <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
                  Make Offer
                </Text>
              </MyTouchableOpacity>
            </LinearGradient>
          </Row>
        </View>
      </ScrollView>

      <CustomModal
        isVisible={reviewModal}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onBackdropPress={() => {
          setReviewModal(false);
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            paddingTop: SIZES.ten,
            height: height * 0.9,
            borderTopLeftRadius: SIZES.twenty,
            borderTopRightRadius: SIZES.twenty,
          }}
        >
          <View
            style={{
              height: 4,
              width: "25%",
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.fifteen,
              alignSelf: "center",
            }}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            overScrollMode={"never"}
            style={{
              flex: 1,
              padding: SIZES.fifteen,
            }}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View>
              <Text
                style={[FONTS.boldFont20, { marginVertical: SIZES.fifteen }]}
              >
                Say Something about it!
              </Text>
              <Text
                style={[
                  FONTS.mediumFont12,
                  { color: COLORS.gray, marginVertical: SIZES.ten },
                ]}
              >
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </Text>
            </View>

            <Rating
              //   showRating
              onFinishRating={() => {}}
              style={{
                paddingVertical: SIZES.twentyFive,
              }}
            />
            <TextInput
              multiline
              placeholder="Write Review"
              placeholderTextColor={COLORS.gray}
              style={[
                FONTS.mediumFont12,
                {
                  textAlignVertical: "top",
                  paddingTop: SIZES.fifteen,
                  paddingVertical: SIZES.fifteen,
                  paddingHorizontal: SIZES.fifteen,
                  backgroundColor: COLORS.veryLightPink,
                  borderRadius: SIZES.ten,
                  minHeight: height * 0.15,
                  marginVertical: SIZES.twentyFive,
                  color: COLORS.black,
                },
              ]}
            />
          </ScrollView>
          <CustomButton
            title={"Publish"}
            btnStyle={{
              position: "absolute",
              bottom: height * 0.05,
              width: "90%",
              alignSelf: "center",
              marginHorizontal: SIZES.fifteen,
            }}
          />
        </View>
      </CustomModal>
    </BgView>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    width: ACTIVE_TAB_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    height: ACTIVE_TAB_HEIGHT,
  },
  tabItemText: [FONTS.mediumFont14, { color: "black" }],
  imageStyle: {
    width: SIZES.fifty * 1.15,
    height: SIZES.fifty * 1.15,
    marginBottom: SIZES.ten,
    alignSelf: "center",
  },
});

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

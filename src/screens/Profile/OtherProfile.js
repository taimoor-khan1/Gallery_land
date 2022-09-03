import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useEffect, useRef } from "react";
import {
  BgView,
  CircularImage,
  CustomButton,
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
  FlatGrid,
} from "../../components";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from "../../constants";
import { useNavigation } from "@react-navigation/native";
import RegisterLand from "../../components/modals/RegisterLand";
import FastImage from "react-native-fast-image";
import ProgressiveImage from "rn-progressive-image";

const H_MAX_HEIGHT = Platform.OS === "android" ? height * 0.48 : height * 0.43;
const H_MIN_HEIGHT = Platform.OS === "android" ? 0 : 0;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export default function OtherProfile(props) {
  const navigation = useNavigation();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const headerBG = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [COLORS.transparent, COLORS.secondary],
    extrapolate: "clamp",
  });

  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const titleOpacity = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

  const Social = () => {
    return (
      <Row
        style={[styles.socialContainer, { paddingHorizontal: SIZES.fifteen }]}
      >
        <MyTouchableOpacity
          style={{
            padding: SIZES.five * 0.45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name={"sc-facebook"}
            type={IconType.EvilIcons}
            color={COLORS.black}
            size={SIZES.twentyFive * 1.3}
          />
        </MyTouchableOpacity>

        <MyTouchableOpacity
          style={{
            padding: SIZES.five * 0.45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name={"instagram"}
            type={IconType.AntDesign}
            color={COLORS.black}
            size={SIZES.twentyFive}
          />
        </MyTouchableOpacity>
        <MyTouchableOpacity
          style={{
            padding: SIZES.five * 0.45,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name={"twitter"}
            type={IconType.AntDesign}
            color={COLORS.black}
            size={SIZES.twentyFive}
          />
        </MyTouchableOpacity>
      </Row>
    );
  };

  return (
    <BgView>
      <AnimatedImageBackground
        source={IMAGES.BgView}
        resizeMode="cover"
        style={[
          {
            position: "absolute",
            right: 0,
            top: 0,
            left: 0,
            height: headerScrollHeight,

            width: "100%",
            overflow: "hidden",
            zIndex: 999,
            paddingHorizontal: SIZES.fifteen,
            // STYLE
            borderBottomColor: "#EFEFF4",
            borderBottomWidth: 0,
            backgroundColor: headerBG,
            paddingTop: props?.otherProfile ? SIZES.ten : SIZES.twenty,
          },
        ]}
      >
        {/* <Animated.View style={[styles.container, { opacity }]}></Animated.View> */}
        <Animated.View style={[, { opacity, paddingTop: SIZES.fifteen }]}>
          <View style={styles.innerView}>
            <Row
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CircularImage
                  uri={props.route.params.pic}
                  imageStyle={styles.imageStyle}
                />
                <View style={{ marginHorizontal: SIZES.ten }}>
                  <Text
                    numberOfLines={1}
                    style={[FONTS.boldFont22, { color: COLORS.white }]}
                  >
                    {"Alexa John"}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={[FONTS.mediumFont12, { color: COLORS.white }]}
                  >
                    {"@alexa_"}
                  </Text>
                </View>
              </Row>
              <CustomButton
                title={"Following"}
                titleStyle={[FONTS.mediumFont18, { color: COLORS.white }]}
                small
                btnStyle={{
                  height: 40,
                  borderRadius: SIZES.five * 1.35,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Row>

            <Row
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
                backgroundColor: `${COLORS.gray}85`,
                borderTopLeftRadius: SIZES.ten,
                borderTopRightRadius: SIZES.ten,
                marginTop: SIZES.twentyFive * 1.5,
              }}
            >
              <CustomButton
                title={"10 items"}
                titleStyle={[
                  FONTS.mediumFont18,
                  { color: COLORS.white, textAlign: "center" },
                ]}
                // transparent
                small
                btnStyle={{
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: width * 0.43,
                  borderRadius: 0,
                  borderTopLeftRadius: SIZES.ten,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <CustomButton
                title={"5 owners"}
                titleStyle={[
                  FONTS.mediumFont18,
                  { color: COLORS.white, textAlign: "center" },
                ]}
                small
                transparent
                btnStyle={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: width * 0.45,
                  borderRadius: 0,
                  borderTopRightRadius: SIZES.ten,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Row>
          </View>
          <Text
            style={[
              FONTS.boldFont20,
              { color: COLORS.black, marginVertical: SIZES.ten },
            ]}
          >
            About Me
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
            {`8K NEXT-GENERATION, HIGH FASHION HAPES

Unique, fully 3D and built to unite the ape 
multiverse. Designed and styled by Digimental.`}
          </Text>
        </Animated.View>
      </AnimatedImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginHorizontal: SIZES.fifteen,
          paddingBottom: height * 0.05,
        }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollOffsetY } } },
        ])}
        scrollEventThrottle={16}
      >
        <View style={[{ paddingTop: H_MAX_HEIGHT }]}>
          <FlatGrid
            maxItemsPerRow={2}
            // spacing={SIZES.fifteen}
            // ListHeaderComponent={() => (
            //   <Text
            //     style={[
            //       FONTS.boldFont20,
            //       { color: COLORS.black, marginVertical: SIZES.ten },
            //     ]}
            //   >
            //     Items
            //   </Text>
            // )}
            data={data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: height * 0.05 }}
            renderItem={({ item, index }) => {
              return (
                <MyTouchableOpacity
                  style={{
                    // flex: 1,
                    alignItems: "center",
                    backgroundColor: `rgba(0,0,0,0.25)`,
                    borderRadius: SIZES.fifteen,
                    paddingBottom: SIZES.twenty,
                    marginVertical: SIZES.fifteen,
                    // height: 150,
                    // width: width * 0.4,
                  }}
                  onPress={() => {
                    props.navigation.navigate(SCREENS.SingleNFT, {
                      otherProfile: props.otherProfile,
                      pic: item.imgURL,
                    });
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <ProgressiveImage
                      source={{
                        uri: item.imgURL,
                        priority: FastImage.priority.high,
                      }}
                      style={[
                        styles.NFTimage,
                        { backgroundColor: COLORS.white, width: width * 0.4 },
                      ]}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text
                      style={[
                        FONTS.boldFont18,
                        {
                          alignSelf: "center",
                          color: COLORS.white,
                          marginTop: SIZES.twenty,
                        },
                      ]}
                    >
                      Putrid Puddle
                    </Text>
                    <Text
                      style={[
                        FONTS.mediumFont12,
                        {
                          alignSelf: "center",
                          color: COLORS.white,
                          marginVertical: SIZES.five,
                        },
                      ]}
                    >
                      Price: ETH 0.1
                    </Text>
                  </View>
                </MyTouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>

      <RegisterLand />
    </BgView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: SIZES.fifty * 1.35,
    height: SIZES.fifty * 1.35,
    marginBottom: SIZES.ten,
    alignSelf: "center",
  },
  container: {
    paddingTop: SIZES.fifteen,
    paddingBottom: SIZES.fifteen,
  },
  socialContainer: {
    paddingTop: SIZES.twenty,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    backgroundColor: COLORS.black,
    color: COLORS.white,
    justifyContent: "center",
    width: SIZES.twenty * 1.5,
    height: SIZES.twenty * 1.5,
    borderRadius: width,
    alignItems: "center",
  },
  NFTimage: {
    borderRadius: SIZES.twenty,
    // height: SIZES.fifty * 1.35,
    // width: "98%",
    height: Platform.OS === "android" ? height * 0.15 : height * 0.13,
  },

  innerView: {
    backgroundColor: `${COLORS.gray}65`,
    paddingHorizontal: SIZES.fifteen,
    paddingTop: SIZES.twentyFive,
    borderRadius: SIZES.ten,
  },
});

const data = [
  {
    id: "id124",
    imgURL:
      "https://images.unsplash.com/photo-1551214359-b81f66a605b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Precedant Furniture",
  },
  {
    id: "id125",
    imgURL:
      "https://c1.wallpaperflare.com/preview/103/907/649/background-graffiti-grunge-street-art.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id126",
    imgURL:
      "https://www.teahub.io/photos/full/2-28005_graffiti-wall-art-bright-street-wall-wallpaper-street.jpg",
    text: "Briget Accent Table",
  },
  {
    id: "id127",
    imgURL:
      "https://c4.wallpaperflare.com/wallpaper/829/250/460/graffiti-wall-bricks-waves-wallpaper-preview.jpg",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id128",
    imgURL:
      "https://www.teahub.io/photos/full/50-504751_bore-2018-best-of-3d-wall-art-wallpaper.jpg",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id129",
    imgURL:
      "https://www.pngfind.com/pngs/m/646-6460029_real-people-designing-your-site-large-colourful-framed.png",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id130",
    imgURL:
      "https://www.dhresource.com/0x0/f2/albu/g6/M01/B1/C3/rBVaSFrEdMGAEmKCAAME6ocP5Fw397.jpg/prints-art-modern-animal-abstract-lion-colorful.jpg",
    text: "Hailey Sofa",
  },
  {
    id: "id131",
    imgURL: "https://wallpaper.dog/large/10905024.jpg",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id132",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id133",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id134",
    imgURL:
      "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    text: "Chair and Table",
  },
  {
    id: "id223",
    imgURL:
      "https://www.pngfind.com/pngs/m/289-2893279_wolf-metal-wall-art-decor-portraits-wolf-face.png",
    text: "Pioneer LHS Chaise Lounger in Grey Colour",
  },
  {
    id: "id224",
    imgURL:
      "https://c0.wallpaperflare.com/preview/717/26/570/wall-art-street-urban.jpg",
    text: "Precedant Furniture",
  },
  {
    id: "id225",
    imgURL: "https://cdn.wallpapersafari.com/4/58/fmOu12.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id226",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-425104_street-art-wallpaper.jpg",
    text: "Briget Accent Table",
  },
  {
    id: "id227",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-423617_street-urban-street-art-graffiti.jpg",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id228",
    imgURL: "https://wallpaperaccess.com/full/716590.jpg",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id229",
    imgURL:
      "https://i.pinimg.com/originals/11/e0/37/11e0378820b9eb505a06891be650e52e.jpg",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id230",
    imgURL:
      "https://image.winudf.com/v2/image1/Y29tLmNvb2wud2FsbHBhcGVycy5hbmQucGhvbmVzLmJhY2tncm91bmRzLmdyYWZmaXRpX3NjcmVlbl8xNV8xNTk3MTcyMDY5XzAzMA/screen-15.jpg?fakeurl=1&type=.jpg",
    text: "Hailey Sofa",
  },
  {
    id: "id231",
    imgURL: "https://wallpaperaccess.com/full/716618.jpg",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id232",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcDz2R8Ti5PNSHkgqTYRwPXjyqSsYz54pow&usqp=CAU",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id233",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U3Nci15TSwZqwqVgERwJ2QgkG3SZeWzGoQ&usqp=CAU",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id234",
    imgURL:
      "https://c0.wallpaperflare.com/preview/97/310/329/graffiti-art-paint-surface.jpg",
    text: "Chair and Table",
  },
];

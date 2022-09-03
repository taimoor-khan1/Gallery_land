import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import {
  BgView,
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { COLORS, FONTS, height, SCREENS, SIZES } from "../../constants";
import RegisterLand from "../../components/modals/RegisterLand";
import ProgressiveImage from "rn-progressive-image";
import FastImage from "react-native-fast-image";

export default function Explore(props) {
  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader title={"Explore"} />
      <MyTouchableOpacity style={styles.SeachBar}>
        <Text style={FONTS.mediumFont16}>Search...</Text>
        <Icon name="search1" type={IconType.AntDesign} color={COLORS.gray} />
      </MyTouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.fifteen,
          paddingBottom: height * 0.08,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <MyTouchableOpacity
              onPress={() => {
                props.navigation.navigate(SCREENS.OtherProfile, {
                  name: item.name,
                  pic: item.imgURL,
                });
                // props.navigation.navigate(SCREENS.TopArtist);
              }}
            >
              <Text style={[FONTS.boldFont18, { fontWeight: "700" }]}>
                {item.name}
              </Text>
              <ProgressiveImage
                source={{ uri: item.imgURL, priority: FastImage.priority.high }}
                style={styles.imageStyle}
              />
            </MyTouchableOpacity>
          );
        }}
      />

      <RegisterLand />
    </BgView>
  );
}

const styles = StyleSheet.create({
  SeachBar: {
    flexDirection: "row",
    marginHorizontal: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: SIZES.fifteen,
  },
  imageStyle: {
    width: "100%",
    height: SIZES.fifty * 3,
    borderRadius: SIZES.twentyFive,
    marginVertical: SIZES.twenty,
    backgroundColor: COLORS.secondary,
  },
});

const data = [
  {
    id: "id124",
    imgURL:
      "https://images.unsplash.com/photo-1551214359-b81f66a605b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Precedant Furniture",
  },
  {
    id: "id125",
    imgURL:
      "https://c1.wallpaperflare.com/preview/103/907/649/background-graffiti-grunge-street-art.jpg",
    name: "Leverette Bed",
  },
  {
    id: "id126",
    imgURL:
      "https://www.teahub.io/photos/full/2-28005_graffiti-wall-art-bright-street-wall-wallpaper-street.jpg",
    name: "Briget Table",
  },
  {
    id: "id127",
    imgURL:
      "https://c4.wallpaperflare.com/wallpaper/829/250/460/graffiti-wall-bricks-waves-wallpaper-preview.jpg",
    name: "Rivet Console",
  },
  {
    id: "id128",
    imgURL:
      "https://www.teahub.io/photos/full/50-504751_bore-2018-best-of-3d-wall-art-wallpaper.jpg",
    name: "Drew Chair",
  },
  {
    id: "id129",
    imgURL:
      "https://www.pngfind.com/pngs/m/646-6460029_real-people-designing-your-site-large-colourful-framed.png",
    name: "Ecobirdy Charlie",
  },
  {
    id: "id130",
    imgURL:
      "https://www.dhresource.com/0x0/f2/albu/g6/M01/B1/C3/rBVaSFrEdMGAEmKCAAME6ocP5Fw397.jpg/prints-art-modern-animal-abstract-lion-colorful.jpg",
    name: "Hailey Sofa",
  },
  {
    id: "id131",
    imgURL: "https://wallpaper.dog/large/10905024.jpg",
    name: "Farmhouse Table",
  },
  {
    id: "id132",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    name: "Evelyn Coffee Table",
  },
  {
    id: "id133",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*",
    name: "Slope Nomad Leather Sofa",
  },
  {
    id: "id134",
    imgURL:
      "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    name: "Chair and Table",
  },
  {
    id: "id223",
    imgURL:
      "https://www.pngfind.com/pngs/m/289-2893279_wolf-metal-wall-art-decor-portraits-wolf-face.png",
    name: "Pioneer LHS Chaise Lounger in Grey Colour",
  },
  {
    id: "id224",
    imgURL:
      "https://c0.wallpaperflare.com/preview/717/26/570/wall-art-street-urban.jpg",
    name: "Precedant Furniture",
  },
  {
    id: "id225",
    imgURL: "https://cdn.wallpapersafari.com/4/58/fmOu12.jpg",
    name: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id226",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-425104_street-art-wallpaper.jpg",
    name: "Briget Accent Table",
  },
  {
    id: "id227",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-423617_street-urban-street-art-graffiti.jpg",
    name: "Rivet Emerly Media Console",
  },
  {
    id: "id228",
    imgURL: "https://wallpaperaccess.com/full/716590.jpg",
    name: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id229",
    imgURL:
      "https://i.pinimg.com/originals/11/e0/37/11e0378820b9eb505a06891be650e52e.jpg",
    name: "Ecobirdy Charlie Chair",
  },
  {
    id: "id230",
    imgURL:
      "https://image.winudf.com/v2/image1/Y29tLmNvb2wud2FsbHBhcGVycy5hbmQucGhvbmVzLmJhY2tncm91bmRzLmdyYWZmaXRpX3NjcmVlbl8xNV8xNTk3MTcyMDY5XzAzMA/screen-15.jpg?fakeurl=1&type=.jpg",
    name: "Hailey Sofa",
  },
  {
    id: "id231",
    imgURL: "https://wallpaperaccess.com/full/716618.jpg",
    name: "Farmhouse Dining Table",
  },
  {
    id: "id232",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcDz2R8Ti5PNSHkgqTYRwPXjyqSsYz54pow&usqp=CAU",
    name: "Evelyn Coffee Table",
  },
  {
    id: "id233",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U3Nci15TSwZqwqVgERwJ2QgkG3SZeWzGoQ&usqp=CAU",
    name: "Slope Nomad Leather Sofa",
  },
  {
    id: "id234",
    imgURL:
      "https://c0.wallpaperflare.com/preview/97/310/329/graffiti-art-paint-surface.jpg",
    name: "Chair and Table",
  },
];

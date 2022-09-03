import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  BgView,
  CustomButton,
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
} from "../../components";
import { COLORS, height, SCREENS, SIZES, width } from "../../constants";

export default function Gallery(props) {
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [selectedArt, setSelectedArt] = useState();

  return (
    <BgView>
      <CustomHeader
        hasBackArrow
        title="Art Gallery"
        containerStyle={{ paddingVertical: SIZES.twenty }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: paddingBottom }}
        renderItem={({ item, index }) => {
          return (
            <MyTouchableOpacity
              style={styles.NFTimage}
              onPress={() => {
                if (selectedArt === index) {
                  setSelectedArt();
                  return;
                }
                setSelectedArt(index);
              }}
            >
              <Image
                source={{ uri: item.imgURL }}
                style={[
                  {
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                    borderRadius: SIZES.twenty,
                  },
                ]}
                blurRadius={selectedArt === index ? 5 : 0}
              />
              {selectedArt === index && (
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    position: "absolute",
                    padding: SIZES.twenty,
                    borderRadius: width,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    type={IconType.Feather}
                    name={"check"}
                    color={COLORS.white}
                  />
                </View>
              )}
            </MyTouchableOpacity>
          );
        }}
      />
      <View
        style={{
          padding: SIZES.twenty,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          console.log(height);
          setPaddingBottom(height);
        }}
      >
        <CustomButton
          {...{ title: selectedArt ? "Continue" : "Upload NFT's" }}
        />
      </View>
    </BgView>
  );
}

const styles = StyleSheet.create({
  NFTimage: {
    flex: 1,
    width: "95%",
    marginVertical: SIZES.ten,
    marginHorizontal: SIZES.five,
    borderRadius: SIZES.twenty,
    height: SIZES.fifty * 3,
    alignItems: "center",
    justifyContent: "center",
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

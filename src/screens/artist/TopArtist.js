import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BgView,
  CircularImage,
  CustomButton,
  CustomHeader,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { COLORS, FONTS, SCREENS, SIZES } from "../../constants";

export default function TopArtist(props) {
  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader hasBackArrow title={"Top Artist"} />

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <MyTouchableOpacity
            style={{
              paddingHorizontal: SIZES.fifteen,
              marginVertical: SIZES.ten,
            }}
            onPress={() => {
              props.navigation.navigate(SCREENS.OtherProfile, {
                name: item.name,
                pic: item.imgURL,
              });
            }}
          >
            <Row
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <CircularImage uri={item.imgURL} />
                <View
                  style={{
                    justifyContent: "center",
                    marginHorizontal: SIZES.ten,
                  }}
                >
                  <Text
                    style={[
                      FONTS.boldFont16,
                      {
                        colo: COLORS.black,
                        textTransform: "capitalize",
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      FONTS.mediumFont12,
                      {
                        colo: COLORS.black,
                        textTransform: "capitalize",
                        marginTop: SIZES.five,
                      },
                    ]}
                  >
                    {"$623.156"}
                  </Text>
                </View>
              </Row>

              <CustomButton
                title={index === 0 ? "un-follow" : "Follow"}
                btnStyle={{
                  height: 35,
                  paddingHorizontal: 15,
                  borderColor: index === 0 ? COLORS.black : COLORS.transparent,
                  borderWidth: index === 0 ? 1 : 0,
                }}
                transparent={index === 0}
              />
            </Row>
          </MyTouchableOpacity>
        )}
      />
    </BgView>
  );
}

const styles = StyleSheet.create({});

const data = [
  {
    id: "id124",
    name: "John Doe",
    imgURL:
      "https://images.unsplash.com/photo-1551214359-b81f66a605b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Precedant Furniture",
  },
  {
    id: "id125",
    name: "John Bravo",
    imgURL:
      "https://c1.wallpaperflare.com/preview/103/907/649/background-graffiti-grunge-street-art.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id126",
    name: "John Cena",
    imgURL:
      "https://www.teahub.io/photos/full/2-28005_graffiti-wall-art-bright-street-wall-wallpaper-street.jpg",
    text: "Briget Accent Table",
  },
  {
    id: "id127",
    name: "John",
    imgURL:
      "https://c4.wallpaperflare.com/wallpaper/829/250/460/graffiti-wall-bricks-waves-wallpaper-preview.jpg",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id128",
    name: "John Elia",
    imgURL:
      "https://www.teahub.io/photos/full/50-504751_bore-2018-best-of-3d-wall-art-wallpaper.jpg",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id129",
    name: "Johnny Depp",
    imgURL:
      "https://www.pngfind.com/pngs/m/646-6460029_real-people-designing-your-site-large-colourful-framed.png",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id130",
    name: "Mark Davis",
    imgURL:
      "https://www.dhresource.com/0x0/f2/albu/g6/M01/B1/C3/rBVaSFrEdMGAEmKCAAME6ocP5Fw397.jpg/prints-art-modern-animal-abstract-lion-colorful.jpg",
    text: "Hailey Sofa",
  },
  {
    id: "id131",
    name: "Stephen Salvatore",
    imgURL: "https://wallpaper.dog/large/10905024.jpg",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id132",
    name: "Oliver Queen",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id133",
    name: "Barry Allen",
    imgURL:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id134",
    name: "Leonardo",
    imgURL:
      "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    text: "Chair and Table",
  },
  {
    id: "id223",
    name: "Peter",
    imgURL:
      "https://www.pngfind.com/pngs/m/289-2893279_wolf-metal-wall-art-decor-portraits-wolf-face.png",
    text: "Pioneer LHS Chaise Lounger in Grey Colour",
  },
  {
    id: "id224",
    name: "Alex",
    imgURL:
      "https://c0.wallpaperflare.com/preview/717/26/570/wall-art-street-urban.jpg",
    text: "Precedant Furniture",
  },
  {
    id: "id225",
    name: "Alexis",
    imgURL: "https://cdn.wallpapersafari.com/4/58/fmOu12.jpg",
    text: "Leverette Upholstered Platform Bed",
  },
  {
    id: "id226",
    name: "Osborn",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-425104_street-art-wallpaper.jpg",
    text: "Briget Accent Table",
  },
  {
    id: "id227",
    name: "Thor Odinson",
    imgURL:
      "https://www.itl.cat/pngfile/big/42-423617_street-urban-street-art-graffiti.jpg",
    text: "Rivet Emerly Media Console",
  },
  {
    id: "id228",
    name: "Steve Rogers",
    imgURL: "https://wallpaperaccess.com/full/716590.jpg",
    text: "Drew Barrymore Flower Home Accent Chair",
  },
  {
    id: "id229",
    name: "Hank Pim",
    imgURL:
      "https://i.pinimg.com/originals/11/e0/37/11e0378820b9eb505a06891be650e52e.jpg",
    text: "Ecobirdy Charlie Chair",
  },
  {
    id: "id230",
    name: "Bucky",
    imgURL:
      "https://image.winudf.com/v2/image1/Y29tLmNvb2wud2FsbHBhcGVycy5hbmQucGhvbmVzLmJhY2tncm91bmRzLmdyYWZmaXRpX3NjcmVlbl8xNV8xNTk3MTcyMDY5XzAzMA/screen-15.jpg?fakeurl=1&type=.jpg",
    text: "Hailey Sofa",
  },
  {
    id: "id231",
    name: "Loki",
    imgURL: "https://wallpaperaccess.com/full/716618.jpg",
    text: "Farmhouse Dining Table",
  },
  {
    id: "id232",
    name: "Thanos",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcDz2R8Ti5PNSHkgqTYRwPXjyqSsYz54pow&usqp=CAU",
    text: "Evelyn Coffee Table",
  },
  {
    id: "id233",
    name: "Bruce Wayne",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U3Nci15TSwZqwqVgERwJ2QgkG3SZeWzGoQ&usqp=CAU",
    text: "Slope Nomad Leather Sofa",
  },
  {
    id: "id234",
    name: "Diana Prince",
    imgURL:
      "https://c0.wallpaperflare.com/preview/97/310/329/graffiti-art-paint-surface.jpg",
    text: "Chair and Table",
  },
];

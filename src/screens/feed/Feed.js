import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  BgView,
  CircularImage,
  Icon,
  IconType,
  MyTouchableOpacity,
  NFTCards,
  Row,
} from "../../components";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from "../../constants/theme";
import RegisterLand from "../../components/modals/RegisterLand";

export default function Feed(props) {
  const { navigation } = props;
  // =============Header==========
  const Header = () => {
    return (
      <Row style={styles.header}>
        <Image
          source={{
            uri: Image.resolveAssetSource(IMAGES.Logo).uri,
            cache: "force-cache",
          }}
          resizeMode={"contain"}
          style={{ width: SIZES.fifty, height: SIZES.fifty }}
        />
        <Text style={[FONTS.boldFont20, { color: COLORS.black }]}>Feed</Text>
        <Row style={{ alignItems: "center" }}>
          <MyTouchableOpacity
            style={{ padding: SIZES.five, marginHorizontal: SIZES.five }}
            onPress={() => navigation.navigate(SCREENS.Seacrh)}
          >
            <Icon
              name="search"
              type={IconType.Feather}
              size={SIZES.twentyFive}
              color={COLORS.brownGray}
            />
          </MyTouchableOpacity>

          <MyTouchableOpacity
            style={{ padding: SIZES.five }}
            onPress={() => navigation.navigate(SCREENS.CameraPage)}
          >
            <Icon
              name="camera"
              type={IconType.Feather}
              size={SIZES.twentyFive}
              color={COLORS.brownGray}
            />
          </MyTouchableOpacity>
        </Row>
      </Row>
    );
  };

  // ===============title========
  const Titles = (props) => {
    return (
      <Row style={styles.rowStyle}>
        <Text style={[FONTS.boldFont16, { color: COLORS.black }]}>
          {props.title}
        </Text>
        <MyTouchableOpacity
          style={{ padding: SIZES.five }}
          onPress={() => {
            props?.onPress?.();
          }}
        >
          <Text
            style={[FONTS.mediumFont12, { color: COLORS.blackWithopacity }]}
          >
            see all
          </Text>
        </MyTouchableOpacity>
      </Row>
    );
  };

  const DetailCard = ({ item, index }) => {
    return (
      <MyTouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: index === 0 ? SIZES.fifteen : 0,
        }}
      >
        <CircularImage image={IMAGES.User} />
        <View
          style={{
            marginHorizontal: SIZES.ten,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
            Justin John
          </Text>
          <Text
            style={[FONTS.mediumFont10, { color: COLORS.blackWithopacity }]}
          >
            $521,452,00
          </Text>
        </View>
      </MyTouchableOpacity>
    );
  };

  return (
    <BgView style={{ paddingBottom: SIZES.twentyFive * 2 }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: height * 0.015 }}
      >
        <Titles
          title={"Top Artists"}
          onPress={() => {
            navigation.navigate(SCREENS.TopArtist);
          }}
        />

        <ScrollView
          horizontal
          style={{ flex: 1 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: width * 0.015 }}
        >
          {data.map((item, index) => (
            <DetailCard key={index} index={index} item={item} />
          ))}
        </ScrollView>

        <Titles title={"Explore NFT's"} />

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          decelerationRate={0.5}
          showsVerticalScrollIndicator={false}
          data={data}
          snapToAlignment={"center"}
          initialNumToRender={2}
          snapToInterval={height * 0.8}
          keyExtractor={(item) => item.id}
          renderItem={(item) => {
            return <NFTCards image={item.item.image} />;
          }}
        />
      </ScrollView>

      <RegisterLand />
    </BgView>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.fifteen,
    paddingTop: SIZES.twentyFive * 1.5,
    paddingBottom: SIZES.twenty,
  },
  rowStyle: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
  },
});

const data = [
  {
    id: "1",
    image: IMAGES.Nft1,
  },
  {
    id: "2",
    image: IMAGES.Nft2,
  },
  {
    id: "3",
    image: IMAGES.Nft3,
  },
  {
    id: "4",
    image: IMAGES.Nft4,
  },
  {
    id: "5",
    image: IMAGES.Nft5,
  },
  {
    id: "6",
    image: IMAGES.Nft6,
  },
  {
    id: "7",
    image: IMAGES.Nft7,
  },
  {
    id: "8",
    image: IMAGES.Nft8,
  },
];

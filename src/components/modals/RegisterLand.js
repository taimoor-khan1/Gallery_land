import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomModal from "../CustomModal";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterLandSheet } from "../../redux/slices/utilities";
import { useNavigation } from "@react-navigation/native";
import MyTouchableOpacity from "../MyTouchableOpacity";
import Icon, { IconType } from "../Icon";
import CustomButton from "../CustomButton";
import Row from "../Row";

export default function RegisterLand(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isRegisterLandSheetVisible = useSelector(
    (state) => state.utilities.isRegisterLandSheetVisible
  );
  return (
    <CustomModal
      onBackdropPress={() => {
        dispatch(closeRegisterLandSheet());
      }}
      backdropOpacity={Platform.OS === "android" ? 0.3 : undefined}
      isVisible={isRegisterLandSheetVisible}
      animationIn={"slideInUp"}
      animationInTiming={750}
      animationOut={"slideOutDown"}
      animationOutTiming={750}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View
        style={{
          height: height * 0.48,
          backgroundColor: "white",
          borderTopLeftRadius: SIZES.twenty,
          borderTopRightRadius: SIZES.twenty,
          padding: SIZES.fifteen,
          paddingBottom: SIZES.twentyFive,
        }}
      >
        <MyTouchableOpacity
          onPress={() => {
            dispatch(closeRegisterLandSheet());
          }}
          style={{
            position: "absolute",
            top: SIZES.ten,
            right: SIZES.ten,
            padding: SIZES.five,
          }}
        >
          <Icon
            name={"close-sharp"}
            type={IconType.Ionicons}
            size={SIZES.twentyFive * 1.25}
            color={COLORS.black}
          />
        </MyTouchableOpacity>
        <View
          style={{
            height: 5,
            borderRadius: SIZES.fifty,
            width: "15%",
            backgroundColor: COLORS.brownGray + 50,
            alignSelf: "center",
            margin: SIZES.ten,
          }}
        />

        <CustomButton
          title={"Register Virtual Land"}
          btnStyle={{ height: 55, margin: SIZES.fifteen }}
          onPress={() => {
            dispatch(closeRegisterLandSheet());
            navigation.navigate(SCREENS.ExploreLand);
          }}
        />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: SIZES.five }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <View style={{ flex: 1, marginRight: SIZES.fifteen }}>
              <Text style={[FONTS.boldFont18, { color: COLORS.black }]}>
                Live Events
              </Text>
              <Text
                numberOfLines={2}
                style={[
                  FONTS.mediumFont12,
                  {
                    color: COLORS.gray,
                    width: width * 0.45,
                    marginVertical: SIZES.ten,
                  },
                ]}
              >
                Enter the GalleryLand room & meet new people
              </Text>

              <Image
                source={{
                  uri: Image.resolveAssetSource(IMAGES.Nft1).uri,
                  cache: "force-cache",
                }}
                style={{
                  width: "100%",
                  height: "50%",
                  borderRadius: SIZES.twenty,
                }}
                resizeMode={"contain"}
              />
            </View>

            <View style={{ flex: 1, marginHorizontal: SIZES.fifteen }}>
              <Text style={[FONTS.boldFont18, { color: COLORS.black }]}>
                Marketplace
              </Text>
              <Text
                numberOfLines={2}
                style={[
                  FONTS.mediumFont12,
                  {
                    color: COLORS.gray,
                    width: width * 0.45,
                    marginVertical: SIZES.ten,
                  },
                ]}
              >
                Here are easy steps to use GalleryLand Marketplace
              </Text>

              <Image
                source={{
                  uri: Image.resolveAssetSource(IMAGES.Nft1).uri,
                  cache: "force-cache",
                }}
                style={{
                  width: "100%",
                  height: "50%",
                  borderRadius: SIZES.twenty,
                }}
                resizeMode={"contain"}
              />
            </View>
          </Row>
        </ScrollView>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({});

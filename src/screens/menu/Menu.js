import {
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
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
import { COLORS, FONTS, IMAGES, SCREENS, SIZES } from "../../constants";
import CustomModal from "../../components/CustomModal";
import RegisterLand from "../../components/modals/RegisterLand";

export default function Menu(props) {
  const { navigation } = props;
  const [selectOption, setSelectOption] = useState("");
  const [logoutModal, setLogoutModal] = useState(false);

  const RenderMenu = ({ item }) => {
    return (
      <MyTouchableOpacity
        onPress={() => {
          if (item.screen === null) {
            setLogoutModal(true);
          } else {
            navigation.navigate(item.screen);
          }
        }}
        onPressIn={() => setSelectOption(item.title)}
        onPressOut={() => setSelectOption("")}
      >
        <Row
          style={{
            alignItems: "center",
            marginHorizontal: SIZES.twentyFive,
            justifyContent: "flex-start",
            paddingVertical: SIZES.fifteen,
            borderBottomWidth: 0.5,
            borderColor: COLORS.brownGray,
          }}
        >
          <Icon
            name={item.iconName}
            type={item.IconTye}
            color={
              selectOption === item.title ? COLORS.primary : COLORS.brownGray
            }
          />
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color:
                  selectOption === item.title
                    ? COLORS.primary
                    : COLORS.brownGray,
                marginHorizontal: SIZES.twenty,
              },
            ]}
          >
            {item.title}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader title={"Menu"} />
      <View style={styles.container}>
        <Row style={{ paddingVertical: SIZES.ten, alignItems: "center" }}>
          <CircularImage image={IMAGES.User} imageStyle={styles.imageStyle} />
          <View>
            <Text style={[FONTS.boldFont18]}>Kohaku Tora</Text>
            <Text style={[FONTS.boldFont16, { color: COLORS.primary }]}>
              @Kohaku{" "}
            </Text>
          </View>
        </Row>
        <CustomButton
          onPress={() => navigation.navigate(SCREENS.Profile)}
          title={"View Profile"}
          titleStyle={[FONTS.mediumFont16, { color: COLORS.white }]}
          btnStyle={{
            height: 50,
            marginHorizontal: SIZES.twenty,
            marginTop: SIZES.ten,
          }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          bounces={false}
          overScrollMode={"never"}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={RenderMenu}
          data={data}
        />
      </View>
      <CustomModal
        isVisible={logoutModal}
        transparent={true}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
      >
        <View
          style={
            {
              // flex: 1,
              // justifyContent: "center",
              // paddingHorizontal: SIZES.twentyFive,
              // backgroundColor: `${COLORS.black}90`,
            }
          }
        >
          <ImageBackground
            resizeMode="contain"
            source={IMAGES.BgView}
            style={[styles.modelContainer]}
          >
            <Text
              style={[
                FONTS.boldFont22,
                {
                  color: COLORS.primary,
                  textAlign: "center",
                  marginVertical: SIZES.fifteen,
                },
              ]}
            >
              Logout?
            </Text>
            <Text
              style={[
                FONTS.mediumFont14,
                { color: COLORS.gray, textAlign: "center" },
              ]}
            >
              Are you sure you want to logout?
            </Text>
            <Row
              style={{
                alignSelf: "center",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.twenty,
              }}
            >
              <MyTouchableOpacity
                onPress={() => {
                  setLogoutModal(false);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  { backgroundColor: COLORS.white },
                ]}
              >
                <Text style={[FONTS.boldFont16, { color: COLORS.primary }]}>
                  No
                </Text>
              </MyTouchableOpacity>

              <MyTouchableOpacity
                onPress={() => {
                  setLogoutModal(false);
                  navigation.navigate(SCREENS.Login);
                }}
                style={[
                  styles.logoutbtn,
                  styles.shodow,
                  { backgroundColor: COLORS.primary },
                ]}
              >
                <Text style={[FONTS.boldFont16, { color: COLORS.white }]}>
                  Yes
                </Text>
              </MyTouchableOpacity>
            </Row>
          </ImageBackground>
        </View>
      </CustomModal>

      <RegisterLand />
    </BgView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.twentyFive,
    borderWidth: 1,
    borderColor: COLORS.brownGray,
    padding: SIZES.fifteen,
    borderRadius: SIZES.twenty,
    marginBottom: SIZES.twentyFive * 1.2,
    marginTop: SIZES.twenty,
  },
  imageStyle: {
    width: SIZES.fifty * 1.3,
    height: SIZES.fifty * 1.3,
    marginRight: SIZES.ten,
  },
  modelContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.fifteen,
    paddingHorizontal: SIZES.twenty,
    borderRadius: SIZES.ten,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  logoutbtn: {
    paddingHorizontal: SIZES.twentyFive,
    // paddingVertical: SIZES.ten,
    height: 45,
    marginHorizontal: SIZES.fifteen,
    borderRadius: SIZES.five,
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.gray + 75,
    borderWidth: 1,
  },
});

const data = [
  {
    id: "1",
    title: "Notification Settings",
    iconName: "notifications-outline",
    IconTye: IconType.Ionicons,
    screen: SCREENS.NotificationSettings,
  },
  // {
  //   id: "2",
  //   title: "Near By",
  //   iconName: "location-outline",
  //   IconTye: IconType.Ionicons,
  //   screen: SCREENS.NearByMapView,
  // },
  {
    id: "3",
    title: "Settings",
    iconName: "settings-outline",
    IconTye: IconType.Ionicons,
    screen: SCREENS.Setting,
  },
  {
    id: "4",
    title: "My Card",
    iconName: "credit-card",
    IconTye: IconType.Feather,
    screen: SCREENS.MyCard,
  },
  {
    id: "5",
    title: "Term and Condition",
    iconName: "file1",
    IconTye: IconType.AntDesign,
    screen: SCREENS.TermsAndConditions,
  },
  {
    id: "6",
    title: "Logout",
    iconName: "logout",
    IconTye: IconType.AntDesign,
    screen: null,
  },
];

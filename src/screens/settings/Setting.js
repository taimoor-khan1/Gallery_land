import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
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

export default function Setting(props) {
  const [selectOption, setSelectOption] = useState("");

  const { navigation } = props;
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
            marginHorizontal: SIZES.twentyFive,
            justifyContent: "space-between",
            paddingVertical: SIZES.fifteen,
            borderBottomWidth: 0.5,
            borderColor: COLORS.brownGray,
          }}
        >
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color:
                  selectOption === item.title
                    ? COLORS.primary
                    : COLORS.brownGray,
              },
            ]}
          >
            {item.title}
          </Text>
          <Icon
            name={item.iconName}
            type={item.IconTye}
            color={
              selectOption === item.title ? COLORS.primary : COLORS.brownGray
            }
          />
        </Row>
      </MyTouchableOpacity>
    );
  };
  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader hasBackArrow title={"Settings"} />
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
          btnStyle={{ height: 50, marginHorizontal: SIZES.twenty }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          keyExtractor={(item) => item.id}
          renderItem={RenderMenu}
          data={data}
        />
      </View>
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
});

const data = [
  {
    id: "1",
    title: "Privacy and Policy",
    iconName: "security",
    IconTye: IconType.MaterialCommunityIcons,
    screen: SCREENS.PrivacyAndPolicy,
  },
  {
    id: "2",
    title: "About App",
    iconName: "infocirlceo",
    IconTye: IconType.AntDesign,
    screen: SCREENS.AboutApp,
  },
  {
    id: "3",
    title: "Support",
    iconName: "questioncircleo",
    IconTye: IconType.AntDesign,
    screen: SCREENS.HelpAndSupport,
  },
];

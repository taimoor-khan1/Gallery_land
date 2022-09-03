import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../constants";
import Feed from "../../screens/feed/Feed";
import Menu from "../../screens/menu/Menu";
import Notification from "../../screens/notification/Notification";
import Profile from "../../screens/Profile/Profile";
import Explore from "../../screens/explore/Explore";
import CustomModal from "../../components/CustomModal";
import {
  CustomButton,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { useDispatch } from "react-redux";
import { openRegisterLandSheet } from "../../redux/slices/utilities";

const MenuScreen = () => {
  return <View />;
};

const tabs = [
  {
    id: 0,
    name: "bottomSheet",
    Component: Feed,
    icon: IMAGES.FeedTab,
  },
  {
    id: 1,
    name: "FeedScreen",
    Component: Feed,
    icon: IMAGES.NotificationTab,
  },
  {
    id: 2,
    name: "ProfileScreen",
    Component: Profile,
    icon: IMAGES.ProfileTab,
  },
  {
    id: 3,
    name: "ExploreScreen",
    Component: Explore,
    icon: IMAGES.Exploretab,
  },
  {
    id: 4,
    name: "MenuScreen",
    Component: Menu,
    icon: IMAGES.MenuTab,
  },
];

const Tab = createBottomTabNavigator();
const areEqual = (prevProps, nextProps) => true;

const BottomTabNavigation = React.memo((props) => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName={"FeedScreen"}
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.halfWhite,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {tabs.map(({ name, Component, icon }, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={(props) =>
            name === "bottomSheet" ? null : name === "ProfileScreen" ? (
              <Component otherProfile={false} {...props} />
            ) : (
              <Component {...props} />
            )
          }
          options={({}) => ({
            tabBarIcon: ({ focused, color }) => (
              <View>
                <Image
                  source={icon}
                  resizeMode="contain"
                  style={{
                    width: SIZES.twentyFive,
                    height: SIZES.twentyFive,
                    tintColor: focused ? COLORS.black : COLORS.brownGray,
                  }}
                />
              </View>
            ),
          })}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              if (name === "bottomSheet") {
                e.preventDefault();
                dispatch(openRegisterLandSheet());
              }
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
}, areEqual);

const styles = StyleSheet.create({
  tabBarStyle: [
    STYLES.shadow,
    {
      borderTopWidth: 0,
      position: "absolute",
      height: SIZES.fifty * 1.1,
      backgroundColor: COLORS.white,
      paddingTop: Platform.OS === "android" ? 0 : SIZES.fifteen,

      // borderTopLeftRadius: SIZES.twenty,
      // borderTopRightRadius: SIZES.twenty,
    },
  ],
});

export default BottomTabNavigation;

import { Dimensions, Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const { width, height } = Dimensions.get("window");

/* *************** Colors ********** */

export const COLORS = {
  primary: "#6D00A5",
  orange: "#F89A2B",

  secondary: "#00FFF8",
  blackWithopacity: "#00000085",

  black: "#000000",
  Red: "#FF0000",
  crimson: "#860012",
  white: "#ffffff",
  blue: "#0037c1",
  lightGray: "#D3D3D3",
  gray: "#767577",
  star: "#FFD700",
  golden: "#FFD700",
  purple: "#4e1789",
  lightPurple: "#871af6",
  brownGray: "#5d536a",
  trueGreen: "#1eaf08",
  halfWhite: "#eeeeee",
  charcoalGrey: "#4a4b4d",
  veryLightpink: "#ffeef2",
  transparent: "transparent",
  textGrey: "#8a7e9a",
  turqoiseGreen: "#00FF77",
  veryLightPink: "#e6e6e6",
};

const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: "Montserrat-Bold",
  Light: "Montserrat-Light",
  Medium: "Montserrat-Medium",
  Regular: "Montserrat-Regular",

  Ionicons: "Ionicons",
  AntDesign: "AntDesign",
  EvilIcons: "EvilIcons",
  Entypo: "Entypo",
  FontAwesome: "FontAwesome",
  Feather: "Feather",
  MaterialIcons: "MaterialIcons",
  MaterialCommunityIcons: "MaterialCommunityIcons",
  Octicons: "Octicons",
  SimpleLineIcons: "SimpleLineIcons",
  Fontisto: "Fontisto",
};

/* * Images * */
export const IMAGES = {
  Logo: require("../assets/Images/Logo.png"),
  User: require("../assets/Images/User.png"),
  IntroLogo: require("../assets/Images/IntroLogo.png"),
  SignUp_Bg: require("../assets/Images/SignUp_Bg.png"),
  Auth_Bg: require("../assets/Images/Auth_Bg.png"),
  BgView: require("../assets/Images/BGView.png"),
  Splash: require("../assets/Images/SplashBackGround.png"),
  Exploretab: require("../assets/Images/Exploretab.png"),
  MenuTab: require("../assets/Images/MenuTab.png"),
  NotificationTab: require("../assets/Images/NotificationTab.png"),
  ProfileTab: require("../assets/Images/ProfileTab.png"),
  noWifi: require("../assets/Images/noWifi.png"),
  FeedTab: require("../assets/Images/FeedTab.png"),
  Nft1: require("../assets/Images/Nft1.png"),
  Nft2: require("../assets/Images/Nft2.png"),
  Nft3: require("../assets/Images/Nft3.png"),
  Nft4: require("../assets/Images/Nft4.png"),
  Nft5: require("../assets/Images/Nft5.png"),
  Nft6: require("../assets/Images/Nft6.png"),
  Nft7: require("../assets/Images/Nft7.png"),
  Nft8: require("../assets/Images/Nft8.png"),
  RatingStars: require("../assets/Images/RatingStars.png"),
  TopHalfBg: require("../assets/Images/TopHalfBg.png"),
  NFT101: require("../assets/Images/NFT101.png"),
  NFT102: require("../assets/Images/NFT102.png"),
  NFT103: require("../assets/Images/NFT103.png"),
};

/* * Screens * */
export const SCREENS = {
  Startup: "Startup",
  AppliedJob: "AppliedJob",
  Login: "Login",
  SignUp: "SignUp",
  CreateAccount: "CreateAccount",
  SignUpVendor: "SignUpVendor",
  AboutApp: "AboutApp",
  Splash: "Splash",
  ResetPassword: "ResetPassword",
  ForgotPassword: "ForgotPassword",
  Verification: "Verification",
  NewPassword: "NewPassword",
  Feed: "Feed",
  UserHome: "UserHome",
  Explore: "Explore",
  Noitification: "Noitification",
  Payment: "Payment",
  Setting: "Setting",
  TermsAndConditions: "TermsAndConditions",
  NewOrder: "NewOrder",
  OrderHistory: "OrderHistory",
  OrderDetails: "OrderDetails",
  Coupons: "Coupons",
  Additem: "Additem",
  Profile: "Profile",
  OtherProfile: "OtherProfile",
  EditProfile: "EditProfile",
  RiderLogin: "RiderLogin",
  SelectType: "SelectType",
  DrawerNavigator: "DrawerNavigator",
  HelpAndSupport: "HelpAndSupport",
  NearByMapView: "NearByMapView",
  VendorMainLayout: "VendorMainLayout",
  TabBar: "TabBar",
  PostJob: "PostJob",
  NotificationSetting: "NotificationSetting",
  ScheduleTime: "ScheduleTime",
  BookingConfirm: "BookingConfirm",
  Rating: "Rating",

  AddCard: "AddCard",
  Seacrh: "Seacrh",
  PrivacyAndPolicy: "PrivacyAndPolicy",
  VendorProfile: "VendorProfile",
  Menu: "Menu",
  TopArtist: "TopArtist",
  SingleNFT: "SingleNFT",
  MyCard: "MyCard",
  NotificationSettings: "NotificationSettings",
  Gallery: "Gallery",
  CameraPage: "CameraPage",
  ExploreLand: "ExploreLand",
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
    fontWeight: "700",
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body10,
    color: COLORS.brownGray,
  },
  mediumFont12: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body12,
    color: COLORS.brownGray,
  },
  mediumFont14: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body14,
    color: COLORS.brownGray,
  },
  mediumFont16: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body16,
    color: COLORS.brownGray,
  },
  mediumFont18: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body18,
    color: COLORS.brownGray,
  },
  mediumFont18: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.body18,
    color: COLORS.brownGray,
  },
  regularFont10: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.body10,
    color: COLORS.brownGray,
  },
  regularFont12: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.body12,
    color: COLORS.brownGray,
  },
  regularFont14: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.body14,
    color: COLORS.brownGray,
  },
  regularFont16: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.body16,
    color: COLORS.brownGray,
  },
  regularFont18: {
    fontFamily: FONTFAMILY.Regular,
    fontSize: SIZES.body18,
    color: COLORS.brownGray,
  },
  lightFont08: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body08,
    color: COLORS.brownGray,
  },
  lightFont10: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body10,
    color: COLORS.brownGray,
  },
  lightFont12: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body12,
    color: COLORS.brownGray,
  },
  lightFont14: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body14,
    color: COLORS.brownGray,
  },
  lightFont16: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body16,
    color: COLORS.brownGray,
  },
  lightFont18: {
    fontFamily: FONTFAMILY.Light,
    fontSize: SIZES.body18,
    color: COLORS.brownGray,
  },
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:
    //   Platform.OS === "android"
    //     ? SIZES.fifteen * 1.2
    //     : getStatusBarHeight(true),
    backgroundColor: COLORS.white,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: "center",
  },
  loginView: {
    flex: 1,
    width: "100%",
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    alignItems: "center",
    borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.gray,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white + 10,
  },
});

export const CONSTANTS = {
  Grocery: "grocery",
  FoodDelievery: "foodDelievery",
  PickUp: "PickUp",
  VENDOR: "VENDOR",
  USER: "User",
  HUNGER: "HUNGER",

  REDUX_ACTIONS: {
    ACCESSTOKEN: "ACCESSTOKEN",
    LOGIN: "LOGIN",
    AUTHENTICATE: "AUTHENTICATE",
    LOGOUT: "LOGOUT",
    SIGNUP: "SIGNUP",

    SELECTEDSECTION: "SELECTEDSECTION",
    PICKUP: "PICKUP",
    GROCERY: "GROCERY",
    DELIEVERY: "DELIEVERY",
    SHOWALTER: "SHOWALTER",
    SHOW_ERROR: "SHOW_ERROR",
    SHOW_LOADER: "SHOW_LOADER",
  },

  API_URLS: {
    BASE: "http://porter.reignsol.net/api/v1/",
    BASE_VENDOR: "http://porter.reignsol.net/api/v1/vendor/",
    IMAGE: "http://porter.reignsol.net/",

    LOGIN: "login",
    LOGOUT: "sign-out",
    SIGN_UP: "register",
    VERIFY_OTP: "verify-otp",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    CHANGE_PASSWORD: "change-password",
    GET_PROFILE: "getRestProfile",
    UPDATE_PROFILE: "update-profile",
    GET_CONTENT: "contents",
    PAST_ORDERS: "orders/past-orders",
    NEW_ORDERS: "orders/new-orders",
    NEW_ORDERS_VIEW: "orders/getOrderView",
    VIEW_ORDER: "orders/view-order",
    GROCERY_CATEGORIES: "items/getGroceryCategories",
    RESTAURANT_CATEGORIES: "items/getRestaurantCategories",
    ITEMS_BY_CATEGORY: "items/getByCategory",
    ITEM_CREATE: "items/create",
    SAVE_DEVICE_TOKEN: "",
    COUPONS: "coupons",
    CHANGE_ACTIVE_STATUS: "customer/addRemove",
    ORDER_REJECT: "orders/reject",
    ORDER_ACCEPT: "orders/accept",
    ORDER_READY: "orders/ready-order",
    ORDER_ASSIGN: "orders/assign",
    ORDER_COMPLETE: "orders/complete-order",
    GET_EXPERTISE: "items/getAllExpertise",
    GET_PAYMENTS: "orders/get-paymentDetails",
  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: "Chat",
    MESSAGES: "messages",
    USERS: "Users",
    CHATHEADS: "ChatHeads",
    READ: "read",
    TOKEN: "Tokens",
    FCM: "https://fcm.googleapis.com/fcm/send",
  },

  DESTINATIONS: {
    SIGN_UP: "sign_up",
    FORGOT_PASSWORD: "forgot_password",
  },

  CACHE_KEYS: {
    DEFAULT_USER: "access_token",
    IS_FIRST_TIME: "is_first_time",
  },
};

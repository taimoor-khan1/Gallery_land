import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  BgView,
  CircularImage,
  CustomButton,
  CustomHeader,
  CustomTextInput,
  MyTouchableOpacity,
  PhoneTextInput,
  Row,
} from "../../components";
import { COLORS, FONTS, height, IMAGES, SCREENS, SIZES } from "../../constants";
import LinearGradient from "react-native-linear-gradient";
import CustomModal from "../../components/CustomModal";

export default function EditProfile(props) {
  const { navigation } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState(1);
  const [deleteModal, setDeleteModal] = useState(false);

  const Header = () => {
    return (
      <LinearGradient
        start={{ x: 0, y: 3 }}
        end={{ x: 2, y: 2 }}
        colors={[
          COLORS.primary,
          COLORS.secondary,
          COLORS.secondary,
          //   COLORS.primary,
        ]}
        style={[styles.Header]}
      >
        <CustomHeader
          hasBackArrow
          title={"Edit Profile"}
          //   containerStyle={{ paddingHorizontal: SIZES.ten }}
        />
        <Row
          style={{
            alignSelf: "center",
            justifyContent: "center",
            // margin: SIZES.fifteen,
          }}
        >
          <CircularImage
            image={IMAGES.User}
            style={{
              width: SIZES.fifty,
              height: SIZES.fifty,
            }}
          />
          <View style={{ marginHorizontal: SIZES.ten }}>
            <Text
              numberOfLines={2}
              style={[
                FONTS.mediumFont12,
                {
                  marginBottom: SIZES.ten,
                  color: COLORS.blackWithopacity,
                },
              ]}
            >
              We recommed an image of at least 100x100px.
            </Text>
            <MyTouchableOpacity style={styles.removeBtn}>
              <Text style={[FONTS.mediumFont12, { color: COLORS.white }]}>
                Remove
              </Text>
            </MyTouchableOpacity>
          </View>
        </Row>
      </LinearGradient>
    );
  };
  return (
    <BgView>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: SIZES.twenty }}>
          <CustomTextInput
            value={name}
            onChangeText={setName}
            placeholder={"Name"}
            label={"Full name"}
          />
          <CustomTextInput
            value={email}
            placeholder={"Email"}
            onChangeText={setEmail}
            label={"Email"}
            email
          />
          <PhoneTextInput
            label="Mobile Phone"
            placeholder={"Phone Number"}
            phone={phoneNumber}
            setPhone={setPhoneNumber}
            setCountryCode={setCountryCode}
          />
          <CustomTextInput
            placeholder={"Address"}
            value={address}
            onChangeText={setAddress}
            label={"Address"}
          />
          <CustomTextInput
            placeholder={"Password"}
            value={password}
            onChangeText={setPassword}
            label={"Password"}
            password
          />
          <CustomTextInput
            value={reTypePassword}
            placeholder={"Re Type Password"}
            onChangeText={setReTypePassword}
            label={"Re Type Password"}
            password
          />
          <CustomButton
            transparent
            onPress={() => {
              setDeleteModal(true);
            }}
            title={"Delete account"}
            titleStyle={{ color: COLORS.black }}
            btnStyle={{
              marginVertical: SIZES.twentyFive,
              borderWidth: 1,
              borderColor: COLORS.brownGray,
            }}
          />

          <CustomModal
            isVisible={deleteModal}
            animationIn={"lightSpeedIn"}
            onBackdropPress={() => setDeleteModal(false)}
            animationOut={"lightSpeedOut"}
          >
            <View
              style={{
                paddingHorizontal: SIZES.fifteen,
                paddingVertical: SIZES.twentyFive,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.fifteen,
              }}
            >
              <Text
                style={[
                  FONTS.boldFont20,
                  { color: COLORS.black, textAlign: "center" },
                ]}
              >
                Confirmation
              </Text>
              <Text
                style={[
                  FONTS.mediumFont12,
                  {
                    color: COLORS.brownGray,
                    marginTop: SIZES.twenty,
                    textAlign: "center",
                  },
                ]}
              >
                Are you sure you want to delete your account? By deleting your
                account, your data will be wiped off from our servers and your
                data won’t be available after deleting this account.
              </Text>

              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: SIZES.twenty,
                  width: "80%",
                  alignSelf: "center",
                }}
              >
                <MyTouchableOpacity
                  onPress={() => setDeleteModal(false)}
                  style={[
                    {
                      paddingHorizontal: SIZES.twentyFive,
                      paddingVertical: SIZES.fifteen,
                      backgroundColor: COLORS.white,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: SIZES.five,
                      marginHorizontal: SIZES.ten,
                      borderColor: COLORS.brownGray + 35,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
                    No
                  </Text>
                </MyTouchableOpacity>
                <MyTouchableOpacity
                  style={[
                    {
                      paddingHorizontal: SIZES.twentyFive,
                      paddingVertical: SIZES.fifteen,
                      backgroundColor: COLORS.primary,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: SIZES.five,
                      marginHorizontal: SIZES.ten,
                    },
                  ]}
                >
                  <Text style={[FONTS.mediumFont14, { color: COLORS.white }]}>
                    Yes
                  </Text>
                </MyTouchableOpacity>
              </Row>
            </View>
          </CustomModal>
        </View>
      </ScrollView>
    </BgView>
  );
}

const styles = StyleSheet.create({
  Header: {
    paddingTop: SIZES.twenty,
    paddingBottom: SIZES.twentyFive,
    borderBottomRightRadius: SIZES.twentyFive,
    borderBottomLeftRadius: SIZES.twentyFive,
  },
  removeBtn: {
    alignSelf: "flex-start",
    paddingVertical: SIZES.five * 1.15,
    paddingHorizontal: SIZES.ten * 1.15,
    borderWidth: 1,
    borderRadius: SIZES.fifteen,
    backgroundColor: COLORS.transparent,
  },
});

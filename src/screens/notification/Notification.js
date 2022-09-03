import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { COLORS, FONTS, SIZES, STYLES } from "../../constants";
import {
  BgView,
  CustomHeader,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { NotificationsComponant } from "../../components";
import CustomModal from "../../components/CustomModal";
export default function Notifications() {
  const NotificationData = [
    {
      id: 1,
      name: "Duis aute irure Lorem ipsum dolor sit amet, consectetur elit, sed do...",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 2,
      dayAgo: "Invite Friends - Get 3 coupons each!",
      name: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 3,
      name: "System",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 4,
      name: "System",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 5,
      name: "Promotion",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 6,
      name: "Promotion",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 7,
      name: "Promotion",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 8,
      name: "Promotion",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
    {
      id: 9,
      name: "Promotion",
      dayAgo: "Invite Friends - Get 3 coupons each!",
      dec: "It is a long established fact that a reader will be distracted by the readable content of apage when looking at its layout. The point of  ",
    },
  ];

  const [NotificationList, setNotificationList] = useState(NotificationData);
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteItem = (index) => {
    const arr = [...NotificationList];
    arr.splice(index, 1);
    setNotificationList(arr);
  };

  return (
    <BgView>
      <CustomHeader
        hasBackArrow
        title="Notification"
        containerStyle={{ paddingVertical: SIZES.twenty }}
        showDeleteButton
        onDeletePress={() => {
          setDeleteModal(true);
        }}
      />

      <FlatList
        data={NotificationList}
        keyExtractor={(Item) => Item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <NotificationsComponant
              data={item}
              handleDelete={() => deleteItem(index)}
            />
          );
        }}
        contentContainerStyle={{
          marginTop: 20,
          paddingBottom: SIZES.fifty * 2,
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
            Are you sure you want to delete all notifications
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
    </BgView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

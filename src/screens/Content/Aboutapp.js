import { StyleSheet, Text, View, ScrollView, Platform } from "react-native";
import React from "react";
import { STYLES, COLORS, FONTS, SIZES } from "./../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import { BgView } from "../../components";

export default function AboutApp() {
  const Item = ({ answer, question }) => {
    return (
      <View style={styles.ItemContainer}>
        <Text style={[FONTS.mediumFont16, styles.question]}>{question}</Text>
        <Text style={[FONTS.mediumFont14, styles.answer]}>{answer}</Text>
      </View>
    );
  };
  return (
    <BgView style={Platform.OS === "ios" && { paddingTop: SIZES.twenty }}>
      <CustomHeader title={"About App"} hasBackArrow />

      <View style={{ height: SIZES.fifteen }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: SIZES.fifteen }}
      >
        <Item
          question={"Adipsicing Eluit Sed Colara?"}
          answer={`Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.`}
        />
      </ScrollView>
    </BgView>
  );
}

const styles = StyleSheet.create({
  question: {
    color: COLORS.black,
  },
  answer: {
    color: COLORS.gray,
    marginTop: SIZES.ten,
    textAlign: "justify",
  },

  ItemContainer: {
    marginHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.twentyFive,
    backgroundColor: COLORS.purpleShade,
    borderRadius: SIZES.ten,
  },
});

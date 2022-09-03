import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BgView, CustomHeader } from "../../components";

export default function Support() {
  return (
    <BgView>
      <CustomHeader title={"Help & Support"} hasBackArrow />
      <Text>Support</Text>
    </BgView>
  );
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { BgView, CustomHeader } from "../../components";
import SearchBar from "react-native-dynamic-search-bar";
import { COLORS } from "../../constants";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <BgView>
      <CustomHeader title={"Search"} hasBackArrow />
      <SearchBar
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        backgroundColor={COLORS.halfWhite}
        placeholder="Search here"
        onChangeText={(text) => setSearch(text)}
        onSearchPress={() => console.log("Search Icon is pressed")}
        onClearPress={() => setSearch("")}
        onPress={() => alert("onPress")}
        style={{ backgroundColor: COLORS.halfWhite }}
      />
    </BgView>
  );
}

const styles = StyleSheet.create({});

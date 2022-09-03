import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  BgView,
  CustomHeader,
  Icon,
  IconType,
  MyTouchableOpacity,
  Row,
} from "../../components";
import SearchBar from "react-native-dynamic-search-bar";
import { COLORS, FONTS, SIZES, width } from "../../constants";
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";

export default function ExploreLand(props) {
  const [search, setSearch] = useState("");
  const _map = React.useRef(null);
  const [region, setRegion] = useState({
    latitude: 22.6345648,
    longitude: 88.4377279,
    latitudeDelta: 0.01486419044303443,
    longitudeDelta: 0.0140142817690068,
  });
  return (
    <BgView>
      {/* <Row
        style={{
          position: "absolute",
          top:
            Platform.OS === "ios" ? SIZES.twentyFive * 1.5 : SIZES.twenty * 1.5,
          zIndex: 10,
          alignItems: "center",
          justifyContent: "center",
          width: width,
          paddingVertical: SIZES.fifteen,
        }}
      >
        <MyTouchableOpacity
          activeOpacity={0.85}
          style={{
            borderRadius: width,
            borderColor: COLORS.black,
            borderWidth: 1,
            padding: 8,
            position: "absolute",
            start: SIZES.fifteen,
          }}
          onPress={() => props?.navigation.goBack()}
        >
          <Icon
            name="chevron-back"
            type={IconType.Ionicons}
            size={SIZES.twenty}
            color={COLORS.black}
          />
        </MyTouchableOpacity>
      </Row> */}

      <MapView
        provider={PROVIDER_DEFAULT}
        showsBuildings
        showsCompass
        style={styles.map}
        ref={_map}
        initialRegion={region}
      >
        {/* <CustomHeader title={"Near by"} hasBackArrow /> */}
      </MapView>
    </BgView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

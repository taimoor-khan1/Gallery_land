import React, { useState } from "react";
import { Text, StyleSheet, View, Image, ActivityIndicator } from "react-native";
import { COLORS, CONSTANTS, FONTFAMILY, SIZES, IMAGES } from "../constants";

import FastImage from "react-native-fast-image";
import ProgressiveImage from "rn-progressive-image";

export default function CircularImage(props) {
  const [isLoading, setIsLoading] = useState(true);
  // console.log('CircularImage =============== >>>>>>>> ', props);
  return (
    <View style={[props.style, { overflow: "hidden" }]}>
      <ProgressiveImage
        // thumbnailSource={
        //   !props.uri
        //     ? {
        //         uri: Image.resolveAssetSource(props.image).uri,
        //         priority: FastImage.priority.normal,
        //       }
        //     : { uri: props.uri, priority: FastImage.priority.normal }
        // }
        source={
          !props.uri
            ? {
                uri: Image.resolveAssetSource(props.image).uri,
                priority: FastImage.priority.high,
              }
            : { uri: props.uri, priority: FastImage.priority.high }
        }
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        style={[styles.image, props.imageStyle]}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* {isLoading && (
        <View
          style={{
            backgroundColor: COLORS.brownGray + 75,
            ...StyleSheet.absoluteFill,
            borderRadius: SIZES.twenty * 2.5,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <ActivityIndicator />
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: SIZES.twentyFive * 2.5,
    width: SIZES.twentyFive * 2.5,
    borderRadius: SIZES.twenty * 2.5,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});

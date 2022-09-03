import React, { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import {
  BgView,
  CustomHeader,
  MyTouchableOpacity,
  Row,
} from "../../components";
import { GradientSwitch, YesNoSwitch } from "../../components/AnimatedSwitch";

export default function NotificationSettings(props) {
  const [data, setData] = useState([
    {
      id: "setting1",
      title: "pause all",
      description: "",
    },
    {
      id: "setting2",
      title: "email",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
    {
      id: "setting3",
      title: "New Features of GalleryLand",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
    {
      id: "setting4",
      title: "Newsletters",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
    {
      id: "setting5",
      title: "Recommedations",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
    {
      id: "setting6",
      title: "Review Suggestions",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
    {
      id: "setting7",
      title: "App Update",
      description:
        "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
    },
  ]);
  const [turnedOn, setTurnedOn] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (selected !== "") {
      onChange(selected);
    }
  }, [selected]);

  const onChange = (item) => {
    if (turnedOn.includes(item)) {
      const array = turnedOn;
      const index = array.indexOf(item);
      if (index > -1) {
        array.splice(index, 1);
      }
      setTurnedOn(array);
      setSelected("");
      return;
    }
    var temp = turnedOn;

    temp.push(item);

    setTurnedOn(temp);

    setSelected("");
  };

  return (
    <BgView>
      <CustomHeader
        hasBackArrow
        title="Notification Settings"
        containerStyle={{ paddingVertical: SIZES.twenty }}
      />

      <ScrollView>
        {data.map((settingItem, index) => (
          <MyTouchableOpacity
            onPress={() => setSelected(settingItem.id)}
            style={{
              marginHorizontal: SIZES.fifteen,
              marginVertical: SIZES.fifteen,
              borderBottomWidth: 1,
              borderBottomColor: COLORS.brownGray,
              paddingBottom: SIZES.ten,
            }}
          >
            <Row
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <View style={{ maxWidth: "80%" }}>
                <Text
                  style={[FONTS.boldFont16, { textTransform: "capitalize" }]}
                >
                  {settingItem.title}
                </Text>
                <Text
                  style={[
                    FONTS.mediumFont12,
                    { textTransform: "capitalize", marginTop: SIZES.ten },
                  ]}
                >
                  {settingItem.description}
                </Text>
              </View>
              <YesNoSwitch
                size={
                  Platform.OS === "ios"
                    ? SIZES.twentyFive * 1.75
                    : SIZES.twentyFive * 2.1
                }
                value={turnedOn.includes(settingItem.id)}
                onChange={() => {}}
                animationSpeed={"fast"}
                fontSize={SIZES.body10}
                inActiveColor={COLORS.brownGray + 85}
                activeColor={COLORS.primary + 85}
                backgroundColor={"#D3D3D3"}
              />
            </Row>
          </MyTouchableOpacity>
        ))}
      </ScrollView>
    </BgView>
  );
}

const styles = StyleSheet.create({});

const Settings = [
  {
    id: "setting1",
    title: "pause all",
    description: "",
  },
  {
    id: "setting2",
    title: "email",
    description:
      "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
  },
  {
    id: "setting3",
    title: "New Features of GalleryLand",
    description:
      "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
  },
  {
    id: "setting4",
    title: "Newsletters",
    description:
      "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
  },
  {
    id: "setting5",
    title: "Recommedations",
    description:
      "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
  },
  {
    id: "setting6",
    title: "App Update",
    description:
      "Excepteur sint occaecat non proident, sunt in culpa qui officia est laborum.",
  },
];

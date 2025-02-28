import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles } from "@/styles/homeStyles";
import { screenHeight } from "@/utils/Constants";
import MenuItem from "./MenuItem";
import { DynamicIconProps } from "./Icons";

const androidHeights = [screenHeight * 0.12, screenHeight * 0.42, screenHeight * 0.8];
const iosHeights = [screenHeight * 0.2, screenHeight * 0.5, screenHeight * 0.8];

const MenuItems = ({ items }: any) => {
  return (
    <View style={homeStyles.menuItems}>
      {items.map((item: any, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
    </View>
  );
};

export default MenuItems;

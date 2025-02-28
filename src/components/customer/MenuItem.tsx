import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import { homeStyles } from "@/styles/homeStyles";
import { screenHeight } from "@/utils/Constants";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DynamicIcon, DynamicIconProps } from "./Icons";

const androidHeights = [screenHeight * 0.12, screenHeight * 0.42, screenHeight * 0.8];
const iosHeights = [screenHeight * 0.2, screenHeight * 0.5, screenHeight * 0.8];

const MenuItem = ({ library, name, size = 30, color = "black", iconName }: DynamicIconProps) => {
  return (
    <TouchableOpacity style={homeStyles.menuItem}>
      <View style={homeStyles.menuItemIcon}>
        <DynamicIcon library={library} name={name} size={size} color={color} iconName={iconName}/>
      </View>
      <Text style={homeStyles.menuText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

import React from "react";
import { View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Dictionnaire des bibliothèques d'icônes
const iconLibraries: any = {
  Fontisto,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
};

export interface DynamicIconProps {
  library: string;
  name?: string;
  size?: number;
  color?: string;
  iconName: string;
}

export const DynamicIcon = ({ library, size = 24, color = "black", iconName }: DynamicIconProps) => {
  const IconComponent: any = iconLibraries[library]; // Récupère la bonne bibliothèque

  if (!IconComponent) {
    return null; // Évite une erreur si la bibliothèque n'existe pas
  }

  return <IconComponent name={iconName} size={size} color={color} />;
};

import { View, Text,Image, Platform } from "react-native";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { homeStyles } from "@/styles/homeStyles";
import { StatusBar } from "expo-status-bar";
import LocationBar from "@/components/customer/LocationBar";
import { screenHeight } from "@/utils/Constants";
import DraggableMap from "@/components/customer/DraggableMap";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import SheetContent from "@/components/customer/SheetContent";
import { getMyRides } from "@/service/rideService";
import MenuItems from "@/components/customer/MenuItems";
import { iconsList1, iconsList2, iconsList3 } from "@/components/customer/IconsLists";

const androidHeights = [screenHeight * 0.12, screenHeight * 0.42, screenHeight * 0.8];
const iosHeights = [screenHeight * 0.2, screenHeight * 0.5, screenHeight * 0.8];

const CustomerHome = () => {
  /*  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(
    () => (Platform.OS === "ios" ? iosHeights : androidHeights),
    []
  );

  const [mapHeight, setMapHeight] = useState(snapPoints[0]);

  const handleSheetChanges = useCallback((index: number) => {
    let height = screenHeight * 0.8;
    if (index == 1) {
      height = screenHeight * 0.5;
    }
    setMapHeight(height);
  }, []);

  useEffect(() => {
    getMyRides();
  }, []);
*/
  return (
    <View style={homeStyles.container}>
      <StatusBar style="light" backgroundColor="orange" translucent={false} />
      <View style={homeStyles.titleBox}>
        <Image source={require("@/assets/images/Wassy.png")} style={homeStyles.logo} />
      </View>
      <View style={homeStyles.cardBox}>
        <View style={homeStyles.account}>
          <Text style={homeStyles.accountTitle}>Mon compte</Text>
        </View>
        <View style={homeStyles.creditCard}>
          <View style={homeStyles.creditCardBox}>
          <Text style={homeStyles.creditName}>David M.</Text>
          <Text style={homeStyles.creditId}>ID: 4756-9018</Text>
          <Text style={homeStyles.creditSold}>4 500.00 CFA</Text>
          </View>
        </View>
      </View>
      <View style={homeStyles.menuBox}>
        <View style={homeStyles.menuTitle}>
          <Text style={homeStyles.menuHeader}>Mes services</Text>
        </View>
        <View style={homeStyles.menu}>
          <MenuItems items={iconsList1} />
          <MenuItems items={iconsList2} />
          <MenuItems items={iconsList3} />
        </View>
      </View>
    </View>
  );
};

export default CustomerHome;

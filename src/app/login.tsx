import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useRef } from "react";
import { router } from "expo-router";
import { roleStyles } from "@/styles/roleStyles";
import CustomText from "@/components/shared/CustomText";
import LottieView from "lottie-react-native";
import { useLogto } from "@logto/rn";

const Role = () => {
  const animation = useRef<LottieView>(null);
  const { signIn, fetchUserInfo, signOut, isAuthenticated, getIdTokenClaims } = useLogto();

  const handleCustomerPress = () => {
    router.navigate("/customer/auth");
  };

  const handleRiderPress = () => {
    router.navigate("/rider/auth");
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserInfo().then((userInfo) => {
        console.log("userInfo :::::::::::::: ", userInfo);
      });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((claims) => {
        console.log("claims :::::::::::::: ", claims);
      });
    }
  }, [isAuthenticated, getIdTokenClaims]);

  return (
    <View style={roleStyles.container}>
      <Image source={require("@/assets/images/Wassy.png")} style={roleStyles.logo} />
      <CustomText fontFamily="Medium" variant="h6">
        Bienvenue
      </CustomText>

      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 500,
          height: 500,
          backgroundColor: "#fff",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@/assets/lottie/1740345279382.json")}
      />
      <TouchableOpacity style={roleStyles.card} onPress={async () => router.navigate("/customer/home")}>
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>HOME</CustomText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={roleStyles.card} onPress={async () => signIn("io.logto://callback")}>
        <View style={roleStyles.cardContent}>
          <CustomText style={roleStyles.title}>COMMENCER</CustomText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Role;

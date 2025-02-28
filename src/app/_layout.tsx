import React from "react";
import { Stack } from "expo-router";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { WSProvider } from "@/service/WSProvider";
import { LogtoProvider } from "@logto/rn";
import { logtoconfig } from "@/utils/LogtoConfig"; // Assuming this is where your Logto configuration is defined

const Layout = () => {
  return (
    <LogtoProvider config={logtoconfig}>
      <WSProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="customer/selectlocations" />
          <Stack.Screen name="customer/ridebooking" />
          <Stack.Screen name="customer/home" />
          <Stack.Screen name="customer/auth" />
          <Stack.Screen name="rider/auth" />
          <Stack.Screen name="rider/home" />
          <Stack.Screen name="customer/liveride" />
          <Stack.Screen name="rider/liveride" />
        </Stack>
      </WSProvider>
    </LogtoProvider>
  );
};

export default gestureHandlerRootHOC(Layout);

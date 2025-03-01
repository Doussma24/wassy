import { useRiderStore } from "@/store/riderStore";
import * as SecureStore from "expo-secure-store"; // Import de SecureStore
import { useUserStore } from "@/store/userStore";
import { resetAndNavigate } from "@/utils/Helpers";
import axios from "axios";
import { Alert } from "react-native";
import { BASE_URL } from "./config";
import { clearAllSecureStore } from "@/store/storage";

export const signin = async (
  payload: {
    role: "customer" | "rider";
    phone: string;
  },
  updateAccessToken: () => void
) => {
  const { setUser } = useUserStore.getState();
  const { setUser: setRiderUser } = useRiderStore.getState();

  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, payload);
    if (res.data.user.role === "customer") {
      setUser(res.data.user);
    } else {
      setRiderUser(res.data.user);
    }

    SecureStore.setItem("access_token", res.data.access_token);
    SecureStore.setItem("refresh_token", res.data.refresh_token);

    if (res.data.user.role === "customer") {
      resetAndNavigate("/customer/home");
    } else {
      resetAndNavigate("/rider/home");
    }

    updateAccessToken();
  } catch (error: any) {
    Alert.alert("Oh! Dang there was an error");
    console.log("Error: ", error?.response?.data?.msg || "Error signin");
  }
};

export const logout = async (disconnect?: () => void) => {
  if (disconnect) {
    disconnect();
  }
  const { clearData } = useUserStore.getState();
  const { clearRiderData } = useRiderStore.getState();

  clearAllSecureStore();
  clearRiderData();
  clearData();
  resetAndNavigate("/login");
};

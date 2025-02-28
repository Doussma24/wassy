import axios from "axios";
import { BASE_URL } from "./config";
import * as SecureStore from "expo-secure-store"; // Import de SecureStore
import { logout } from "./authService";
import { clearAllSecureStore } from "@/store/storage";

export const refresh_tokens = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync("refresh_token");
    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
      refresh_token: refreshToken,
    });

    const new_access_token = response.data.access_token;
    const new_refresh_token = response.data.refresh_token;

    SecureStore.setItem("access_token", new_access_token);
    SecureStore.setItem("refresh_token", new_refresh_token);
    return new_access_token;
  } catch (error) {
    console.log("REFRESH TOKEN ERROR");
    clearAllSecureStore();
    logout();
  }
};

export const appAxios = axios.create({
  baseURL: BASE_URL,
});

appAxios.interceptors.request.use(async (config) => {
  const accessToken = await SecureStore.getItemAsync("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

appAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newAccessToken = await refresh_tokens();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config);
        }
      } catch (error) {
        console.log("Error refreshing token");
      }
    }

    return Promise.reject(error);
  }
);

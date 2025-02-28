import * as SecureStore from "expo-secure-store";

export const tokenStorage = {
  setItem: async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
  },
  getItem: async (key: string) => {
    const value = await SecureStore.getItemAsync(key);
    return value ?? null;
  },
  removeItem: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

const getStoredKeys = async () => {
  return ["access_token", "refresh_token", "user_id", "some_other_key"];
};

export const clearAllSecureStore = async () => {
  const keys = await getStoredKeys(); // Liste dynamique des clés à supprimer

  for (const key of keys) {
    await SecureStore.deleteItemAsync(key);
  }
};

// Exemple d'utilisation :
const setToken = async (token: string) => {
  await tokenStorage.setItem("auth-token", token);
};

const getToken = async () => {
  const token = await tokenStorage.getItem("auth-token");
  console.log(token);
};

const removeToken = async () => {
  await tokenStorage.removeItem("auth-token");
};

// import { MMKV } from "react-native-mmkv";

// export const tokenStorage = new MMKV({
//   id: "token-storage",
//   encryptionKey: "some-secret-key",
// });

// export const storage = new MMKV({
//   id: "my-app-storage",
//   encryptionKey: "some-secret-key",
// });

// export const mmkvStorage = {
//   setItem: (key: string, value: string) => {
//     storage.set(key, value);
//   },
//   getItem: (key: string) => {
//     const value = storage.getString(key);
//     return value ?? null;
//   },
//   removeItem: (key: string) => {
//     storage.delete(key);
//   },
// };

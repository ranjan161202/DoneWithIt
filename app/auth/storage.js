import * as SecureStore from "expo-secure-store";

const key = "authToken";
var Buffer = require("buffer/").Buffer;

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token
    ? Buffer.from(token.split(".")[1], "base64").toString("utf-8")
    : null;
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, getUser, removeToken, storeToken };

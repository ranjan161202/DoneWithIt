import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === "false") {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    width: "100%",
    zIndex: 1,
    top: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
export default OfflineNotice;

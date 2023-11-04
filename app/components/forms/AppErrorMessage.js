import { StyleSheet } from "react-native";
import React from "react";

import AppText from "../AppText";

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    marginLeft: 10,
  },
});
export default AppErrorMessage;

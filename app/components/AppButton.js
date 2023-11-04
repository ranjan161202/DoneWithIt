import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    marginVertical: 10,
    margin: 10,
    padding: 15,
    width: "95%",
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;

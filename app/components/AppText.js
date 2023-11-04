import { Text, Platform, StyleSheet } from "react-native";
import React from "react";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;

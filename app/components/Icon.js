import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const Icon = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={[
        styles.icon,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Icon;

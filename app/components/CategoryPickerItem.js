import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

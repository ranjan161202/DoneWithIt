import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import routes from "../navigation/routes";

export default function ViewImage({ route }) {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
});

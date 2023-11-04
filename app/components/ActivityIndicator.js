import { StyleSheet, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        style={styles.loading}
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  loading: { height: 100, top: 180, left: 10, alignSelf: "center" },
  overlay: {
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
export default ActivityIndicator;

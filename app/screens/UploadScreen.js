import { Modal, StyleSheet, View } from "react-native";
import React from "react";

import colors from "../config/colors";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            autoSize
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
export default UploadScreen;

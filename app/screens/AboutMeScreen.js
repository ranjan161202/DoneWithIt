import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";

import useAuth from "../auth/useAuth";

const AboutMeScreen = () => {
  const { user } = useAuth();
  const currUser = JSON.parse(user);

  return (
    <View style={styles.container}>
      <AppText>
        Hi I am {currUser.name} and this is my first react native app!
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
export default AboutMeScreen;

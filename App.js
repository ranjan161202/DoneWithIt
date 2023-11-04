import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
    setIsReady(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
        <OfflineNotice />
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

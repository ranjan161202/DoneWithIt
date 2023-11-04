import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";
import routes from "./routes";
import ViewImageScreen from "../screens/ViewImageScreen";
import AboutMeScreen from "../screens/AboutMeScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessageScreen} />
    <Stack.Screen name={routes.VIEWIMAGE} component={ViewImageScreen} />
    <Stack.Screen name={routes.ABOUTME} component={AboutMeScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

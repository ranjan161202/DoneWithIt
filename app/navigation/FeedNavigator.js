import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: "modal" }}>
    <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

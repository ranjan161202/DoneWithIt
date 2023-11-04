import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "../screens/ListingEditScreen";
import colors from "../config/colors";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import routes from "./routes";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: colors.medium,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <View style={styles.addListingButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.LISTING_EDIT)}
              >
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={50}
                  color="tomato"
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name={routes.MYZONE}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addListingButton: {
    transform: [{ translateY: -15 }],
    backgroundColor: "white",
    borderRadius: 30,
  },
});
export default AppNavigator;

import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import { ListItem, ListItemSeperator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.LISTINGS,
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logOut } = useAuth();
  const currUser = JSON.parse(user);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={currUser.name}
          subTitle={currUser.email}
          image={require("../assets/ranjan.jpg")}
          onPress={() => navigation.navigate(routes.ABOUTME)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() => logOut()}
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

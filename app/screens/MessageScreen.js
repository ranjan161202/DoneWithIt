import { FlatList, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Swipeable } from "react-native-gesture-handler";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemSeperator,
  ListItemDeleteAction,
} from "../components/lists";
import routes from "../navigation/routes";

const initialMessages = [
  {
    id: 1,
    title: "Red Jacket",
    description: "I'm interested in this item. Do you provide free delivery?",
    image: require("../assets/jacket.jpg"),
    target: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Refurbished Couch",
    description: "Please give me a call and we'll arrange this for you.",
    image: require("../assets/couch.jpg"),
    target: require("../assets/couch.jpg"),
  },
];

const MessageScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
    console.log("Deleted pressed for message:", message);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          >
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() =>
                navigation.navigate(routes.VIEWIMAGE, {
                  image: item.target,
                })
              }
            />
          </Swipeable>
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
export default MessageScreen;

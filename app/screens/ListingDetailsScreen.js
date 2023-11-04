import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import { ListItem } from "../components/lists";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import routes from "../navigation/routes";

const ListingDetailsScreen = ({ route, navigation }) => {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View>
        <Image
          uri={listing.images[0].url}
          tint="light"
          preview={{ uri: listing.images[0].thumbnailUrl }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/ranjan.jpg")}
              title="Ranjan"
              subTitle="3 Listings"
              onPress={() => navigation.navigate(routes.MESSAGES)}
            />
            <ContactSellerForm listing={listing} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

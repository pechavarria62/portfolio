import React from "react";
import { Text, View, StyleSheet } from "react-native";
import LocationDisplay from "../../components/LocationDisplay";

const HomePage = () => {
  return (
    <View
      screenOptions={{
        labelShown: false,
      }}
    >
      <View>
        <LocationDisplay />
      </View>
      <View>
        <Text>Test Screen</Text>
      </View>
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  locationText: {
    color: "#ffffff",
    fontSize: 14,
  },
});

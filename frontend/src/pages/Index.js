// Import all the pages here & components here
import React from "react";
import LocationDisplay from "../components/LocationDisplay";
import { View } from "react-native";
import Drawer from "./Drawer";
function Index() {
  return (
    <View>
      <LocationDisplay />
      <Drawer/>
    </View>
  );
}

export default Index;

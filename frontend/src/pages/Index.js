// Import all the pages here & components here
import React from "react";
import LocationDisplay from "../components/LocationDisplay";
import { View } from "react-native";
import IndexPage from "../pages/IndexPage";
import Posts from "./Posts";

function Index() {
  return (
    <View>
      {/* <LocationDisplay /> */}
      <IndexPage/>
      <Posts/>
    </View>
  );
}

export default Index;

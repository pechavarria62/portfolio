// Import all the pages here & components here
import React from "react";
import Navigation from "../components/Navigation";
import { View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';

function Index() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default Index;

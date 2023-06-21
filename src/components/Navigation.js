import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@native-base/icons";
import { Icon } from "native-base";
import HomePage from "../pages/screens/HomePage";
import Orders from "../pages/Orders";
import Offers from "../pages/Offers";
import Account from "../pages/Account";
import { theme } from "../config/custum";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.white,
        },
        tabBarInactiveTintColor: theme.colors.primary[800],
        tabBarActiveTintColor: theme.colors.secondary[500],
        headerShown: false,
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Navigation;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from "react-native";
import HomePage from '../pages/HomePage';
import Orders from '../pages/Orders';
import Offers from '../pages/Offers';
import Account from '../pages/Account';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
        // tabBarOption={{
        //     showLabel: false,
        //     style:{

        //     }
        // }}
        >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Offers" component={Offers} />
        <Tab.Screen name="Account" component={Account} />

        </Tab.Navigator>
    )
}

export default Navigation


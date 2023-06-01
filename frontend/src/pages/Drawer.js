import React, { useState, useEffect } from 'react';
import { 
    FlatList,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigation,
    DrawerContentScrollView
} from "@react-navigation/drawer";
import {Layout} from "../components/Layout";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from "../../constants/constants";

const Drawer = () => {

    return (
        <View
            style={{
                flex:1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator>
                
            </Drawer.Navigator>

        </View>
    );
};

export default Drawer;

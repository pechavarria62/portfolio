import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Head = () => {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
    { id: 1, title: 'Tab 1' },
    { id: 2, title: 'Tab 2' },
    { id: 3, title: 'Tab 3' },
    ];

    const handleTabPress = (tabId) => {
    setActiveTab(tabId);
    };

    return (
    <View style={styles.container}>
        {tabs.map((tab) => (
        <TouchableOpacity
            key={tab.id}
            style={[
            styles.tabButton,
            tab.id === activeTab && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(tab.id)}
        >
            <Text
            style={[
                styles.tabButtonText,
                tab.id === activeTab && styles.activeTabButtonText,
            ]}
            >
            {tab.title}
            </Text>
        </TouchableOpacity>
        ))}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#eaeaea',
    },
    tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    },
    activeTabButton: {
    backgroundColor: '#fff',
    borderColor: '#000',
    },
    tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    },
    activeTabButtonText: {
    color: '#000',
    },
});

export default Head;

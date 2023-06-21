import { useState, useEffect } from 'react';
import { View, Text } from "react-native";

const Onboarding = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('../../backend/src/api/posts')
        .then(response => response.json())
        .then(data => setPosts(data.posts));
    }, []);

    return (
        <View styles = {styles.container}>
            <Text styles = {styles.locationText}>Posts</Text>
            {posts.map(post => (
                <Text key={post.id}>
                    <Text>{post.title}</Text>
                    <Text>{post.content}</Text>
                </Text>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 16,
        right: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        zIndex: 9999,
    },
    locationText: {
        color: '#ffffff',
        fontSize: 14,
    },
});

export default Onboarding;
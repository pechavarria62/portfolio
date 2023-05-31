import { useState, useEffect } from 'react';
import { View, Text } from "react-native";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('../../backend/src/api/posts')
        .then(response => response.json())
        .then(data => setPosts(data.posts));
    }, []);

    return (
        <View>
            <Text>Posts</Text>
            {posts.map(post => (
                <Text key={post.id}>
                    <Text>{post.title}</Text>
                    <Text>{post.content}</Text>
                </Text>
            ))}
        </View>
    );
};

export default IndexPage;
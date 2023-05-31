import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { db } from '../../../backend/lib/firebase';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const unsubscribe = db.collection('posts').onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
        posts.push(doc.data());
        });
        setPosts(posts);
    });
    return unsubscribe;
    }, []);

    return (
    <FlatList
        data={posts}
        renderItem={({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
        )}
        keyExtractor={item => item.id}
    />
    );
};

export default Posts

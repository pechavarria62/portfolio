import React, { useState, useEffect } from 'react';

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    fetch('/api/posts')
        .then(response => response.json())
        .then(data => setPosts(data.posts));
    }, []);

    return (
    <div>
        <h1>Posts</h1>
        {posts.map(post => (
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
        ))}
    </div>
    );
};

export default IndexPage;

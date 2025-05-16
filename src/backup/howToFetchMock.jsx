import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();
    setPosts(data);
  };

  // ...additional code
}


const editPost = async (id, updatedContent) => {
  // Update local state
  setPosts(prevPosts =>
    prevPosts.map(post =>
      post.id === id ? { ...post, content: updatedContent } : post
    )
  );

  // Send update to the server
  await fetch(`https://api.example.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: updatedContent }),
  });
};


const deletePost = async id => {
  // Update local state
  setPosts(prevPosts => prevPosts.filter(post => post.id !== id));

  // Send delete request to the server
  await fetch(`https://api.example.com/posts/${id}`, {
    method: 'DELETE',
  });
};

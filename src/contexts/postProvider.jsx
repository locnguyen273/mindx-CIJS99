/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import {
  deletePostFromDatabaseWithId,
  getPostsFromDatabase,
  getPostsFromDatabaseForUserWithId,
} from "../api";

export const PostContext = React.createContext({});

const PostProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function getAllPosts() {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabase();
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function getPostsForUserWithId(userId) {
    setIsLoading(true);
    const postsResponse = await getPostsFromDatabaseForUserWithId(userId);
    setPosts(postsResponse);
    setIsLoading(false);
  }

  async function deletePostWithId(postId) {
    setIsLoading(true);
    await deletePostFromDatabaseWithId(postId);
    setIsLoading(false);
  }

  async function handleDeleteById(postId) {
    setIsLoading(true);
    await setPosts(posts.filter(post => post.id !== postId));
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{
        isLoading,
        posts,
        setPosts,
        getPostsForUserWithId,
        deletePostWithId,
        handleDeleteById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

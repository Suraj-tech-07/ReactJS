import { createContext, useReducer, useState, useEffect } from "react";
const POST_LIST = [];

const DEFAULT_STATE = { postList: [], addPost: () => { }, removePost: () => { }, postFromServer: () => { } };

export const PostList = createContext(DEFAULT_STATE);

// Reducer function to manage the state of the post list
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "AddPost") {
        console.log("New Post : ", action.payload.post);
        newPostList = [...currentPostList, action.payload.post];
    }
    else if (action.type === "RemovePost") {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.id);
    }
    else if (action.type === "serverPost") {
        newPostList = action.payload.post;
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, POST_LIST);
    // Function to add a post to the list
    const addPost = (event) => {
        let newObject = {
            id: Number(Math.floor(Math.random() * 1_000_000_000)),
            title: event.target.postTitle.value,
            description: event.target.description.value,
            reactions: Math.floor(Math.random() * 100),
            userId: 'user-' + (Math.floor(Math.random() * 100)),
            tags: [event.target.postTag1.value, event.target.postTag2.value, event.target.postTag3.value]
        }
        const newAction = {
            type: "AddPost",
            payload: {
                post: newObject
            }
        }
        dispatchPostList(newAction);
    }
    const removePost = (id) => {
        const newAction = {
            type: "RemovePost",
            payload: {
                id: id
            }
        }
        dispatchPostList(newAction);
    };
    const postFromServer = (postList) => {
        const newAction = {
            type: "serverPost",
            payload: {
                post: postList
            }
        }
        dispatchPostList(newAction);
    }
    return (
        <PostList.Provider value={{ postList, addPost, removePost, postFromServer }}>
            {children}
        </PostList.Provider>
    );
}
export default PostListProvider;
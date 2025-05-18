import { createContext, useReducer } from "react";

// const POST_LIST = [{ id: '1', title: "Exploring India", body: "This is my first trip to India, which i have been dreaming for a while", reactions: 20, userId: 'user-1', tags: ["vacation", "trip", "India"] },];


const POST_LIST = [

];


// const POST_LIST = [];
// (async () => {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         const jsonData = await response.json();
//         const data = await jsonData.products;
//     } catch (error) {
//         console.log("Error in PostListStore", error);
//     }
// })();

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
        // console.log("Remove Post");
        newPostList = currentPostList.filter((post) => post.id !== action.payload.id);
        // console.log(newPostList);
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
        //     // POST_LIST.filter((post) => post.title !== postTitle);
        // console.log("Post Title", userId);

        const newAction = {
            type: "RemovePost",
            payload: {
                id: id
            }
        }
        dispatchPostList(newAction);
    };
    const postFromServer = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(posts => {
                const newAction = {
                    type: "serverPost",
                    payload: {
                        post: posts.products
                    }
                }
                // console.log(newAction.payLoad.post);
                dispatchPostList(newAction);
            });
    }
    return (
        <PostList.Provider value={{ postList, addPost, removePost, postFromServer }}>
            {children}
        </PostList.Provider>
    );
}
export default PostListProvider;
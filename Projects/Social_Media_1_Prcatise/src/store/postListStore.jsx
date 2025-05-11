import { createContext, useReducer } from "react";

// const POST_LIST = [{ id: '1', title: "Exploring India", body: "This is my first trip to India, which i have been dreaming for a while", reactions: 20, userId: 'user-1', tags: ["vacation", "trip", "India"] },];


const POST_LIST = [
    {
        id: '1',
        title: "Exploring India",
        body: "This is my first trip to India, which I have been dreaming for a while.lorem ipsum dolor sit amet,",
        reactions: 20,
        userId: 'user-1',
        tags: ["vacation", "trip", "India"]
    },
    {
        id: '2',
        title: "Hiking the Alps",
        body: "Climbing the snowy peaks was a dream come true! Nature is absolutely breathtaking.",
        reactions: 35,
        userId: 'user-2',
        tags: ["adventure", "mountains", "travel"]
    },
    {
        id: '3',
        title: "Delicious Homemade Pasta",
        body: "Tried making pasta from scratch today. Totally worth the effort!",
        reactions: 15,
        userId: 'user-3',
        tags: ["food", "cooking", "homemade"]
    },
    {
        id: '4',
        title: "Photography Tips for Beginners",
        body: "Sharing a few simple tips that helped me improve my photography skills.",
        reactions: 22,
        userId: 'user-4',
        tags: ["photography", "tips", "beginners"]
    },
    {
        id: '5',
        title: "Why I Love Reading Sci-Fi",
        body: "Sci-fi opens up a universe of imagination, and I can't get enough of it!",
        reactions: 18,
        userId: 'user-5',
        tags: ["reading", "books", "sci-fi"]
    },
    {
        id: '6',
        title: "Morning Yoga Routine",
        body: "Started a new morning yoga routine. Feeling more energized and peaceful.",
        reactions: 12,
        userId: 'user-6',
        tags: ["health", "yoga", "lifestyle"]
    },
    {
        id: '7',
        title: "Weekend Getaway to the Beach",
        body: "Spent the weekend by the sea, soaking in the sun and waves. Much needed relaxation!",
        reactions: 27,
        userId: 'user-7',
        tags: ["vacation", "beach", "relaxation"]
    },
    {
        id: '8',
        title: "Building My First App",
        body: "Just launched my first mobile app. Excited and nervous about people's reactions!",
        reactions: 40,
        userId: 'user-8',
        tags: ["tech", "coding", "startup"]
    },
    {
        id: '9',
        title: "Best Coffee Shops in Paris",
        body: "If you're a coffee lover visiting Paris, don't miss these amazing cafes!",
        reactions: 30,
        userId: 'user-9',
        tags: ["coffee", "Paris", "travel"]
    },
    {
        id: '10',
        title: "Lessons Learned from Freelancing",
        body: "Freelancing taught me time management and the value of self-discipline.",
        reactions: 25,
        userId: 'user-10',
        tags: ["career", "freelancing", "tips"]
    }
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

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);

const DEFAULT_STATE = { postList: [], addPost: () => { }, removePost: () => { } };

export const PostList = createContext(DEFAULT_STATE);

// Reducer function to manage the state of the post list
const postListReducer = (currentPostList, action) => {
    let newPostList = currentPostList;
    if (action.type === "AddPost") {
        {
            newPostList = [...currentPostList, action.payload.post];
        }
    }
    if (action.type === "RemovePost") {
        // console.log("Remove Post");
        newPostList = currentPostList.filter((post) => post.id != action.payload.id);
        // console.log(newPostList);
    }

    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, POST_LIST);
    // Function to add a post to the list
    const addPost = (event) => {
        let newObject = {
            id: Number(Math.floor(Math.random().toString(36).substr(2, 9))),
            title: event.target.postTitle.value,
            body: event.target.postBody.value,
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
    return (
        <PostList.Provider value={{ postList, addPost, removePost }}>
            {children}
        </PostList.Provider>
    );
}
export default PostListProvider;
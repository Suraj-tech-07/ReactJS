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
        userId: 'user-1',
        tags: ["health", "yoga", "lifestyle"]
    },
    {
        id: '7',
        title: "Weekend Getaway to the Beach",
        body: "Spent the weekend by the sea, soaking in the sun and waves. Much needed relaxation!",
        reactions: 27,
        userId: 'user-2',
        tags: ["vacation", "beach", "relaxation"]
    },
    {
        id: '8',
        title: "Building My First App",
        body: "Just launched my first mobile app. Excited and nervous about people's reactions!",
        reactions: 40,
        userId: 'user-3',
        tags: ["tech", "coding", "startup"]
    },
    {
        id: '9',
        title: "Best Coffee Shops in Paris",
        body: "If you're a coffee lover visiting Paris, don't miss these amazing cafes!",
        reactions: 30,
        userId: 'user-4',
        tags: ["coffee", "Paris", "travel"]
    },
    {
        id: '10',
        title: "Lessons Learned from Freelancing",
        body: "Freelancing taught me time management and the value of self-discipline.",
        reactions: 25,
        userId: 'user-5',
        tags: ["career", "freelancing", "tips"]
    }
];


const DEFAULT_STATE = { postList: [], addPost: () => { }, removePost: () => { } };

export const PostList = createContext(DEFAULT_STATE);

// Reducer function to manage the state of the post list
const postListReducer = (currentPostList, action) => {
    return currentPostList;
}
const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, POST_LIST);
    // Function to add a post to the list
    const addPost = () => {

    }
    const removePost = () => {

        // Logic to remove a post from the list
    };
    return (
        <PostList.Provider value={{ postList, addPost, removePost }}>
            {children}
        </PostList.Provider>
    );
}
export default PostListProvider;
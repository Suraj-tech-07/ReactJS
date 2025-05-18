import { useContext, useState } from "react";
import cardImage from "../assets/logo.jpg";
import Card from "./Card";
import { PostList } from "../store/postListStore";
import NoItem from "./NoItem";
const Post = () => {
    const { postList, postFromServer } = useContext(PostList);

    const [serverPost, setServerPost] = useState(false);

    if (!serverPost) {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(posts => {
                postFromServer(posts.products);
            });
        setServerPost(!serverPost);
    }
    return (
        <div className="container-box" style={{ position: 'relative', left: '300px', top: '0px' }}>
            {postList.length === 0 && <NoItem></NoItem>}
            {postList.map((post) => (<Card key={post.id} post={post} />))};
        </div>
    );
}
export default Post;


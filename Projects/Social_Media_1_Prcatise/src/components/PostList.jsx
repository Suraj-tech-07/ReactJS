import { useContext } from "react";
import cardImage from "../assets/logo.jpg";
import Card from "./Card";
import { PostList } from "../store/postListStore";
import NoItem from "./NoItem";
const Post = () => {
    const { postList, postFromServer } = useContext(PostList);
    return (
        <div className="container-box" style={{ position: 'relative', left: '300px', top: '0px' }}>
            {postList.length === 0 && <NoItem handleOnServerPost={postFromServer}></NoItem>}
            {postList.map((post) => (<Card key={post.id} post={post} />))};
        </div>
    );
}
export default Post;


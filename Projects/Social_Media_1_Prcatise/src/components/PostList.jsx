import { useContext } from "react";
import cardImage from "../assets/logo.jpg";
import Card from "./Card";
import { PostList } from "../store/postListStore";
const Post = () => {
    const { postList } = useContext(PostList);
    return (
        <div className="container-box" style={{ position: 'relative', left: '300px', top: '0px' }}>
            {postList.map((post) => (<Card key={post.id} post={post} />))};
        </div>
    );
}
export default Post;


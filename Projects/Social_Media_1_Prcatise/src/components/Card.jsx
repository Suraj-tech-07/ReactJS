import cardImage from "../assets/india-pollachi-village-coconut-trees.jpg";
import { FaUser } from "react-icons/fa";
import '../../src/App.css';
import { PostList } from "../store/postListStore";
import { useContext } from "react";
const Card = ({ post }) => {
    const { removePost } = useContext(PostList);
    const handleOnClick = (userId) => {
        console.log(userId);
        removePost(userId);
    };
    return (
        <>
            <div className="main">
                <img src={cardImage} />
                <h2 className="title" >{post.title} </h2>
                <strong className="userId"><FaUser /> {post.userId}</strong>
                <p className="content">{post.body}</p>
                <div className="hashTags d-flex gap-3" >
                    {post.tags.map((tag, index) => (
                        <span key={index} className="hashTag badge text-bg-success">{tag}</span>
                    ))}

                </div>
                <span className="reactions">😂{post.reactions}</span>
                <div className="btns d-flex justify-content-center gap-4 mt-3">
                    <button className="btn btn-primary">Explore</button>
                    <button className="btn btn-danger deletePost" onClick={() => { handleOnClick(post.id) }}>Delete</button>
                </div>
            </div>
        </>
    );
}
export default Card;
import cardImage from "../assets/india-pollachi-village-coconut-trees.jpg";
import { FaUser } from "react-icons/fa";
import '../../src/App.css';
const Card = ({ post }) => {
    return (
        <>
            <div class="main">
                <img src={cardImage} />
                <h2 class="title">{post.title} </h2>
                <strong class="userId"><FaUser /></strong>
                <p class="content">{post.body}</p>
                <div class="hashTags d-flex gap-3" >
                    {post.tags.map((tag, index) => (
                        <span key={index} class="hashTag">{tag}</span>
                    ))}

                </div>
                <span class="reactions">😂{post.reactions}</span>
                <button className="btn btn-primary">Explore</button>
            </div>
        </>
    );
}
export default Card;
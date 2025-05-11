import '../App.css';
import { PostList } from '../store/postListStore';
import { useContext } from 'react';
const UserForm = () => {

    const { addPost } = useContext(PostList);
    const handleOnSumit = (event) => {
        event.preventDefault();
        addPost(event);
        event.target.postTitle.value = "";
        event.target.postBody.value = "";
        event.target.postTag1.value = "";
        event.target.postTag2.value = "";
        event.target.postTag3.value = "";
    }

    return (
        <form className="container userFormData  userFormData" style={{ width: '400px' }} onSubmit={handleOnSumit}>
            <div className="postTitle">
                <input type="text" name="postTitle" id="postTitle" placeholder="Enter your post title" />
            </div>
            <div className="postBody">
                <input type="text" name="postBody" id="postBody" placeholder="Enter your post body" />
            </div>
            <div className="postTags">
                <label > Please Enter at least three #tags for your post </label>
                <input type="text" name="postTag1" id="postTag1" />
                <input type="text" name="postTag2" id="postTags2" />
                <input type="text" name="postTag3" id="postTag3" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    )
}
export default UserForm;
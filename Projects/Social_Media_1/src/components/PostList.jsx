import Card from "./Card";
import styles from "../css/PostList.module.css";
const PostList = () => {
    return <div className={`${styles.postlistContainer}`}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
}
export default PostList;
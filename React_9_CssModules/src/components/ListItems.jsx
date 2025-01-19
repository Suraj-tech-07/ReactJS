import Item from "./ItemNames";
import styles from "../components/ListItems.module.css";
var ParentList = (props) => {
    var PlayersName = props.players;
    return <>
        <ul className={styles.ulClass}>
            {
                PlayersName.map((a) => (
                    <Item showName={a} key={a}></Item>
                ))
            }
        </ul>
    </>
}
export default ParentList;



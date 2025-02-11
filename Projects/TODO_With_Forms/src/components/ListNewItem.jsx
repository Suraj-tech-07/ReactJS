import styles from './ListNewItems.module.css'
import Container from "./Container"
import { MdDelete } from "react-icons/md";
const ListNewItems = ({ items, onRemoveItem }) => {

    const handleOnClicked = (clickedName) => {
        onRemoveItem(clickedName);
        // console.log("Deleted item: ", clickedName);

    }

    return <>
        {
            items.map((todos, index) => (
                <div className={styles.listItem} key={index}>
                    <input type="text" name="todoname" id="todoname" className="" disabled value={todos.name} />
                    <input type="text" name="tododate" id="tododate" className="" disabled value={todos.date} />
                    <button className="btn btn-danger" onClick={() => handleOnClicked(todos.name)}> <MdDelete /> </button>
                </div >
            ))
        }
    </>
}
export default ListNewItems;
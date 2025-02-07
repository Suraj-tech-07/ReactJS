import styles from './ListNewItems.module.css'
import Container from "./Container"
const ListNewItems = ({ items }) => {
    // console.log("Reached");
    // items.map((i) => {
    //     console.log(i.name, i.date);
    // })
    return <>
        {
            items.map((todos, index) => (
                <div className={styles.listItem} key={index}>
                    <input type="text" name="todoname" id="todoname" className="" disabled value={todos.name} />
                    <input type="text" name="tododate" id="tododate" className="" disabled value={todos.date} />
                    <button className="btn btn-danger">Add</button>
                </div>
            ))
        }
    </>
}
export default ListNewItems;
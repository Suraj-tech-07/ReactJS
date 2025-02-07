import styles from './AddNewItem.module.css';
const AddNewItem = () => {

    return <>
        <div className={styles.addContainer}>
            <input type="text" name="todoname" id="todoname" className="" />
            <input type="date" name="tododate" id="tododate" className="" />
            <button className="btn btn-success">Add</button>
        </div>
    </>
}
export default AddNewItem;


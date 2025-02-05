import InputItem from "./Todo_Input_Items";
import styles from './Todo_Items.module.css';
const TodoItem = ({ itemCompleteDate, itemValue }) => {


    return <>
        <div className={`container text-center`}>
            <div className="row ">
                <div className="col-6 ">
                    <span className={styles.itemName}>{itemValue} </span>
                </div>
                <div className={`col`}>
                    <div className="col-6 ">
                        <span className={styles.itemDate}>{itemCompleteDate}</span>
                    </div>
                </div>
                <div className="col ">
                    <button type="button" className="btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        </div >
    </>
}
export default TodoItem;
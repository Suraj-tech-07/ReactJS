import { useState } from 'react';
import styles from './AddNewItem.module.css';
const AddNewItem = ({ onNewItem }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleOnClick = () => {
        if (name !== "" && date !== "") {
            onNewItem(name, date);
            setName("");
            setDate("");
        } else {
            alert("Please Enter the Item and Date");
        }
    }
    return <>
        <div className={styles.addContainer}>
            <input type="text" name="todoname" id="todoname" value={name} className="" onChange={onNameChange} />
            <input type="date" name="tododate" id="tododate" value={date} className="" onChange={onDateChange} />
            <button className="btn btn-success" onClick={handleOnClick}>Add</button>
        </div>
    </>
}
export default AddNewItem;


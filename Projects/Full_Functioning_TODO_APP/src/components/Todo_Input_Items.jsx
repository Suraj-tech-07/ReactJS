import styles from './Todo_Input.module.css';
const InputItem = ({ handleOnNameChange, handleOnDateChange, handleOnClick }) => {
    return <>
        <div className={`container text-center ${styles.inputConatiner}`}>
            <div className="row ">
                <div className="col-6 ">
                    <input type="text" name="todo_name" id="todo_name" className={`${styles.nameStyling}`} onChange={handleOnNameChange} />
                </div>
                <div className={`col`}>
                    <input type="date" name="todo_date" id="todo_date" className={`${styles.dateStyling}`} onChange={handleOnDateChange} />
                </div>
                <div className="col ">
                    <button type="button" className="btn btn-success" onClick={handleOnClick}>
                        Add
                    </button>

                </div>
            </div>
        </div >
    </>
}
export default InputItem;
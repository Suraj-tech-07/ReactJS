import styles from "./inputBox.module.css";
const InputBox = ({ calculate, handleOnChange }) => {
    return <>
        <input type="text" name="texts" id="inputBox" className={styles.inputBox} value={calculate} readOnly />
    </>
}
export default InputBox;
import styles from "./inputBox.module.css";
const InputBox = () => {
    return <>
        <input type="text" name="texts" id="inputBox" className={styles.inputBox} />
    </>
}
export default InputBox;
import style from "./buttons.module.css";
const Keys = ({ buttonsText, hondleOnClick }) => {
    // var buttonItem = props.buttonsText;
    return <div className={style.buttonsParent}>
        {
            buttonsText.map((item) => (
                <input type="button" key={item} onClick={() => hondleOnClick(item)} value={item}></input>
            ))
        }
    </div>
}
export default Keys;
import style from "./buttons.module.css";
const Keys = (props) => {
    // var buttonItem = props.buttonsText;
    return <div className={style.buttonsParent}>
        {
            (props.buttonsText).map((item) => (
                <button key={item}>{item}</button>
            ))
        }
    </div>
}
export default Keys;
import style from "./buttons.module.css";
const Buttons = (props) => {
    const buttonItem = props.buttonsText;
    return
    <div className={style.buttonsParent}>
        {/* {
            buttonItem.map((item) => {
                <button>{item}</button>
            })
        } */}
        <button>Press</button>
    </div>
}
export default Buttons;
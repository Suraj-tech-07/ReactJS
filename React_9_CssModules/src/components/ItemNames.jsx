import image from "../assets/Dhoni.jpg";
import style from "../components/ItemNames.module.css";
const Item = (props) => {
    return <>
        <li>
            <b>
                {props.showName}
            </b>
            <img src={image} alt="" className={style.profileImage} />
        </li>
    </>
};
export default Item;
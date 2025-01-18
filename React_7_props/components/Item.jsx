var Item = (props) => {
    return <>
        <li className="list-group-item">{props.arg} with Popularity <b>{Math.floor((Math.random() * 10) % 10)}</b> out Of <b>10</b></li>
    </>
}
export default Item;
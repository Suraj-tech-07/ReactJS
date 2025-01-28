import style from './ListItem.module.css';
const ListItems = (props) => {
    const list = props.itemsName;
    return <>
        <ul className={`${style.ul_List} list-group`} >
            {
                list.map((item) => (
                    <li key="item" className={`list-group-item`}>{item}</li>
                ))
            }
        </ul >
    </>
}
export default ListItems;
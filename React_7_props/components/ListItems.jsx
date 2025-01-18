import Item from "./Item";
var List = (props) => {
    return <>
        <ul className="list-group" >
            {
                // console.log(props.langs)
                (props.langs).map((item) => (
                    <Item arg={item} key={item}></Item>
                ))
            }
        </ul >
    </>
};
export default List;
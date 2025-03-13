import { useContext } from "react";
import { ItemsStore } from "../store/items_context";
const Title = () => {
    const { todoTitle } = useContext(ItemsStore);
    return <h1 className="text-center">
        {todoTitle.title}
    </h1>
}
export default Title;
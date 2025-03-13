import { useContext } from 'react';
import { ItemsStore } from '../store/items_context';
const NoItemMessage = () => {
    const { noItem } = useContext(ItemsStore);
    const { todoItems } = useContext(ItemsStore);
    return <h3 className="text-center">
        {todoItems.length === 0 && noItem.title}
    </h3>
}
export default NoItemMessage;
import { useReducer } from "react";
import { createContext } from "react";
export const ItemsStore = createContext([], function () { }, function () { }, {}, {});


const todoItemsReducer = (currentTodoItem, action) => {
    let newTodoItems = currentTodoItem;
    console.log(action.payload.name);
    console.log(action.payload.date);

    if (action.type === "NEW_ITEM") {
        newTodoItems = [...currentTodoItem, { name: action.payload.name, date: action.payload.date },];
        console.log(newTodoItems);
    } else if (action.type === "REMOVE_ITEM") {
        newTodoItems = currentTodoItem.filter((item) => item.name !== action.payload.name);
    }
    return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
    const Items = [
        { name: "Item 1", date: "2021-10-01" },
        { name: "Item 2", date: "2021-10-02" },
        { name: "Item 3", date: "2021-10-03" },
    ];
    const todoTitle = {
        title: "Daily Todo App"
    };
    const noItem = {
        title: "There is Nothing todo"
    };
    const [todoItems, dispatchTodoItem] = useReducer(todoItemsReducer, Items);


    const onNewItem = (itemName, itemDate) => {

        const newAction = {
            type: "NEW_ITEM",
            payload: {
                name: itemName,
                date: itemDate
            }
        };
        dispatchTodoItem(newAction);
    };

    const onRemoveItem = (itemName) => {
        const newAction = {
            type: "REMOVE_ITEM",
            payload: {
                name: itemName
            }
        };
        dispatchTodoItem(newAction);
    }

    return (
        <ItemsStore.Provider value={{ todoItems, onRemoveItem, onNewItem, todoTitle, noItem }}>
            {children}
        </ItemsStore.Provider >
    );
}
export default TodoItemContextProvider;
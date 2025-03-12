import styles from './components/App.module.css';
import Title from './components/TodoTitle';
import AddNewItem from './components/TodoAddNewItem';
import Container from './components/Container';
import NoItemMessage from './components/NoItemMessage.jsx';
import ListNewItems from './components/ListNewItem.jsx';
import { ItemsStore } from './store/items_context.jsx';
import { useState } from 'react';
import './index.css';
const App = () => {
  const todoTitle = {
    title: "Daily Todo App"
  };
  const noItem = {
    title: "There is Nothing todo"
  };
  const Items = [
    { name: "Buy Books", date: "10/12/2025" },
    { name: "Buy Clothes", date: "10/12/2026" },
    { name: "Buy Merchandise", date: "10/12/2027" },
  ];

  const [todoItems, setTodoItems] = useState(Items);

  const onNewItem = (itemName, itemDate) => {
    console.log(`New Items are : ${itemName} Date : ${itemDate}`);
    const newObj = [...todoItems, { name: itemName, date: itemDate },];
    setTodoItems(newObj);
    console.log(todoItems);
  }

  const onRemoveItem = (itemName) => {
    console.log(`Item Deleted ${itemName}`);
    const newObj = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newObj);
  }

  return <>
    <ItemsStore.Provider value={{ todoItems, onRemoveItem, onNewItem, noItem, todoTitle }}>
      <Container className='appContainer'>
        <Title ></Title>
        <AddNewItem></AddNewItem>        {
          <NoItemMessage ></NoItemMessage>
        }
        <Container className='listContainer'>
          <ListNewItems ></ListNewItems>
        </Container>
      </Container>
    </ItemsStore.Provider >
  </>
}
export default App;
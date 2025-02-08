import styles from './components/App.module.css';
import Title from './components/TodoTitle';
import AddNewItem from './components/TodoAddNewItem';
import Container from './components/Container';
import NoItemMessage from './components/NoItemMessage.jsx';
import ListNewItems from './components/ListNewItem.jsx';
import { useState } from 'react';
const App = () => {
  const todoTitle = "Daily Todo App";
  const noItem = "There is Nothing todo";
  const Items = [
    { name: "Buy Books", date: "10/12/2025" },
    { name: "Buy Clothes", date: "10/12/2026" },
    { name: "Buy Merchandise", date: "10/12/2027" },
  ];

  const [todoItems, setTodoItems] = useState(Items);

  // const [itemDate, setItemDate] = useState();
  // const [itemName, setItemName] = useState();

  const onNewItem = (itemName, itemDate) => {
    console.log(`New Items are : ${itemName} Date : ${itemDate}`);
    setTodoItems({ name: itemName, date: itemDate });
    console.log(todoItems);

  }

  return <>
    <Container className={styles.appContainer}>
      <Title title={todoTitle}></Title>
      <AddNewItem onNewItem={onNewItem}></AddNewItem>
      {
        Items.length === 0 && <NoItemMessage noItem={noItem}></NoItemMessage>
      }
      <Container className={styles.listContainer}>
        <ListNewItems items={Items} ></ListNewItems>
      </Container>
    </Container>
  </>
}
export default App;
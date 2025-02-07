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
  // const Items = [
  //   { name: "Buy Books", date: "10/12/2025" },
  //   { name: "Buy Clothes", date: "10/12/2026" },
  //   { name: "Buy Merchandise", date: "10/12/2027" },
  // ];

  const [item, setItem] = useState();
  // const [itemDate, setItemDate] = useState();

  return <>
    <Container className={styles.appContainer}>
      <Title title={todoTitle}></Title>
      <AddNewItem></AddNewItem>
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
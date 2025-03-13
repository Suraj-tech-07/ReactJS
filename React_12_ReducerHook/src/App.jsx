import styles from './components/App.module.css';
import Title from './components/TodoTitle.jsx';
import AddNewItem from './components/TodoAddNewItem.jsx';
import Container from './components/Container.jsx';
import NoItemMessage from './components/NoItemMessage.jsx';
import ListNewItems from './components/ListNewItem.jsx';
import { ItemsStore } from './store/items_context.jsx';
import { useState, useReducer } from 'react';
import TodoItemContextProvider from './store/items_context.jsx';
import './index.css';
const App = () => {

  return <>
    <TodoItemContextProvider>
      <Container className='appContainer'>
        <Title ></Title>
        <AddNewItem></AddNewItem>        {
          <NoItemMessage ></NoItemMessage>
        }
        <Container className='listContainer'>
          <ListNewItems ></ListNewItems>
        </Container>
      </Container>
    </TodoItemContextProvider>
  </>
}
export default App;
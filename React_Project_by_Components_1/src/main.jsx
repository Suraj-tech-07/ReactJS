import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppName from './components/TodoName'
import TodoItem from './components/TodoItem'
import TodoItemMilk from './components/TodoItem_Milk'
import TodoItemCollege from './components/TodoItem_College'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <center>
  <AppName/>
  <TodoItem/>
  <TodoItemMilk/>
  <TodoItemCollege/>
  </center>
  </StrictMode>,
)

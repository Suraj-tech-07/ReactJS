import TodoName from "./components/TodoName";
import TodoEntry from "./components/TodoEntry";
import ItemMilk from "./components/TodoItemMilk";
import ItemCollege from "./components/TodoItemCollege";
import './index.css'
const App=()=>{
  return <center className="container-md d-flex flex-column gap-4 fw-bold">
    <TodoName />
    <TodoEntry />
    <ItemMilk />
    <ItemCollege/>
  </center>
}

export default App;
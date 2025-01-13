import TodoTitle from "./TodoTitle";
import TodoEntry from "./TodoEntry";
import TodoItems1 from "./TodoItem1";
import TodoItems2 from "./TodoItem2";
import './Todo.css';
function App() {
  return <div className="main">
    <TodoTitle></TodoTitle>
    <TodoEntry></TodoEntry>
    <TodoItems1></TodoItems1>
    <TodoItems2></TodoItems2>
  </div>
}
export default App;
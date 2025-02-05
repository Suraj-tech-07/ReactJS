import Heading from "./components/Todo_Heading";
import InputItem from "./components/Todo_Input_Items";
import './App.css';
import TodoItem from "./components/Todo_Items";
const App = () => {
  const Title = "Daily TODO APP";
  var itemCompleteDate;
  var itemValue;
  const handleOnNameChange = (event) => {
    itemValue = event.target.value;
    console.log(itemValue);

  }
  const handleOnDateChange = (event) => {
    itemCompleteDate = event.target.value;
    console.log(itemCompleteDate);

  }
  return <>
    <div className="todoContainer">
      <Heading Title={Title}></Heading>
      <InputItem handleOnDateChange={handleOnDateChange} handleOnNameChange={handleOnNameChange}></InputItem>
      <TodoItem itemCompleteDate={itemCompleteDate} itemValue={itemValue}></TodoItem>
    </div>
  </>
}
export default App;
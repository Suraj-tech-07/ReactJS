import './App.css';
import Title from "./ClockTitle";
import Moto from "./ClockMoto";
import Time from "./ClockTime";
var App = () => {
  return <div className="app">
    <Title></Title>
    <Moto></Moto>
    <Time></Time>
  </div>
}
export default App;
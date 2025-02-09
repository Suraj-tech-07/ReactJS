import './App.css';
import Title from "./ClockTitle";
import Moto from "./ClockMoto";
import Time from "./ClockTime";
import { useState } from 'react';
var App = () => {

  const time = Date();
  const actualTime = time.replace("GMT+0530 (India Standard Time)", "");

  const [passTime, setPassTime] = useState(actualTime);

  const UpadteTime = (newTime) => {
    setPassTime(newTime);
  }
  return <div className="app">
    <Title></Title>
    <Moto></Moto>
    <Time timeToShow={passTime} UpadteTime={UpadteTime}></Time>
  </div>
}
export default App;
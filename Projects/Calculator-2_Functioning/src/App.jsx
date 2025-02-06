import style from "./components/App.module.css";
import InputBox from "./components/inputBox";
import Keys from './components/Buttons';
import { useState } from "react";
const App = () => {
  const buttonsText = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "●", "9", "0", "="];
  let [calculate, calculateFunction] = useState("");
  const hondleOnClick = (item) => {
    console.log(item + " clicked");
    if (item === 'C') {
      calculate = "";
    }
    else if (item === '=') {
      calculate = eval(calculate);
      console.log("calculating");
    }
    else if (item === '●') {
      item = ".";
      calculate = calculate + item
    }
    else {
      calculate = calculate + item;
    }

    calculateFunction(calculate);
  }

  return <div className={style.main}>
    <InputBox calculate={calculate}></InputBox>
    <Keys buttonsText={buttonsText} hondleOnClick={hondleOnClick}></Keys>
  </div>
}
export default App;
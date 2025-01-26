import style from "./components/App.module.css";
import InputBox from "./components/inputBox";
import Buttons from './components/Buttons';
const App = () => {
  const buttonsText = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return <div className={style.main}>
    <InputBox></InputBox>
    <Buttons textOptions={buttonsText}></Buttons>
  </div>
}
export default App;
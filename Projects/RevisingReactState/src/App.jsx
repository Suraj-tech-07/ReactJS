// Date: 03/18/2021
// Name: Suraj Kumar Singh 
import './App.css'
import OuterBox from './components/OuterBox'
import { useState } from 'react'
function App() {
  let [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <OuterBox handleOnClick={handleOnClick} Clickcount={count}></OuterBox>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form_useRef'
import ShowDetails from './components/ShowDetails.'
function App() {

  const [data, setData] = useState([]); // This is the state that will store the form data
  const formValues = (mail, password, checkBoxValue) => {
    // console.log(checkBoxValue);
    const newData = [...data, {
      mail: mail,
      password: password,
      checkBoxValue: checkBoxValue
    }];
    setData(newData);
    // console.log(newData);

  }

  return (
    <>
      <Form formValues={formValues}></Form>
      <ShowDetails details={data}></ShowDetails>
    </>
  )
}

export default App

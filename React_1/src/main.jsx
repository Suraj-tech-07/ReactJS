import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Button.jsx'; 
import Button from './Button.jsx';
import { Italic } from './Italic_Font.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /><br />
    <Button></Button><br />
    <Italic></Italic><br />
  </React.StrictMode>,
)

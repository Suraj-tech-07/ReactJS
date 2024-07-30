import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './HeadPart.jsx'
import Hello from './DynamicContent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header></Header>
   <Hello></Hello>
  </React.StrictMode>,
)

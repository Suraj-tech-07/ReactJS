import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './Body.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Body></Body>
    <Header></Header>
  </StrictMode>,
)

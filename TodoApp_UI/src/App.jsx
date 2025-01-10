import { useState } from 'react'
import './App.css'

function App() {
  const fisrtProduct="Buy Milk";
  const fisrtProductDate="10/12/2024";
  const secondProduct="Go to College";
  const secondProductDate="08/06/2024";
return <div className='top'>
  <div className="main">
    <h1 className="heading">Todo App</h1>
    <div className="input-date">
      <input type="text" placeholder='Enter Todo here' name='Todo'/>
      <input type="date" name="dateTime" id="" />
      <button type="button" class="btn btn-success">Add</button>
    </div>
    <div className="product1 product">
      <p className="productName">{fisrtProduct}</p>
      <p className="productDate">{fisrtProductDate}</p>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
    <div className="product2 product">
      <p className="productName">{secondProduct}</p>
      <p className="productDate">{secondProductDate}</p>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>

  </div>
</div>
}

export default App;

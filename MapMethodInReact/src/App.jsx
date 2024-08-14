const App=()=>{
  const foodList=["Chawal","Dal","Vegetables","Salad","Water"]
  return <>
  <h1>Food List</h1>
  <ul className="list-group">
  {
  foodList.map((item)=>(
  <li className="list-group-item">
        {item}
      </li>
    ))} 
</ul>
  </>
}
export default App;
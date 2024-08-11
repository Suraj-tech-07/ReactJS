function TodoContainer(){
return <center className='todo-container'>
    <h1 className="todo-heading">Todo App</h1>
    <div className="container text-center">
  <div className="row">
    <div className="col-6">

<input type="text" name="item" id="item" placeholder="Enter Todo Here"/>
    </div>
    <div className="col-4">
        <input type="date" name="date-time" id="date-time" />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success">Add</button>
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col-6">
    Buy Milk 
    </div>
    <div className="col-4">
    11/08/2024
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger">delete</button>
    </div>
  </div>
</div>
<div className="container text-center">
  <div className="row">
    <div className="col-6">
    Go to College
    </div>
    <div className="col-4">
    12/08/2024
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger">delete</button>
    </div>
  </div>
</div>

</center>
}
export default TodoContainer;
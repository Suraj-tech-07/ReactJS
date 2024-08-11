function TodoItem(){
    return <div className="container text-center">
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
}
export default TodoItem;
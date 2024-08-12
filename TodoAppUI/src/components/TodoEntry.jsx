const TodoEntry=()=>{
    return <div class="container text-center">
    
    <div class="row">
      <div class="col-6 border-1">
      <input type="text" name="todo-entry" id="todo-entry" placeholder="Enter Todo Item Here"/>
      </div>
      <div class="col-4 border-1"><input type="date" name="todo-date" id="todo-date" />
      </div>
      <div class="col-2 border-1">
        <button className="btn btn-success">Add</button>
      </div>
    </div>
  </div>
}
export default TodoEntry;
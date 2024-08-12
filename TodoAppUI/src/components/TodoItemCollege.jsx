const ItemCollege=()=>{
    const itemName="College";
    const itemDate="12/08/2024"
    return <div class="container text-center">
    
    <div class="row">
      <div class="col-6 border-1 todo-item">
        {itemName}
      </div>
      <div class="col-4 border-1 todo-item">
      {itemDate}
      </div>
      <div class="col-2 border-1">
        <button className="btn btn-danger">delete</button>
      </div>
    </div>
  </div>
}
export default ItemCollege;
import './Todo.css';
const TodoEntry = () => {
    return <div>
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-4"><input type="text" name="entryName" id="entry" placeholder="Enter Todo Item" /></div>
                <div class="col-sm-4"><input type="datetime-local" name="date" id="date" /></div>
                <div class="col-sm-2"><button type="button" class="btn btn-success">Add</button></div>
            </div>
        </div>
    </div>
}
export default TodoEntry;
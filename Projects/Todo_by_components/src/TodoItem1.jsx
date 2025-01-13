import './Todo.css';
const TodoItems1 = () => {

    return <div>
        <div class="container text-center">
            <div class="row">
                <div class="col-sm-4">
                    <span>Buy Copies</span>
                </div>
                <div class="col-sm-4">
                    <span>10/01/2096</span>
                </div>
                <div class="col-sm-2">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
}
export default TodoItems1;
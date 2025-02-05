const App = () => {
    var i = 1;
    const func1 = () => {
        console.log(i);
        i++;
        alert("Clicked");
    }
    return <>
        <button onClick={func1}> Click Me </button>
    </>
}
export default App;
import './Body.css';
const Body=()=>{
    let randomNumber=()=>{
        return Math.floor(Math.random()*70)+1;
    }
    let myName="Suraj Singh";
    return <h1 style={{"background":"cyan"}}>
        Hello i am {myName} the dveloper of this page;<br />
        This is my Serial Number {randomNumber()}
    </h1>
}
export default Body;
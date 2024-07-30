const Component=()=>{
    
    const randomNumber=Math.floor(Math.random()*100);
    return <h1 style={{'background':'cyan'}}>
        Random Number is {randomNumber}
    </h1>
}
export default Component;
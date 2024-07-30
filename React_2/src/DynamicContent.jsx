const Hello=()=>{
    
    let name='Suraj';// This is a normal JS variable declaration
    const fullName=()=>{
        return "I am a Software engineer";
    }
    return <h3>
        Hello this is <i>{name} and {fullName()}</i>
    </h3>
}
export default Hello;

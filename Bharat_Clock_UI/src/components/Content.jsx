const AppContent=()=>{
    const Appdate=new Date();
    return <p>
        The Current Date is <b>{Appdate.toLocaleDateString()}</b> and Time  is <b>
            {Appdate.toLocaleTimeString()}</b> 
    </p>
}
export default AppContent;
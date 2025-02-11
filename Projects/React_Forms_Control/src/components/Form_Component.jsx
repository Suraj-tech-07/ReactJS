
const Form_Component = () => {

    return <>
        <form action="">
            <div className="Names">
                <label>Enter Names : </label>
                <div className="innerDivForName">
                    <input type="text" name="Firstname" placeholder="First Name" />
                    <input type="text" name="Lastname" placeholder="Last Name" />
                </div>
            </div>
            <div className="ageContainer">
                <label>Age : </label>
                <input type="number" name="Age" placeholder="Age" />
            </div>
            <div className="address">
                <label>Address : </label>
                <textarea name="address" id="address" maxLength={60}></textarea>
            </div>
            <div className="Email">
                <label>Email : </label>
                <input type="email" name="Email" placeholder="Email" />
            </div>

        </form>
    </>
}

export default Form_Component;
import React, { useState } from 'react'
// ( OLD WAY )
// user form function
// const Form = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

// new way to use State ( less code ) to make a person object
const Form = () => {
        // getter, setter  
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    // store instances of person objects in array
    const [personList, setPersonList] = useState([])

    // ( VALIDATION )
    // This validator will prevent the form data from being submitted if there are errors
    const userValidation = (e) => {
        let isValid = true
        if (person.firstName.length === 0){
            isValid = false
            console.log("first name must not be blank")
            return isValid
        }
        if (person.firstName.length < 2){
            isValid = false
            console.log("first name must be more than 2 characters")
            return isValid
        }
        if (person.lastName.length === 0){
            isValid = false
            console.log("last name must not be blank")
            return isValid
        }
        if (person.lastName.length < 2){
            isValid = false
            console.log("last name must be more than 2 characters")
            return isValid
        }
        if (person.email.length < 5){
            isValid = false
            console.log("email must be more than 2 characters")
            return isValid
        }
        if (person.password.length === 0){
            isValid = false
            console.log("password must not be blank")
            return isValid
        }
        if (person.password.length < 8){
            isValid = false
            console.log("password must be more than 2 characters")
            return isValid
        }
        if (person.password !== person.confirmPassword){
            isValid = false
            console.log("passwords do not match")
            return isValid
        }
        else{
            console.log("No errors, All data is valid!")
            return isValid
        }

    }
    // target and update the user input to the values of the key pairs
    // targets the particular name in our input tags associated with the value
    const onChangeHandler = (e) => {
        setPerson({...person, [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        // prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        if(userValidation()){
            console.log(`Form: ${JSON.stringify(person)}`)
            // pulls data from personList and person object attributes are applied to a index
            setPersonList([...personList, person])
            // clears form after submit
            setPerson({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        }
    }
    return (
        <div>
            <form action="" className="form col-md-4 mx-auto" onSubmit={ submitHandler }>
                {/*  First Name  */}
                <div className="mb-3">
                    {
                        //validation
                        person.firstName && person.firstName.length < 2 ? <p className='text-danger'>First Name must be at least 2 characters long.</p> : null
                    }
                    <label htmlFor='' className="form-label">First Name:</label>
                    <input type="text" name="firstName" className="form-control" onChange={onChangeHandler} value = {person.firstName} />
                </div>
                {/* <!-- Last Name --> */}
                <div className="mb-3">
                    {
                        //validation
                        person.lastName && person.lastName.length < 2  ? <p className='text-danger'>Last Name must be at least 2 characters long.</p> : null
                    }
                    <label  htmlFor='' className="form-label">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" onChange={onChangeHandler} value = {person.lastName} />
                </div>
                {/* <!-- Email --> */}
                <div className="mb-3">
                {
                        //validation
                        person.email && person.email.length < 5 ? <p className='text-danger'>Email must be at least 5 characters long.</p> : null
                    }
                    <label  htmlFor='' className="form-label">Email:</label>
                    <input type="email" name="email" className="form-control" onChange={onChangeHandler} value = {person.email} />
                </div>
                {/* <!-- Password --> */}
                <div className="mb-3">
                    {
                        //validation
                        person.password && person.password.length < 8 ? <p className='text-danger'>Password must be at least 8 characters long.</p> : null
                    }
                    <label  htmlFor='' className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={onChangeHandler} value = {person.password} />
                </div>
                {/* <!-- Confirm Password --> */}
                <div className="mb-3">
                    {
                        //validation
                        person.password !== person.confirmPassword  ? <p className='text-danger'>Passwords do not match.</p> : null
                    }
                    <label  htmlFor='' className="form-label">confirm Password:</label>
                    <input type="password" name="confirmPassword" className="form-control"  onChange={onChangeHandler} value = {person.confirmPassword} />
                </div>
                {/* <!-- Register button --> */}
                <input type="submit" value="Submit"/>
            </form>

            <div className='col-4 offset-4 mt-3'>
                {
                    // print form data to screen
                    //interate through personList(array) and apply the person object attributes to each iteration
                    personList.map((person, i) =>(
                            <div className='card' key={i}>
                                <div className='carbody'>
                                <h1 className='card-title'>Name: { person.firstName } { person.lastName }</h1>
                                <p className='card-text'>Email: {person.email}</p>
                                <p className='card-text'>Password: {person.password}</p>
                                <p className='card-text'>Confirm Password: {person.confirmPassword}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Form
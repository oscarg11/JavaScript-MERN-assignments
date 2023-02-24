import React from "react";

const Display = ({personList}) => {

    //const {personList} = props

    return (
        <div>
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

export default Display
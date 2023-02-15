import React, { useState } from 'react'
// this function accepts props (prarameters) that can be reused for different instances of PersonCard
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
            //getter, setter
    const [ personAge, setPersonAge ] = useState(age);
    // add age function
    const addAge = () => {
        setPersonAge(personAge + 1)
    }
    return (
        <div>
            <h1>{lastName}, { firstName }</h1>
            <p>age: { personAge }</p>
            <p>Hair Color: { hairColor }</p>
            {/* increases the persons age by 1 */}
            <button onClick={addAge}>Birday Button for {firstName} {lastName}</button>

            {/* another way without using the addAge method */}
            {/* <button onClick={(event) => setPersonAge(personAge +1)}>Birday Button for {firstName} {lastName}</button> */}
        </div>
    )
}
export default PersonCard;
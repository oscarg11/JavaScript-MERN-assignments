import React from 'react'
// this function accepts props (prarameters) that can be reused for different instances of PersonCard
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return (
        <div>
            <h1>{lastName}, { firstName }</h1>
            <p>age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </div>
    )
}
export default PersonCard;
import React, { useState } from "react";
// const boxStyle = {
//     display: "inline-block",
//     height: "200px",
//     width: "200px",
//     border: "2px solid black",
//     backgroundColor: "box.boxColor"
// };
// box object function
const BoxGen = ({ boxList, setBoxList}) => {
    const [box, setBox] = useState({
        boxColor: ""
    })

    // targets and updates box attributes based on what key the user changes on the form
    const onChangeHandler = (e) => {
        setBox({...box, [e.target.name]: e.target.value})
    }

    const onSubmitHandler = (e) => {
        // prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        console.log(`BoxGen: ${JSON.stringify(box)}`)
        // add to our box list with all box attribute changes applied( just the color for now)
        setBoxList([...boxList, box])
    }
    return (
        <div>
            <form action="" className="form col-md-4 mx-auto" onSubmit={ onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Type any Color:</label>
                    <input type="text" name="boxColor" className="form-control" onChange={ onChangeHandler} value={ box.boxColor }/>
                    {/* button */}
                    <button className="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default BoxGen

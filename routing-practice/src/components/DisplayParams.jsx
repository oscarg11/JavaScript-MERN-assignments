import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayParams = () => {
    const { numOrword, color, backgroundCol } = useParams();
    return(
        <div>
          {/* ternary operator to check if numOrword is a word or number */}
          {/* if true word is printed  */}

          {
            isNaN(numOrword)?
            // (Ternary operator for conditional styling)
            //styles are applied only if color and backgroundCol are also inputs 
            <p style={
              color?
              {color: color, backgroundColor: backgroundCol, fontSize: "2.5em"}
              :null
            }>
              The word is : { numOrword }
            </p>
          // if numOrWord is a number then... 
          :
          <p>The number is: { numOrword }</p>
        }
        </div>
      )
}

export default DisplayParams
import React from 'react'
import { useParams } from 'react-router-dom'

const DisplayParams = (props) => {
    const { numOrword, color, backgroundCol } = useParams();
    return(
        <div>
          {
            isNaN(numOrword)?
            <p style={
              color?
              {color: color, backgroundColor: backgroundCol, fontSize: "2.5em"}
              :null
            }>
              The word is : { numOrword }
            </p>
          // if numOrWord is a number then 
          :
          <p>
            The number is { numOrword }
          </p>
        }
        </div>
      )
}

export default DisplayParams
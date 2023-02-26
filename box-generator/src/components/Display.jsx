import React from 'react'

function Display({ boxList }) {
  return (
    <div>
        {/* dispaly boxes */}
        <div>
        {
            boxList.map((box, i) => (
                <div key={i} style={{
                    display: "inline-block",
                    height: "200px",
                    width: "200px",
                    margin: "5px",
                    border: "2px solid black",
                    backgroundColor: box.boxColor
                }}>
                </div>
                
            ))
        }
            </div>
    </div>
  )
}

export default Display
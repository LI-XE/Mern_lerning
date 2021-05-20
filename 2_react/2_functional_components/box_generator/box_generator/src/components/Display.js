import React from 'react';

const Display = (props) => {
    const { colorArray } = props;
    return(
        <div>
            {
                colorArray.map((color, index)=> (
                    <div key={index} style={{
                        display:"inline-block",
                        height:"50px",
                        width:"50px",
                        margin:"10px",
                        backgroundColor:color
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;

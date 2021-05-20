import React from 'react';

const DisplayBonus = (props) => {
    const { boxArray } = props;
    console.log(boxArray);
    return(
        <div>
            {
                boxArray.map((box, index) => (
                    <div key={ index } style ={{
                        display:"inline-block",
                        height:box.size,
                        width: box.size,
                        margin: "10px",
                        backgroundColor: box.color,
                        }}>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayBonus;
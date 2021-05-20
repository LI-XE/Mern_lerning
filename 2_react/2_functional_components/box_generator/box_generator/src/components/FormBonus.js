import React, { useState } from 'react';

const FormBonus = (props) => {
    const { boxArray, setBoxArray } = props;
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState(0);

    const submitHandler = (e) => {
        e.preventDefault();
        const newBox = {
            color: color,
            size: size + "px",
        }
        setBoxArray( [...boxArray, newBox] ); 
        setColor("");
        setSize(50);
        console.log(boxArray);
    }
    return(
        <div>
            <form onSubmit= { submitHandler }>
                <p>
                <label>Color:</label>
                <input 
                    type="text"
                    name="color"
                    value={color}
                    onChange={ (e) => setColor(e.target.value)}
                    />
                </p>
                <p>
                <label>Width and Height in Pixels</label>
                <input
                    name="size"
                    type="text"
                    value={ size }
                    onChange={ (e) => setSize(e.target.value)}
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormBonus;
import React, { useState } from 'react';

const Form = (props) => {
    const { colorArray, setColorArray } = props;
    const [color, setColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setColorArray ( [...colorArray, color]);
    }
    return(
        <div>
            <form onSubmit={ (e) => {submitHandler(e)}} style={{margin:"30px"}}>
                <label>Color </label>
                <input 
                    type="text"
                    name="color"
                    value={color}
                    onChange={ (e) => setColor(e.target.value)}
                    style={{ margin:"10px"}}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
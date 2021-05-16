import React, { useState } from 'react';

const Person = (props) => {
    const [age, setAge] = useState(props.age);
    const handleClick = (event) => {
        setAge(age + 1);
    }
    return(
        <div>
            <h3>{props.lastName}, {props.firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {(event) => handleClick(event) }>Bithday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}

export default Person;
import React, { useState } from 'react';

const Project = (props) => {
    // const [ getter, setter ] = useState(initial_value);      initial_value can be number, string, array, object, anyother
    const [ likes, setLikes ] = useState(0); // parameter can be number, string, array, object, anyother
    const [ title, setTitle ] = useState(props.title)

    const addLikesHandler = (event) => {
        console.log("adding a like: " + likes);
        setLikes(likes + 1);
    }

    return (
        <div className="projectClass">
            <h4>{ title }</h4>
            <button onClick={ (event) => addLikesHandler(event) }>Like Project</button>
            <p>Likes: { likes }</p>
            <p>Description:</p>
            <p>{ props.description }</p>
            {/* target is the input that triggered the event */}
            <input type="text" value ={title} onChange={ (event) => setTitle(event.target.value) }/>
        </div>
    )
}

export default Project;
import React, { useState } from 'react';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const [ type, setType ] = useState("");
    const [ id, setId ] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${type}/${id}/`);
    }
    
    return(
        <div className="m-5">
            <form onSubmit={ (e) => submitHandler(e) }>
                <div className="row">
                    <div className="col">
                        <label>Search for:  </label>
                        <select 
                        onChange={ (e) => setType(e.target.value) }
                        value={ type }>
                            <option value="">Select...</option>
                            <option value="planets">Planets</option>
                            <option value="people">People</option>
                            <option value="species">Species</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                    </div>
                    <div className="col">
                        <label>ID:</label>
                        <input 
                        onChange={ (e) => setId(e.target.value)}
                        value={id} />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
            <h1>{type}</h1>
        </div>
    )
}

export default Form;
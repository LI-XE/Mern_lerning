import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const People = (props)=> {
    const [result, setResult] = useState([]);

    useEffect(()=>{

        axios.get("https://swapi.dev/api/people/" + props.id + "/")
            .then((response) => {
                console.log(response);
                setResult(response.data);
            })
            .catch((error) => {
                console.log(error);
                navigate("/obiwan");
            })
        }, [props.id]);

    if(result){
    return(
        <div className="result">
            <h1>{ result.name }</h1>
            <h3><span>Height: </span>{ result.height }</h3>
            <h3><span>Hair Color: </span>{ result.hair_color }</h3>
            <h3><span>Eye Color: </span>{ result.eye_color }</h3>
            <h3><span>Skin Color: </span>{ result.skin_color }</h3>
        </div>
    )
    }else{
        return(<></>);
    };
}

export default People;
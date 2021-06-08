import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Vehicles = (props)=> {
    const [result, setResult] = useState([]);

    useEffect(()=>{

        axios.get("https://swapi.dev/api/vehicles/" + props.id + "/")
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
            <h3><span>Model: </span>{ result.model }</h3>
            <h3><span>Crew: </span>{ result.crew }</h3>
            <h3><span>Passengers: </span>{ result.passengers }</h3>
        </div>
    )
    }else{
        return(<></>);
    };
}

export default Vehicles;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Planet = (props)=> {
    const [result, setResult] = useState([]);

    useEffect(()=>{

        axios.get("https://swapi.dev/api/planets/" + props.id + "/")
            .then((response) => {
                console.log(response);
                setResult(response.data);
            })
            .catch((error) => {
                navigate("/obiwan");
                console.log(error);
            })
        }, [props.id]);

    if(result){
    return(
        <div className="result">
            <h1>{ result.name }</h1>
            <h3><span>Climate: </span>{ result.climate }</h3>
            <h3><span>Terrain: </span>{ result.terrain }</h3>
            <h3><span>Surface Water: </span>{ result.surface_water }</h3>
            <h3><span>Population: </span>{ result.population }</h3>
        </div>
    )
    }else{
        return(<></>);
    };
}

export default Planet;
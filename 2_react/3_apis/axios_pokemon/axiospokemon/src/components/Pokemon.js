import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState([]);
    const [ fetchPokemon, setFetchPokemon ] = useState(false);

    useEffect( () => {
        axios.get( "https://pokeapi.co/api/v2/pokemon?limit=807" )
            .then((res) => {
                setPokemon(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, [ ]);
    
    const PokemonClick = () => {
        setFetchPokemon(true);
    }
    return(
        <div className="main">
            <button onClick = { (e) => PokemonClick() }>Fetch Pokemon</button>
            <ul>
                {   fetchPokemon 
                    ? pokemon.map((pokemon, index) => (
                        
                        <li key={ index }>{ index } -- { pokemon.name }</li>
                        
                    )): null
                }
            </ul>
        </div>
    )
}

export default Pokemon;
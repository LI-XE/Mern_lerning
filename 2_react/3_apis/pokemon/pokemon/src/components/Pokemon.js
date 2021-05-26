import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [ pokemon, setPokemon ] = useState([]);
    const [ fetchPokemon, setFetchPokemon ] = useState(false);

    useEffect( () => {
        fetch( "https://pokeapi.co/api/v2/pokemon?limit=807" )
            .then((response) => {
                response.json()
                    .then((jsonResponse) => {
                        setPokemon(jsonResponse.results);
                    })
                    .catch((jsonError) => {
                        console.log(jsonError);
                    });
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
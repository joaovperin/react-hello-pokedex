import React, { useEffect, useState } from "react";
import './styles.css';
import { Link } from "react-router-dom";

function Pokedex() {
    const [nomesPokemon, setNomesPokemon] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => setNomesPokemon(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <ul>
                {nomesPokemon.map((pokemon) => (
                    <li key={pokemon.name}>
                        <Link to={`/pokepage/${pokemon.name}`}>{pokemon.name}</ Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pokedex;
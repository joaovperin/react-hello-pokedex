import React, { useEffect, useState } from "react";
import './styles.css';

function Pokedex() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => setData(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <ul>
                {data.map(pokemon => (
                    <li>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokedex;
import React, { useEffect, useState } from "react";
import './styles.css';

function Pokedex() {
    const [nomesPokemon, setNomesPokemon] = useState([])
    const [selecionaPokemon, setSelecionaPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState(null)
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => response.json())
            .then(data => setNomesPokemon(data.results))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    const buscaPokemon = async () => {
        if (selecionaPokemon) {
            try {
                const resposta = await fetch('http://pokeapi.co/api/v2/pokemon/${selecionaPokemon)');
                if (resposta.status === 404) {
                    setPokemonData(null);
                    return;
                }
                const data = await resposta.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Erro ao buscar dados', error);
            }
        } else {
            setPokemonData(null);
        }
    };

    return (
        <div>
            <ul>
                {nomesPokemon.map((pokemon) => (
                    <li key={pokemon.name} onClick={() => setSelecionaPokemon(pokemon.name)}>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
            <button onClick={buscaPokemon}>Buscar Pokémon</button>
        </div>
    )
}

export default Pokedex;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokepage () {
    const { nomePokemon } = useParams();
    const [detalhesPokemon, setDetalhesPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
            .then(response => response.json())
            .then(data => setDetalhesPokemon(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, [nomePokemon]);

    const dadosPokemon = () => {
        if (detalhesPokemon) {
            return {
                nome: detalhesPokemon.name,
                image: '',
                id: detalhesPokemon.id,
                // element: detalhesPokemon.types.map((tipo) => (tipo.types)),
                height: detalhesPokemon.height,
                weight: detalhesPokemon.weight
            };
        }
        return null;
    }

    const pokemon = dadosPokemon();

    return (
        <div>{console.log(pokemon.nome)}</div>
    )

    // return (
    //     <div className="container">
    //         <div className="pokedex-container">
    //             <h1>Pokédex</h1>
    //             <div className="pokedex-content">
    //                 <img id="pokemon-img" alt="" src={pokemon.image}></img>
    //                 <span id="pokemon-name">{pokemon.name}</span>
    //                 <div className="element-container">
    //                     {pokemon.types.map(type => {
    //                         return (
    //                                 <div className={'element-chip ' + type}>
    //                                     <img className='poke-elem-img' src={'/types/' + type + '.svg'} alt="" />
    //                                     <span className="type-description">{type}</span>
    //                                 </div>
    //                         )
    //                     })}
    //                 </div>
    //                 <div className="description-container">
    //                     <div className='description'>
    //                         <span>Pokédex nº</span>
    //                         <span>{pokemon.id}</span>
    //                     </div>
    //                     <div className='description'>
    //                         <span>Height:</span>
    //                         <span>{pokemon.height}</span>
    //                     </div>
    //                     <div className='description'>
    //                         <span>Weight:</span>
    //                         <span>{pokemon.weight}</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Pokepage;
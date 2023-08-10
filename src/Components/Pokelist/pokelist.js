import React from "react";
import './styles.css';

function Pokelist() {

    const pikachu = {
        "id": 25,
        "name": "Pikachu",
        "height": 4,
        "weight": 60,
        "image":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "types":["electric"]
    };

    const bulbasaur = {
        "id": 1,
        "name": "Bulbasaur",
        "height": 7,
        "weight": 69,
        "image":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "types":["grass", "poison"]
    };

    const charmander = {
        "id": 4,
        "name": "Charmander",
        "height": 6,
        "weight": 85,
        "image":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "types":["fire"]
    };
    
    return (
        <div className="container">
            <div className="pokedex-container">
                <h1>Pokédex</h1>
                <div className="pokedex-content">
                    <img id="pokemon-img" alt="" src={pikachu.image}></img>
                    <div className='description'>
                        <span id="pokemon-name">{pikachu.name}</span>
                    </div>
                    <div className={'elemento-chip' + pikachu.types}>
                        <img src={'../../assets/' + pikachu.types + '.svg'} />
                        <span id="pokemon-type">{pikachu.types}</span>
                    </div>
                    <div className='description'>
                        <span>{pikachu.id}</span>
                    </div>
                    <div className='description'>
                        <span>Height</span>
                        <span>{pikachu.height}</span>
                    </div>
                    <div className='description'>
                        <span>Weight</span>
                        <span>{pikachu.weight}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokelist;
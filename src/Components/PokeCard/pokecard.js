import React from "react";
import './styles.css';

function PokeCard(props) {
    const pokemon = props.pokemon;

    return (
        <div className="container">
            <div className="pokedex-container">
                <h1>Pokédex</h1>
                <div className="pokedex-content">
                    <img id="pokemon-img" alt="" src={pokemon.image}></img>
                    <div className='description'>
                        <span id="pokemon-name">{pokemon.name}</span>
                    </div>
                    <div className={'element-chip' + pokemon.types}>
                        <img className='poke-elem-img' src={'/types/' + pokemon.types + '.svg'} alt="" />
                        <span id="type-description">{pokemon.types}</span>
                    </div>
                    <div className='description'>
                        <span>{pokemon.id}</span>
                    </div>
                    <div className='description'>
                        <span>Height</span>
                        <span>{pokemon.height}</span>
                    </div>
                    <div className='description'>
                        <span>Weight</span>
                        <span>{pokemon.weight}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;
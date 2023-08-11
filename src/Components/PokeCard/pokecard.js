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
                    <span id="pokemon-name">{pokemon.name}</span>
                    <div className="element-container">
                        {pokemon.types.map(type => {
                            return (
                                    <div className={'element-chip ' + type}>
                                        <img className='poke-elem-img' src={'/types/' + type + '.svg'} alt="" />
                                        <span className="type-description">{type}</span>
                                    </div>
                            )
                        })}
                    </div>
                    <div className="description-container">
                        <div className='description'>
                            <span>Pokédex nº</span>
                            <span>{pokemon.id}</span>
                        </div>
                        <div className='description'>
                            <span>Height:</span>
                            <span>{pokemon.height}</span>
                        </div>
                        <div className='description'>
                            <span>Weight:</span>
                            <span>{pokemon.weight}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeCard;
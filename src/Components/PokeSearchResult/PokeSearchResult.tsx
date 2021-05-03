import React from 'react'
import './PokeSearchResult.css'
import { PokemonSchema } from '../../types/pokemonSchema'


interface selectedPokemonProps{
    selectedPokemon: PokemonSchema | undefined;
    isSelected: boolean;
}


const PokeSearchResult = ({selectedPokemon,isSelected}:selectedPokemonProps)=>{
   
    // const isSearched = false;
    return (
        <div className="pokecard">
        {

isSelected?(
    
    selectedPokemon && (
    <div>
        <img  className="pokemon-gif" src={selectedPokemon.sprites?.animated || selectedPokemon.sprites?.normal} alt={selectedPokemon.name} />
        <p>Name: {selectedPokemon.name}</p>
        <p>Exp: {selectedPokemon.base_experience}</p>
        <p>Height: {selectedPokemon.height}</p>
        <p>Weight: {selectedPokemon.weight}</p>
        
    </div>
    )
):(
    <h2>Welcome to the Pokedex</h2>
)
        }
        </div>
    )
}

export default PokeSearchResult;
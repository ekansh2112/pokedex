import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema'
import Pokelist from '../Pokelist/Pokelist'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'
import './Pokedex.css'


interface PokedexProps{
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    handleinputChange: (inputValue:string) => void;
    handleSelection: (pokemonName:string) =>void;
    isSelected:boolean;
}

const Pokedex = ({searchedPokemons,handleinputChange,selectedPokemon,handleSelection,isSelected}:PokedexProps) =>{
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox handleinputChange={handleinputChange} />
                <Pokelist 
                    searchedPokemons={searchedPokemons}  
                    handleSelection = {handleSelection}
                
                />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} isSelected={isSelected} />
            </div>
        </div>
    )
}

export default Pokedex;
import React from 'react'
import { PokemonSchema } from '../../types/pokemonSchema'
import PokeCard from '../PokeCard/PokeCard'
import './Pokelist.css'


interface PokelistProps{
    searchedPokemons: PokemonSchema[];
    handleSelection: (pokemonName:string) =>void;
}

const Pokelist  = ({searchedPokemons,handleSelection}:PokelistProps) =>{
    return (
        <div className="card-container">
           
           {    //or use destructuring -- {id,name,sprites} instead of pokemon in ()
               searchedPokemons.map((pokemon)=>{
                   return (
                       pokemon.name &&(
                        <PokeCard 
                        key={pokemon.id}
                        name={pokemon.name}
                        spriteURL={pokemon.sprites.normal}
                        handleSelection = {handleSelection}
                        
                   />
                       )
                       
                   )
               })
           }

            
        </div>
    )
}
export default Pokelist;
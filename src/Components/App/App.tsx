import React from 'react'
import { pokemonData } from '../../pokemonData'
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../../types/pokemonSchema'
import Pokedex from '../Pokedex/Pokedex'
import './App.css'


interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemon: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    isSelected: boolean;

}

class App extends React.Component<any,AppState>{
    state =  {
        searchField: "",
        allPokemons: [],
        searchedPokemon: [],
        selectedPokemon: undefined,
        isSelected: false,
    }

    patchPokemonData  = (pokemons: UnpatchedPokemonSchema[]) =>{
        const patchedPokemons = pokemons.map((pokemon)=>{
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            }

            try{
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing the sprites: ",e);
            }
            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            }

            return patchedPokemon;
        })

        return patchedPokemons;
    }

    handleinputChange = (inputValue:string) =>{
        // console.log("inputValue from App.tsx is:", inputValue);
        //filter the searched pokemons

        const {allPokemons} =  this.state;
        const searchedPokemons = allPokemons.filter(
            (pokemon:PokemonSchema) =>{
                return (
                    pokemon.name && 
                        pokemon.name
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                )
            }
        )
        this.setState({
            searchField: inputValue,
            searchedPokemon:searchedPokemons,
        })
        
    }

    handleSelection = (pokemonName:string) =>{
        const {allPokemons} = this.state;

        //find the seected pokemon from searched pokemons / all pokemons
        const selectedPokemon = allPokemons.find(
            (pokemon:PokemonSchema)=>
                pokemon.name===pokemonName
            
        )

        //update the state
        this.setState({selectedPokemon,isSelected:true})

    }

    componentDidMount(){
        //Patch the stringified pokemon sprites
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        )
        // console.log(patchedPokemons);
        
        //Update the state with the patched pokemons
        this.setState({
            allPokemons:patchedPokemons,
            searchedPokemon: patchedPokemons,
        })
    }
    render(){
        return <div className="App">
            <h1>Pokedex</h1>
            <Pokedex 
            searchedPokemons={this.state.searchedPokemon}  
            handleinputChange={this.handleinputChange} 
            handleSelection = {this.handleSelection}
            selectedPokemon = {this.state.selectedPokemon}
            isSelected = {this.state.isSelected}
            />
        </div>
    }
}

export default App;
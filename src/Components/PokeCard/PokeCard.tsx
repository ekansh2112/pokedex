import  './PokeCard.css'


interface PokecardProps{
    spriteURL?:string;
    name: string;
    handleSelection: (pokemonName:string) =>void;

    
}

const PokeCard = ({spriteURL,name,handleSelection}: PokecardProps) =>{
    return (
        <div className="card" onClick={()=>{
            handleSelection(name)
        }} >
            <img className="pokemon-sprite" alt={name} src={spriteURL} />
        <p>{name}</p>
        </div>
    )
}

export default PokeCard;
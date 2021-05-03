import React from 'react'
import './SearchBox.css'


interface searchBoxProps{
    handleinputChange: (inputValue:string) => void;
}


const SearchBox = (props:searchBoxProps) =>{
    return (
        <input  onChange={(e)=>{
            props.handleinputChange(e.target.value)
        }}  type="search" className="search" placeholder="Search Pokemon" />
    )
}

export default SearchBox;
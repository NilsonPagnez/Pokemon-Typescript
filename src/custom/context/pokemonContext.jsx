import { createContext, useState } from "react";

export const PokemonContext = createContext()

export const PokemonProvider = ({children}) =>{

    const [ chosenPokemon, setChosenPokemon ] = useState({
        name:'bulbasaur',
        id:1,
    })

    return (
        <PokemonContext.Provider value={{ chosenPokemon, setChosenPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}
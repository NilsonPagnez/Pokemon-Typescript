import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../../custom/context/pokemonContext'
import style from './mainSection.module.scss'
import { api } from '../../../custom/apiCalls/api';
import Loading from '../../../assets/loading/Loading';

interface PokemonData {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      };
    };
  };
  // Add any other properties you expect to receive from the API response
}


function MainSection() {

  const [loading, setLoading] = useState<boolean>(false);
  const { chosenPokemon } = useContext(PokemonContext)
  const [pokeResponse, setPokeResponse] = useState<PokemonData | undefined>(undefined);

  
  useEffect(()=>{
    async function getPokemons() {
      setLoading(true);
      setPokeResponse(undefined)
      const response = await api.get(
        `/pokemon/${chosenPokemon.name}`,
      );
      setLoading(false);
      return setPokeResponse(response.data)

    }
    console.log(loading)
    getPokemons()
  }, [chosenPokemon])

  return (
    <section className={style.mainSection}>
      <div className={style.displayCard} onClick={()=> console.log(chosenPokemon)}>
          <div className="chosenPokemon">
   
            {
                pokeResponse !== undefined ?
                <img src={`${pokeResponse.sprites.other['official-artwork'].front_default}`} alt="" />:
                <>
                  <Loading/>
                </>
            }

          </div>
          <div className="play"></div>
      </div>
    </section>
  )
}

export default MainSection
import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../../custom/context/pokemonContext'
import style from './mainSection.module.scss'
import { api } from '../../../custom/apiCalls/api';

function MainSection() {

  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading)
  const { chosenPokemon } = useContext(PokemonContext)
  

  useEffect(()=>{
    async function getPokemons() {
      setLoading(true);
      const response = await api.get(
        `/pokemon/${chosenPokemon.name}`,
      );
      setLoading(false);
      
      return response.data;
    }
    
    getPokemons()
  }, [chosenPokemon])



  return (
    <section className={style.mainSection}>
      <div className={style.displayCard}>
          <div className="chosenPokemon">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${chosenPokemon.id}.png`} alt="" />
          </div>
          <div className="play"></div>
      </div>
    </section>
  )
}

export default MainSection
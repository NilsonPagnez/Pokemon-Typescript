import { useEffect, useState } from 'react';
import { api } from '../../../../custom/apiCalls/api';
import style from './searchFilter.module.scss';
import AsyncSelect from 'react-select/async';

interface Pokemon {
  name: string;
}

function SearchFilter() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);


  async function getPokemons() {
    const response = await api.get(`/pokemon?limit=100000&offset=0`);

    const mapResponseToValuesAndLabels = (data:any) => ({
      value: data.name,
      label: data.name,
    });

    setAllPokemon(response.data.results.map(mapResponseToValuesAndLabels));
    console.log(allPokemon)
    
    return allPokemon
  }

  useEffect(() => {
    getPokemons();
  }, []);

 

  return (
    <div className={style.SearchDiv}>
      <label htmlFor="pokemon" onClick={()=> console.log(allPokemon)}>Select your Pokemon</label>
      <AsyncSelect loadOptions={getPokemons}/>
    </div>
  );
}

export default SearchFilter;
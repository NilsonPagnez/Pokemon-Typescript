import { useState, useEffect } from 'react';
import { api } from '../../../../custom/apiCalls/api';
import style from './searchFilter.module.scss';
import Select from 'react-select';

interface Pokemon {
  name: string;
}

function SearchFilter() {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getPokemons() {
      try {
        setLoading(true);
        const response = await api.get(`/pokemon?limit=1000&offset=0`);
        const mapResponseToValuesAndLabels = (data: any) => ({
          value: data.name,
          label: data.name,
        });
        setAllPokemon(response.data.results.map(mapResponseToValuesAndLabels));
      } catch (error) {
        console.log('Error: ', error);
      } finally {
        setLoading(false);
      }
    }

    getPokemons();
  }, []);


  return (
    <div className={style.SearchDiv}>
      <label htmlFor="pokemon">Select your Pokemon</label>
      <Select
        options={allPokemon}
        isLoading={loading}
        placeholder="Selecione uma opção"
      />

    </div>
  );
}

export default SearchFilter;
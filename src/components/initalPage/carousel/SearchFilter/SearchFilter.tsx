import { useState } from 'react';
import { api } from '../../../../custom/apiCalls/api';
import style from './searchFilter.module.scss';
import Select from 'react-select';
import debounce from 'lodash/debounce';

interface Pokemon {
  name: string;
}

function SearchFilter() {
  const [options, setOptions] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const debouncedSearch = debounce(fetchPokemons, 300);

  async function fetchPokemons(query: string) {
    try {
      setLoading(true);
      const response = await api.get(`/pokemon?limit=10000&offset=0&name=${query}`);
      const mapResponseToValuesAndLabels = (data: any) => ({
        value: data.name,
        label: data.name,
      });
      setOptions(response.data.results.map(mapResponseToValuesAndLabels));
    } catch (error) {
      console.log('Error: ', error);
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    if (newValue) {
      debouncedSearch(newValue);
    } else {
      setOptions([]);
    }
  };

  return (
    <div className={style.SearchDiv}>
      <label htmlFor="pokemon" onClick={()=> console.log(options)}>Select your Pokemon</label>
      <Select
        options={options}
        isLoading={loading}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        placeholder="Search your Pokemon"
        menuIsOpen={inputValue.length > 0}
      />
    </div>
  );
}

export default SearchFilter;
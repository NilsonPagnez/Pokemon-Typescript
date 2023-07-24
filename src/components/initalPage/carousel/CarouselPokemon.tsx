import { useState, useEffect, useContext } from 'react';
import style from './carousel.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../../../custom/apiCalls/api';
import { PokemonContext } from '../../../custom/context/pokemonContext';


function ApiCallTest() {

  interface Pokemon {
    name: string;
  }

  const { setChosenPokemon } = useContext(PokemonContext)

  let pokeQtt: number = 30
  const [offset, setOffset] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  async function getPokemons(offset: number) {
    setLoading(true);
    const response = await api.get(
      `/pokemon?limit=${pokeQtt}&offset=${offset}`,
    );
    setLoading(false);
    return response.data;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemons(offset);
      if (offset === 0) {
        setPokemonList(data.results);
      } else {
        setPokemonList((prevPokemonList) => [...prevPokemonList, ...data.results]);
      }
    }

    fetchData();
  }, [offset]);

  const fetchMoreData = () => {
    setOffset((prevOffset) => prevOffset + pokeQtt);
  };

  return (
    <aside className={style.carouselAside}>
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<div className='teste'>{loading && <h1>Loading...</h1>}</div>}
      >
        <div className='teste'>

          {pokemonList.map((pokemon, index) => (
            <div key={pokemon.name} onClick={()=>{
              setChosenPokemon({
                name: pokemon.name,
                id: index + 1
              })
              }}>
              {pokemon.name}
              {index + 1}
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${index + 1}.png`} alt="" />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </aside>
  );
}

export default ApiCallTest;


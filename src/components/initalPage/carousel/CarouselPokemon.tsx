import { useState, useEffect, useContext } from 'react';
import style from './carousel.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component';
import { api } from '../../../custom/apiCalls/api';
import { PokemonContext } from '../../../custom/context/pokemonContext';
import Loading from '../../../assets/loading/Loading';
import FilterTab from './FilterTab/FilterTab';
import SearchFilter from './SearchFilter/SearchFilter';


function CarouselPokemon() {
  
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
    <aside className={style.Aside}>
      <SearchFilter/>
      <div className={style.Aside__bgColor}>
        <InfiniteScroll
          dataLength={pokemonList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div >{loading && <Loading />}</div>}
        >
          <div className={style.Aside__pokeChoiseCarousel}>
            {pokemonList.map((pokemon, index) => (
              <div className={style.pokemonCard} key={pokemon.name} onClick={() => {
                setChosenPokemon({
                  name: pokemon.name,
                  id: index + 1
                })
              }}>
                <h3>
                  {pokemon.name}
                </h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${index + 1}.png`} alt="" />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
      <FilterTab />

    </aside>
  );
}

export default CarouselPokemon;


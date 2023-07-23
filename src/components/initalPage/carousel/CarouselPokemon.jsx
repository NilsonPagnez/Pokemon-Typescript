import React, { useState, useEffect } from 'react';
import style from './carousel.module.scss'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


function ApiCallTest() {
  const [pokeQtt, setPokeQtt] = useState(30);
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      header1: 'Access-Control-Allow-Origin',
      header2: 'the User-Agent of your application',
    },
  };

  async function getPokemons(offset) {
    setLoading(true);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${pokeQtt}&offset=${offset}`,
      config
    );
    setLoading(false);
    return response.data;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemons(offset);
      if (offset === 0) {
        // If offset is 0, it means it's the first data fetch
        setPokemonList(data.results);
      } else {
        // If offset is greater than 0, it's a subsequent data fetch
        setPokemonList((prevPokemonList) => [...prevPokemonList, ...data.results]);
      }
    }

    fetchData();
  }, [offset]);

  const fetchMoreData = () => {
    setOffset((prevOffset) => prevOffset + pokeQtt);
  };

  console.log(pokemonList)
  return (
    <aside className={style.carouselAside}>
    <InfiniteScroll
      dataLength={pokemonList.length}
      next={fetchMoreData}
      hasMore={true} // You can set a condition here if you want to stop loading more data
      loader={<div className='teste'>{loading && <h1>Loading...</h1>}</div>}
    >
      <div className='teste'>

        {pokemonList.map((pokemon, index) => (
          <div key={pokemon.name}>
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


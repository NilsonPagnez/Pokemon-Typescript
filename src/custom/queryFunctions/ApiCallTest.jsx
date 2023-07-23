import React, { useState } from 'react';
import { useQuery } from 'react-query'
import CarouselPokemon from '../../components/carousel/CarouselPokemon';
import test from '../apiCalls/test'

function ApiCallTest() {
  const {
    status,
    error,
    data: teste,
  } = useQuery({
    queryKey: ['test'],
    queryFn: test,
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>

  const pokemonList = teste.results
  return (
    <CarouselPokemon>
      {
        pokemonList.map(pokemon =>(
          <div>
            {pokemon.name}
          </div>
        ))
      }
    </CarouselPokemon>

  )
}

export default ApiCallTest
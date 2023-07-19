import test from 'custom/apiCalls/test'
import React from 'react'
import { useQuery } from 'react-query'


function ApiCallTest() {

  const {
    status,
    error,
    data: teste
  } = useQuery({
    queryKey: ['test'],
    queryFn: test,
  })

  if (status === 'loading') return <h1>Loading...</h1>
  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>

  return (
    <div>{JSON.stringify(teste)}</div>
  )
}

export default ApiCallTest
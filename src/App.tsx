import ApiCallTest from 'custom/queryFunctions/ApiCallTest';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ApiCallTest/>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
}

export default App;

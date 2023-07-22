
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Initial from './pages/InitialPage/Initial';

const queryClient = new QueryClient

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Initial />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;

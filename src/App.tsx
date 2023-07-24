import { PokemonProvider } from './custom/context/pokemonContext';
import Initial from './pages/InitialPage/Initial';    


function App() {
  return (
    <PokemonProvider>
        <Initial />
    </PokemonProvider>
  );
}

export default App;

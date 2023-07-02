import useApiCall from '../../hooks/useApiCall'
import PokemonsList from './PokemonsList';
import Spinner from '../core/Spinner/Spinner';

const CallPokemons = () => {
  const { data, error } = useApiCall({url: 'https://pokeapi.co/api/v2/pokemon?limit=2&offset=0'});

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div className="fixed top-0 left-0 w-full grid place-content-center min-h-screen bg-zinc-900 bg-opacity-95">
      <Spinner />
    </div>;
  }

  return (
    <div>
      <PokemonsList data={data} />
    </div>
  );
}

export default CallPokemons
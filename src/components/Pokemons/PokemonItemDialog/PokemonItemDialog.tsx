import useApiCall from "../../../hooks/useApiCall"
import Spinner from "../../core/Spinner/Spinner";
import { PokemonPreview } from "../PokemonsPreview.Types";
import PokemonCard from "../PokemonCard";

interface Props extends PokemonPreview {
  handlePokemonDialog: () => void;
}

const PokemonItemDialog: React.FC<Props> = ({ url, name, handlePokemonDialog }) => {
  const { data, error } = useApiCall({ url });

  const { data: dataSpecie, error: errorSpecie } = useApiCall({ url: `https://pokeapi.co/api/v2/pokemon-species/${name}` });

  if (error || errorSpecie) {
    return <div>Error: {error}</div>;
  }

  if (!data || !dataSpecie) {
    return <div className="fixed top-0 left-0 w-full grid place-content-center min-h-screen bg-zinc-900 bg-opacity-95">
      <Spinner />
    </div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full grid place-content-center min-h-screen bg-zinc-900 bg-opacity-95 px-4">
      <PokemonCard 
        name={name}
        data={data}
        dataSpecie={dataSpecie}
        handlePokemonDialog={handlePokemonDialog} 
      />
    </div>
  )
}

export default PokemonItemDialog
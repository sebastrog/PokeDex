import Spinner from "../../core/Spinner/Spinner";
import { Pokemon, PokemonPreview } from "../PokemonsPreview.Types";
import PokemonCard from "../PokemonCard";
import { DataTypes, DataSpecieTypes, Stat, Language } from "../../Pokemons/PokemonCard/PokemonCard.Types";

interface Props {
  data: DataTypes
  dataSpecie: DataSpecieTypes
  handlePokemonDialog: () => void;
}

const PokemonItemDialog: React.FC<Props> = ({ data, dataSpecie, handlePokemonDialog }) => {
  return (
    <div className="fixed top-0 left-0 w-full grid place-content-center min-h-screen bg-zinc-900 bg-opacity-95 px-4">
      <PokemonCard 
        name={dataSpecie.name}
        data={dataSpecie}
        dataSpecie={data}
        handlePokemonDialog={handlePokemonDialog} 
      />
    </div>
  )
}

export default PokemonItemDialog
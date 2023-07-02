import PokemonItem from "../PokemonItem";
import { PokemonsPreview } from "../PokemonsPreview.Types";

interface Props {
  data: PokemonsPreview;
}

const PokemonsList: React.FC<Props> = ({data}) => {
  return (
    <div className="container">
      <div className="px-5">
        <div className="flex flex-wrap gap-5">
          {data?.results.map(pokemon => (
            <PokemonItem 
              key={pokemon.name} 
              name={pokemon.name} 
              url={pokemon.url} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsList
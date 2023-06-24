import PokemonItem from "../PokemonItem/PokemonItem";
import { Pokemons } from "../Pokemons.Types";

type Props = {
  data: Pokemons;
};

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
import PokemonItem from "../PokemonItem";
import { PokemonPreview } from "../PokemonsPreview.Types";

interface Props {
  data: [];
}

const PokemonsList: React.FC<Props> = ({data}) => {
  return (
    <div className="container">
      <div className="px-5">
        <div className="flex flex-wrap justify-center gap-5">
          {data?.map( ( PokemonPreview : PokemonPreview) => (
            <PokemonItem 
              key={PokemonPreview.name} 
              PokemonPreview={PokemonPreview}
              id={PokemonPreview.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokemonsList
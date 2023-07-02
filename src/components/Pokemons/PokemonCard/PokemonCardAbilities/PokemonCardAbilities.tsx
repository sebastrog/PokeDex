import { Ability } from "../PokemonCard.Types";

interface Props {
  abilities: Ability[];
}

const PokemonCardAbilities: React.FC<Props> = ({ abilities }) => {
  return (
    <div className="flex gap-2 items-center mb-2">
      <div className="w-1/2 flex flex-col gap-2">
        <div className="rounded-full bg-zinc-800 py-1">abilities:</div>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        {abilities.map((ability) => (<div key={ability.ability.name} className="rounded-full bg-zinc-900 py-1 font-medium text-xs">{ability.ability.name}</div>))}
      </div>
    </div>
  )
}

export default PokemonCardAbilities
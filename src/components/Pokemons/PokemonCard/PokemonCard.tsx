import attackIcon from "../../../assets/attack.png"
import defenseIcon from "../../../assets/defense.png"
import heartIcon from "../../../assets/heart.png"
import bootsIcon from "../../../assets/boots.png"
import PokemonCardAvatar from "../PokemonCard/PokemonCardAvatar/PokemonCardAvatar";

type Sprites = {
  sprites: { front_default: string };
  abilities: { ability: {name:string} };
}
type PokemonColor = {
  color: { name: string };
}
/* type PokemonAbilities = {
  ability: { name: string };
} */

interface Props {
  name: string;
  data: Sprites;
  dataSpecie: PokemonColor;
  handlePokemonDialog: () => void;
}

const getSkill = ({ icon, findSkill }: { icon: string, findSkill: React.JSX.Element }) => {
  return (
    <div className="rounded-full bg-zinc-800 py-1 flex gap-2 items-center justify-center">
      <img
        className="w-[16px]"
        src={icon}
        alt="icon"
      />
      {findSkill}
    </div>
  )
}

const findSkill = ({ data, skill }: { data: Sprites, skill: string }): React.JSX.Element => {
  const find = data.stats.find((stat: string) => stat.stat.name === skill);
  const findStat = find ? find.base_stat : null;
  return <span className="font-medium text-sm">{findStat}</span>
}

const findLanguage = ({ dataSpecie, lan }: { dataSpecie: PokemonColor, lan: string }): React.JSX.Element => {
  const englishEntry = dataSpecie.flavor_text_entries.find(
    (entry: string) => entry.language.name === lan
  );
  return <span className="font-medium lowercase text-sm">{englishEntry.flavor_text}</span>
}

const PokemonCard: React.FC<Props> = ({ name, data, dataSpecie, handlePokemonDialog }) => {
  return (
    <div className="rounded-xl bg-zinc-900 max-w-[380px] px-4 py-10 relative border-2" style={{ borderColor: dataSpecie.color.name }}>
      <button
        className="absolute top-4 right-2 rounded-full w-8 h-1.5 grid place-content-center bg-amber-500 font-bold"
        onClick={handlePokemonDialog}
      >
      </button>

      <PokemonCardAvatar
        name={name}
        sprites={data.sprites.front_default}
        color={dataSpecie.color.name}
      />


      <div className="text-center">
        <h1 className="text-xl first-letter:uppercase mb-4">{name}</h1>
        <div className="flex gap-2 mb-2">
          <div className="w-1/2 flex flex-col gap-2">
            {getSkill({ icon: heartIcon, findSkill: findSkill({ data, skill: "hp" }) })}
            {getSkill({ icon: bootsIcon, findSkill: findSkill({ data, skill: "speed" }) })}
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            {getSkill({ icon: attackIcon, findSkill: findSkill({ data, skill: "attack" }) })}
            {getSkill({ icon: defenseIcon, findSkill: findSkill({ data, skill: "defense" }) })}
          </div>
        </div>

        <div className="flex gap-2 items-center mb-2">
          <div className="w-1/2 flex flex-col gap-2">
            <div className="rounded-full bg-zinc-800 py-1">abilities:</div>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            {
              data.abilities.map((skill: string) =>
              (
                <div key={skill.ability.name} className="rounded-full bg-zinc-900 py-1 font-medium text-xs">{skill.ability.name}</div>
              )
              )
            }
          </div>
        </div>

        {findLanguage({ dataSpecie, lan: "en" })}
      </div>
    </div>
  )
}

export default PokemonCard
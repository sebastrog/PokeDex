import useApiCall from "../../../hooks/useApiCall"
import Spinner from "../../core/Spinner/Spinner";
import { Pokemon } from "../Pokemons.Types";
import attackIcon from "../../../assets/attack.png"
import defenseIcon from "../../../assets/defense.png"
import heartIcon from "../../../assets/heart.png"
import bootsIcon from "../../../assets/boots.png"

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

const findSkill = ({ data, skill }: { data: [], skill: string }): React.JSX.Element => {
  const find = data.stats.find((stat: string) => stat.stat.name === skill);
  const findStat = find ? find.base_stat : null;
  return <span className="font-medium text-sm">{findStat}</span>
}

const findLanguage = ({ dataSpecie, lan }: { dataSpecie: [], lan: string }): React.JSX.Element => {
  const englishEntry = dataSpecie.flavor_text_entries.find(
    (entry: string) => entry.language.name === lan
  );
  return <span className="font-medium lowercase text-sm">{englishEntry.flavor_text}</span>
}

interface Props extends Pokemon {
  handlePokemonDialog: () => void;
}

const PokemonItemDialog: React.FC<Props> = ({ url, name, handlePokemonDialog, sprites }) => {
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
      <div className="rounded-xl bg-zinc-900 max-w-[380px] px-4 py-10 relative border-2" style={{ borderColor: dataSpecie.color.name }}>

        <button
          className="absolute top-4 right-2 rounded-full w-8 h-1.5 grid place-content-center bg-amber-500 font-bold"
          onClick={handlePokemonDialog}
        >
        </button>

        <div className={`w-[120px] h-[120px] rounded-full drop-shadow-md m-auto bg-zinc-800 mb-4 border-2`} style={{ borderColor: dataSpecie.color.name }}>
          <img
            className="block object-contain object-center w-[96px] h-full m-auto"
            src={data.sprites.front_default}
            alt={name}
          />
        </div>

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
    </div>
  )
}

export default PokemonItemDialog
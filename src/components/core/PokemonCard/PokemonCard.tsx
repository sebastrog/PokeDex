import React from 'react';
import { attackIcon, defenseIcon, heartIcon, bootsIcon } from "../../../utils/icons";
import PokemonCardAbilities from "./PokemonCardAbilities";
import { Stat } from './PokemonCard.Types';
interface Props {
  name: string,
  abilities: []
  stats: []
  sprite: string
  color: string
  language: string | null | undefined
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

const findSkill = ({stats, skill} : {stats: Stat[], skill: string}) => {
  const find = stats.find(stat => stat.stat.name === skill);
  const findStat = find ? find.base_stat : null;
  return <span className="font-medium text-sm">{findStat}</span>
}

const PokemonCard: React.FC<Props> = ({name, abilities, stats, sprite, color, language}) => {
  return (
    <div className="rounded-xl bg-zinc-900 w-full px-4 py-10 relative border-2 h-full" style={{ borderColor: color }}>
      <div className={`w-[120px] h-[120px] rounded-full drop-shadow-md m-auto bg-zinc-800 mb-4 border-2`} style={{ borderColor: color }}>
        <img
          className="block object-contain object-center w-[96px] h-full m-auto"
          src={sprite}
          alt={name}
        />
      </div>

      <div className="text-center">
        <h1 className="text-xl first-letter:uppercase mb-4">{name}</h1>
        <div className="flex gap-2 mb-2">
          <div className="w-1/2 flex flex-col gap-2">
            {getSkill({ icon: heartIcon, findSkill: findSkill({stats, skill: "hp"}) })}
            {getSkill({ icon: bootsIcon, findSkill: findSkill({stats, skill: "speed"}) })}
          </div>

          <div className="w-1/2 flex flex-col gap-2">
            {getSkill({ icon: attackIcon, findSkill: findSkill({stats, skill: "attack"}) })}
            {getSkill({ icon: defenseIcon, findSkill: findSkill({stats, skill: "defense"}) })}
          </div>
        </div>

        <PokemonCardAbilities abilities={abilities} /> 

        <span className="font-medium lowercase text-sm">{language}</span>
      </div>
     
    </div>
  )
}

export default PokemonCard
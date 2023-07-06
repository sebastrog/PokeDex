import {  useState } from 'react'

import useApiCall from '../../../hooks/useApiCall';
import { Pokemon } from "../PokemonsPreview.Types";

import PokemonItemDialog from '../PokemonItemDialog';

interface Props  {
  PokemonPreview: Pokemon
  id: number
}

const PokemonItem: React.FC<Props> = ({PokemonPreview}) => {
  const { id } = PokemonPreview;
  const { data } = useApiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`})
  const { color, sprites } = data || { color: null, sprites: null };
  const { front_default } = sprites || { front_default: null };
  const borderColor = color !== null ? color : undefined;
  const [showDialog, setShowDialog] = useState(false);

  const handlePokemonDialog = () => {
    setShowDialog(!showDialog);
  }

  return (
    <>
      <button 
        className={`py-2 px-4 bg-zinc-800 rounded-md duration-100 flex items-center gap-2 border-2`}
        onClick={handlePokemonDialog}
        style={{ borderColor }}
      >
        <div className={`w-[50px] h-[50px] rounded-full drop-shadow-md m-auto bg-zinc-800`}>
        {data && front_default !== null && (
          <img
            className="block object-contain object-center w-[55px] h-full m-auto scale-125"
            src={front_default}
            alt={PokemonPreview.name}
          />
        )}
        </div>
        <p>{PokemonPreview.name}</p>
      </button>
      {showDialog && (
        <PokemonItemDialog 
          data={PokemonPreview} 
          dataSpecie={data} 
          handlePokemonDialog={handlePokemonDialog}
        />
      )}
    </>
  )
}

export default PokemonItem
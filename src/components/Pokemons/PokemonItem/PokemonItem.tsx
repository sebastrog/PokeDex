import {  useState } from 'react'

import { Pokemon } from "../Pokemons.Types";
import PokemonItemDialog from "../PokemonItemDialog";

const PokemonItem: React.FC<Pokemon> = ({name, url}) => {
  const [showDialog, setShowDialog] = useState(false);

  const handlePokemonDialog = () => {
    setShowDialog(!showDialog);
  }

  return (
    <>
      <button 
        className="py-2 px-4 bg-zinc-800 rounded-md hover:bg-amber-700 duration-100"
        onClick={handlePokemonDialog}
      >
        {name}
      </button>
      {showDialog && (
        <PokemonItemDialog 
          name={name} 
          url={url}
          handlePokemonDialog={handlePokemonDialog}
        />
      )}
    </>
  )
}

export default PokemonItem
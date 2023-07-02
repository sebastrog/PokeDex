import {  useState } from 'react'

import { PokemonPreview } from "../PokemonsPreview.Types";
import PokemonItemDialog from "../PokemonItemDialog";

const PokemonItem: React.FC<PokemonPreview> = ({name, url}) => {
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
import PokemonCard from "../PokemonCard";

interface Props {
  data: any
  dataSpecie:any
  handlePokemonDialog: () => void;
}

const PokemonItemDialog: React.FC<Props> = ({ data, dataSpecie, handlePokemonDialog }) => {
  return (
    <div className="fixed top-0 left-0 w-full grid place-content-center min-h-screen bg-zinc-900 bg-opacity-95 px-4">
      <PokemonCard 
        name={dataSpecie.name}
        data={dataSpecie}
        dataSpecie={data}
        handlePokemonDialog={handlePokemonDialog} 
      />
    </div>
  )
}

export default PokemonItemDialog
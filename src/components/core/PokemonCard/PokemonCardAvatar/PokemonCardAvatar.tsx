
interface Props {
  name: string;
  sprites: string;
  color: string;
}

const PokemonCardAvatar: React.FC<Props> = ({name, sprites, color}) => {
  return (
    <div className={`w-[120px] h-[120px] rounded-full drop-shadow-md m-auto bg-zinc-800 mb-4 border-2`} style={{ borderColor: color }}>
      <img
        className="block object-contain object-center w-[96px] h-full m-auto"
        src={sprites}
        alt={name}
      />
    </div>
  )
}

export default PokemonCardAvatar
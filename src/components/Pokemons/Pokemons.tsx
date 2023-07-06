import React from 'react';
import PokemonsList from './PokemonsList';

interface Props {
  pokemonList: []
}

const CallPokemons: React.FC<Props> = ({pokemonList}) => {
  return (
    <div>
      <PokemonsList 
        data={pokemonList}
      />
    </div>
  );
}

export default CallPokemons
import { useState } from 'react'

import Search from "./components/Search"
import PokemonCard from './components/core/PokemonCard';
import { Pokemon } from './components/core/PokemonCard/PokemonCard.Types';

function App() {
  const [pokemonFound, setPokemonFound] = useState<Pokemon[]>([]);

  return (
    <div className="bg-zinc-900 min-h-screen text-white p-5">
      <div className="text-center mb-3">
        <h1 className="mb-1 italic text-amber-400 text-xl px-5 text-center">Hi master pokemon!</h1>
      </div>

      <div className="mb-10 w-48 m-auto">
        <Search pokemonFound={pokemonFound} setPokemonFound={setPokemonFound} />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-content-center gap-4">
        {pokemonFound?.map(({ name, id, abilities, stats, sprites, color, language }: Pokemon) => (
          <div key={`pokemon-id-${id}`}>
            <PokemonCard
              name={name}
              abilities={abilities}
              stats={stats}
              color={color}
              sprite={sprites}
              language={language}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

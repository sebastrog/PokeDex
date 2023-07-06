import { useState } from 'react'

import Pokemons from "./components/Pokemons"
import Search from "./components/Search/Search"

function App() {
  const [pokemonList, setPokemonList] = useState<any>(null);
  return (
    <div className="bg-zinc-900 grid place-content-center min-h-screen text-white">
      <h1 className="mb-2 italic text-amber-600 text-xl px-5 text-center">Hi master pokemon!</h1>
      <div className="mb-4 w-48 m-auto">
        <Search setPokemonList={setPokemonList}/>
      </div>

      {
        pokemonList && (
          <Pokemons pokemonList={pokemonList} />
        )
      }
    </div>
  )
}

export default App

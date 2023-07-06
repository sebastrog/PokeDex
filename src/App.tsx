import { useState } from 'react'

import Pokemons from "./components/Pokemons"
import Search from "./components/Search/Search"

function App() {
  const [pokemonList, setPokemonList] = useState<any>(null);
  return (
    <div className="bg-zinc-900 grid place-content-center min-h-screen text-white">
      <div className='text-center mb-3'>
        <h1 className="mb-1 italic text-amber-600 text-xl px-5 text-center">Hi master pokemon!</h1>
        <a href='https://www.wikidex.net/wiki/Lista_de_Pok%C3%A9mon' target='_blank' className="mb-2 italic text-amber-600 text-xl px-5 text-center">Pokemon List</a>
      </div>
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

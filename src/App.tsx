import Pokemons from "./components/Pokemons"

function App() {
  return (
    <div className="bg-zinc-900 grid place-content-center min-h-screen text-white">
      <h1 className="mb-5 italic text-amber-600 text-xl px-5 text-center">Hi master pokemon!</h1>
      <Pokemons />
    </div>
  )
}

export default App

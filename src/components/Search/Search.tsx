import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PikachuLoading from '../../assets/loading-pikachu.gif';
import { Pokemon, Ability, Languages } from '../core/PokemonCard/PokemonCard.Types';

type CustomError ={
  response?: {data:string}
};

type Props = {
  setPokemonFound: (value: Pokemon[]) => void;
  pokemonFound: Pokemon[];
};

const findLanguage = ({languages, lan}: {languages: Languages[], lan: string}) => {
  const englishEntry = languages.find(({ language }: Languages) => language.name === lan);
  const findLan = englishEntry ? englishEntry.flavor_text : null;
  return findLan
}

const Search: React.FC<Props> = ({ setPokemonFound, pokemonFound }) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<CustomError | null>(null);

  const valueRef = useRef('');

  useEffect(() => {
    setError(null);
    const fetchData = async (url: string) => {
      setLoading(true);
      try {
        const { data: initialData } = await axios.get(url);
        const { id, color, flavor_text_entries } = initialData;
        const existPokemon = Boolean(pokemonFound?.find(pokemon => pokemon.id === id));

        if (existPokemon) {
          const pokemons = [...pokemonFound]
          setPokemonFound(pokemons);
        } else {
          const { data: dataPokemon } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const { name, abilities, stats, sprites } = dataPokemon;
          const pokemons: Pokemon[] = [
            {
              id,
              name,
              abilities: abilities?.map(({ ability }: Ability) => { return ability.name }),
              stats,
              sprites: sprites.front_default,
              color: color.name,
              language: flavor_text_entries ? findLanguage({languages: flavor_text_entries, lan: 'en' }) : null
            
            },
            ...pokemonFound
          ]
          setPokemonFound(pokemons);
        }

      } catch (err) {
        const { response } = err as CustomError;
        setError({ response: { data: response?.data ?? '' } });

      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (value === valueRef.current && value !== '') {
        const format = value.toLowerCase();
        fetchData(`https://pokeapi.co/api/v2/pokemon-species/${format}`);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [value, setPokemonFound]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    valueRef.current = e.target.value;
  };

  return (
    <div className="relative">
      <div className="rounded-lg bg-zinc-800 ">
        <input
          disabled={loading}
          type="text"
          value={value}
          placeholder="search pokemon"
          className="w-full bg-transparent h-10 px-4"
          onChange={handleInputChange}
        />
      </div>
      <div className="absolute -top-[12px] -right-[60px]">
        {loading && (
          <img className="w-[55px]" src={PikachuLoading} alt="icon" />
        )}
      </div>
      <p className="text-amber-400 text-center absolute left-0 right-0 m-auto -bottom-7">
        <i>{error && error.response?.data}</i>
      </p>
    </div>
  );
};

export default Search;
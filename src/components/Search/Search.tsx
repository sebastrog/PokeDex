import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PikachuLoading from '../../assets/loading-pikachu.gif';
import { Pokemon } from '../Pokemons/PokemonsPreview.Types';

type Props = {
  url: string;
  setPokemonList: (data: Pokemon[]) => void;
};

const Search = ({ setPokemonList }: Props) => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const valueRef = useRef('');

  useEffect(() => {
    const fetchData = async (url: string) => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setPokemonList([response.data]);
      } catch (err) {
        console.log('error', err);
        setPokemonList([]);
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
  }, [value, setPokemonList]);

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
    </div>
  );
};

export default Search;
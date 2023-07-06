import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = { 
  url: string;
};

const useSearchPokemon = ({ url }: Props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err ) {
        console.log("error", err.data)
        setError(err.response.data as string)
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
      // Send Axios request here
    }, 1500)

    return () => clearTimeout(delayDebounceFn)

  }, [url]);

  return { data, error };
};

export default useSearchPokemon;
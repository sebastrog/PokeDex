import { useState, useEffect } from 'react';
import axios from 'axios';

type Props = { 
  url: string;
};

const useApiCall = ({ url }: Props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err ) {
        console.log("error", err)
        setError(err as string)
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useApiCall;
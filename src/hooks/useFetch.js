import { useState, useEffect } from 'react';

export default function useFetch({ api, path, method = 'GET', config = null, data = null }) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      api[method](path, JSON.parse(config), JSON.parse(data))
        .then((res) => {
          setResponse(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [api, method, path, data, config]);

  return { response, error, isLoading };
}

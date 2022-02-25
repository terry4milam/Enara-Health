import { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    axios.get(url)
      .then(data => {
        setData(data)
      }).catch(() => setError(true)).finally(() => setIsFetching(false))
  }, [])
  return { data, isFetching, error }
}

export default useFetch;

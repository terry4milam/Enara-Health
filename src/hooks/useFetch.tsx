import { useState, useEffect } from 'react';
import axios from 'axios'

export default function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])
  return { data, isFetching, error }
}


import axios from "axios";
import { useEffect, useState } from "react";

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const useFetch = (path) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${BASE_ENDPOINT}${path}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [path]);

  return {
    data,
    error,
    loading,
  };
};

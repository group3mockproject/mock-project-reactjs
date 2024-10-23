import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = ({ url, options = {}, mappedData }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const req = await axios(url, options);
        setData(mappedData ? mappedData(req.data) : req.data);
      } catch (e) {
        console.log({ e });
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [url, JSON.stringify(options)]);

  return { data, isLoading, error, setData };
};

export default useFetch;

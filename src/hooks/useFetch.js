import { useEffect, useState } from "react";
import API from "../config/urlConfig";

export const useFetch = (url = "", method = "get") => {
  const [dataApi, setDataApi] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const response = await API[method](url);
        const data = response.data;

        setDataApi(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { dataApi, error, isLoading };
};

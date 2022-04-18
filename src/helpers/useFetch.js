import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataRetrievalError, setDataRetrievalError] = useState(null);

  useEffect(() => {
    const retrieveData = async function () {
      setIsLoading(true);
      try {
        const data = await (await fetch(url)).json();
        setData(data);
      } catch (err) {
        setDataRetrievalError(err);
      } finally {
        setIsLoading(false);
      }
    };

    retrieveData();
  }, [url]);

  return { data, isLoading, dataRetrievalError };
}

export default useFetch;

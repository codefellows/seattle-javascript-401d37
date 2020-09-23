import { useEffect, useState } from 'react';
import axios from 'axios'

const useAjax = (url) => {


  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get(url);
      const results = response.data.results;
      setList(results);
      setIsLoading(false);
    }

    fetchData();

  }, [url]);


  return {
    list,
    isLoading,
  }

}

export default useAjax;

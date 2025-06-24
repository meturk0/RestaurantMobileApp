import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([])
  const [errorMesage, setErrorMesage] = useState('')
  const searchApi = async (searchTerm) => {

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'İstanbul',
        },
      });
      setResults(response.data.businesses);
      setErrorMesage('');
    } catch (error) {
      setErrorMesage('Balantı Hatası')
    }

    
  };
  useEffect(() => {
    searchApi('Toast');
  }, []);

  return [searchApi, results, errorMesage];
};

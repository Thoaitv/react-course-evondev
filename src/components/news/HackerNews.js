import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import lodash from 'lodash';

const HackerNews = () => {
  const [hints, setHints] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFetchData = useRef({});

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);

  handleFetchData.current = async () => {
    setLoading(true);

    try {
      const respons = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      // `http://103.216.113.130:8008/api/v1/category/get_all_parent/`;
      console.log('handleFetchData: ', respons);

      setHints(respons.data?.hits || []);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }

    //respons.data?.hits
    //<=>
    // if (respons.data) {
    //   console.log(respons.data.hits);
    // }
    //
  };

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-3/4">
      <input
        type="text"
        className="border border-gray-500 p-5 mb-5 block rounded-md w-full focus:border-blue-400 transition-all"
        defaultValue={query}
        onChange={handleUpdateQuery}
        placeholder="typing"
      />

      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}

      {!loading && errorMessage && <p>{errorMessage}</p>}

      <div className="flex flex-wrap gap-5">
        {!loading &&
          hints.length > 0 &&
          hints.map((item, index) => (
            <h3 key={item.title} className="p-3 bg-gray-100 rounded-md ">
              {item.title}
            </h3>
          ))}
        {/* hints.map((item, index) => <h3>{item.parent}</h3>)} */}
      </div>
    </div>
  );
};

export default HackerNews;

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const HackerNews = () => {
  const [hints, setHints] = useState([]);
  const [query, setQuery] = useState('react');
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    const respons = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    console.log('handleFetchData: ', respons);
    setHints(respons.data?.hits || []);
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
    <div>
      <input
        type="text"
        className="border border-green-500 text-black p-5 mb-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {hints.length > 0 &&
        hints.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default HackerNews;

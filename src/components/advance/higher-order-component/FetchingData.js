import React from 'react';
import withLoading from './withLoading';

const FetchingData = ({ data }) => {
  console.log('FetchingData', data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default withLoading(
  FetchingData,
  'https://hn.algolia.com/api/v1/search?query=demo'
);

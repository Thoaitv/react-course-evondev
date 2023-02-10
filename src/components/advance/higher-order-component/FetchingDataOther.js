import React from 'react';
import withLoading from './withLoading';

const FetchingDataOther = ({ data }) => {
  console.log('FetchingDataOther', data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default withLoading(
  FetchingDataOther,
  'https://hn.algolia.com/api/v1/search?query=FetchingDataOther'
);

// Higher order Component: Chia se logic giua cac component
/* 

*/

// custome hook
// Render props

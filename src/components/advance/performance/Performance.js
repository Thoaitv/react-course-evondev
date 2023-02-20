import React, { useCallback, useState } from 'react';
import Count from './Count';

const Performance = () => {
  const [filter, setFilter] = useState('');

  const calculate = useCallback(() => {
    setFilter('');
  }, [setFilter]);
  return (
    <div>
      <input
        type="text"
        className="p-3 rounded border border-gray-300"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <Count calculate={calculate} />
    </div>
  );
};

export default Performance;

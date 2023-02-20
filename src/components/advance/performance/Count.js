import React, { useRef, useState } from 'react';

const Count = React.memo(({ calculate }) => {
  const [count, setCount] = useState(0);
  const renderRef = useRef(0);
  return (
    <div>
      <div>Count :{count}</div>
      <div>Renders: {renderRef.current++}</div>
      <button
        className="p-3 rounded bg-blue-400 text-white"
        onClick={() => setCount((c) => c + 1)}>
        Count
      </button>
    </div>
  );
});

export default Count;

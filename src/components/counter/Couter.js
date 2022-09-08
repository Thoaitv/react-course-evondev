import React, { useEffect, useState } from 'react';

const Counter = () => {
  // stale state
  const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setTimeout(function delay() {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   };

  const [info, setInfo] = useState({
    firstName: 'Thoai',
    lastName: 'TV',
  });

  useEffect(() => {
    console.log('from input');
  }, [info.lastName]);

  //   useEffect(() => {
  //     console.log(`count: ${count}`);
  //   }, []);

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) =>
          setInfo({
            ...info,
            firstName: e.target.value,
          })
        }
      />

      <span className="text-2xl font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white "
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

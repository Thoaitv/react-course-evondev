import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [message, setMessage] = useState('Thoai');

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [message]);

  return (
    <div>
      <input
        className="border-2 border-indigo-600"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;

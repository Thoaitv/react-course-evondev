import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const CountContext = createContext();

// custom hook Count.
// Thông báo khi không bao bọc Provider
function useCount() {
  const context = useContext(CountContext);
  if (typeof context === 'undefined') {
    throw new Error('useContext');
  }
  return context;
}

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return <CountContext.Provider value={value} {...props} />;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>Count: {count}</div>;
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <button onClick={increment} className="text-white bg-purple-700">
      Click to increment Count
    </button>
  );
}

const ContextDemoCount = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default ContextDemoCount;

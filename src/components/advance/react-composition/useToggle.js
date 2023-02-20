import React, { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState(false);
  console.log(value);

  const handleToggle = () => {
    setValue((previous) => !previous);
  };
  return {
    value,
    handleToggle,
  };
};

export default useToggle;

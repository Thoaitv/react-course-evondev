import React, { useState } from 'react';

const useToggle = () => {
  const [value, setValue] = useState(false);

  const handleToggle = () => {
    setValue((previous) => !previous);
  };
  return {
    value,
    handleToggle,
  };
};

export default useToggle;

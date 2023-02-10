import React, { useState } from 'react';
import useToggle from './useToggle';

const Editable = () => {
  const { value: edit, handleToggle: handleToggleEdit } = useToggle();
  
  return (
    <div>
      {edit && <input type="text" className="px-3 rounded-sm border" />}
      <button onClick={handleToggleEdit}>open edit</button>
    </div>
  );
};

export default Editable;

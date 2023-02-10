import React, { useState } from 'react';

// lifting state
const HandleValue = () => { 
  return <Input render={(value) => <DisplayValue value={value} />} />;
};

const Input = (props) => {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        type="text"
        className="p-3 rounded-sm border border-gray-500 w-full max-w-[500px]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {props.render(value)}
    </>
  );
};
const DisplayValue = ({ value }) => {
  return <span>{value}</span>;
};

export default HandleValue;

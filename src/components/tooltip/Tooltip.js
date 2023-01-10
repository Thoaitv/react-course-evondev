import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="p-10 ">
      <TooltopContent>{children}</TooltopContent>
      <span>{text}</span>
    </div>
  );
};

function TooltopContent({ children }) {
  return (
    <p className="inline-block p-3 text-white bg-black rounded-xl">
      {children}
    </p>
  );
}

export default Tooltip;

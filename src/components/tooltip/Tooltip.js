import React, { useState } from 'react';
import useHover from '../hooks/useHover';
import ReactDOM from 'react-dom';

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();

  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
    console.log(e.target.getBoundingClientRect());
  };
  return (
    <div className="p-16 mt-16 ml-16 overflow-hidden">
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  console.log('TooltipContent ~ coords', coords);
  return ReactDOM.createPortal(
    <p
      className="p-3 bg-black text-white rounded-xl inline-block absolute -translate-y-full max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2 + window.scrollY,
        left: coords.left + coords.width / 2,
      }}>
      {children}
    </p>,
    document.querySelector('body')
  );
}

export default Tooltip;

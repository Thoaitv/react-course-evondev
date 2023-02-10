import React from 'react';

const AccordionHeader = ({ show, handleToggleShow }) => {
  return (
    <div className="header cursor-pointer" onClick={handleToggleShow}>
      Accordion header
      {show ? <span>-</span> : <span>+</span>}
    </div>
  );
};

export default AccordionHeader;

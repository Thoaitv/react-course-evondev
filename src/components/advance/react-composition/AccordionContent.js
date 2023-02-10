import React from 'react';

const AccordionContent = (show) => {
  console.log('show', show);
  return <div>{show && <div className="content">content</div>}</div>;
};

export default AccordionContent;

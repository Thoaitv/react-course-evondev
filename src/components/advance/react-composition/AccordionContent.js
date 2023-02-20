import React, { Fragment } from 'react';
import { useAccordion } from './accordion-context';

const AccordionContent = ({ children }) => {
  const { show } = useAccordion();

  return (
    <Fragment>
      {show && (
        <div className="content p-4 border border-gray-200 rounded-lg mt-2">
          <span>{children}</span>
        </div>
      )}
    </Fragment>
  );
};

export default AccordionContent;

import React, { useState } from 'react';
import { AccordionProvider } from './accordion-context';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';
import useToggle from './useToggle';

// Specialized component: Nhận vào 1 props, thực hiện 1 chức năng cụ thể
// Container component: Cpn cha, swap lại các specialized cpn bên trong

//Accordion: Container component
const Accordion = ({ header, children }) => {
  // const { value: show, handleToggle: handleToggleShow } = useToggle();
  // console.log(children);

  return (
    <AccordionProvider>
      <div className="mb-5">
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </AccordionProvider>
    // <div className="mb-5">
    //   <AccordionHeader show={show} handleToggleShow={handleToggleShow}>
    //     {header}
    //   </AccordionHeader>
    //   <AccordionContent show={show}>{children}</AccordionContent>
    // </div>
  );
};

export default Accordion;

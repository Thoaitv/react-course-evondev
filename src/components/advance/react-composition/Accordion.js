import React, { useState } from 'react';
import AccordionContent from './AccordionContent';
import AccordionHeader from './AccordionHeader';
import useToggle from './useToggle';

// Specialized component: Nhận vào 1 props, thực hiện 1 chức năng cụ thể
// Container component: Cpn cha, swap lại các specialized cpn bên trong

const Accordion = () => {
  const { value: show, handleToggle: handleToggleShow } = useToggle();

  return (
    <div>
      <AccordionHeader show={show} handleToggleShow={handleToggleShow} />
      <AccordionContent show={show} />
    </div>
  );
};

export default Accordion;

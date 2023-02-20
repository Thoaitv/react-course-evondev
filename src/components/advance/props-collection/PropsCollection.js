import React, { useState } from 'react';
import Switch from './Switch';

function UseToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  function getToggleProps(props) {
    return {
      onClick: toggle,
      ...props,
    };
  }
  return {
    on,
    toggle,
    // toggleProps: {
    //   onClick: toggle,
    // },
    getToggleProps,
  };
}

const PropsCollection = () => {
  // const { on, toggle } = UseToggle();
  const { on, toggleProps, getToggleProps } = UseToggle();
  console.log(on);
  return (
    <div>
      {/* <Switch on={on} {...toggleProps} /> */}
      <Switch {...getToggleProps({ on })} />
      <hr />
      <button
        {...getToggleProps({
          onClick: () => console.log('toggle click'),
        })}
        // onClick={() => {
        //   console.log('Toggle button');
        //   // toggle();
        // }}
        {...toggleProps}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  );
};

export default PropsCollection;

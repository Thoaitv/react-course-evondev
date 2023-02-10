import React from 'react';

const Title = (props) => {
  // c1  // return props.render();
  //c2:
  return props.children();
};

export default Title;

import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 90px 30px;
  background-color: #ccc;
`;

const CardList = (props) => {
  return <StyledCardList>{props.children}</StyledCardList>;
};

export default CardList;


//@flow
import React from 'react';
import styled from 'styled-components';
import { Animations } from '../styles';
import SpinnerIcon from '../assets/icons/spinner.svg';

const Spinner = () => (
  <$Spinner>
    <SpinnerIcon/>
  </$Spinner>
);

export default Spinner;

const $Spinner = styled.div`
  ${Animations.spin(true, 0.6)}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

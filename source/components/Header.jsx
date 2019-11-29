import React, { useState, useEffect } from 'react';
import styled, { css }from 'styled-components';
import Logo_svg from '../assets/icons/logo_inner.svg';
import { Color } from '../styles';

const Header = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return(
    <$Header isMounted={isMounted}>
      <Logo_svg width='36px' height='36px' />
    </$Header>
  );
};

export default Header;

//#region Styled components
const $Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;

  svg {
    margin: 0 16px;
    position: relative;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0.5);
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${Color.gray[200]}, 0 0 0 6px transparent;
    transition: transform .7s .1s cubic-bezier(0.19, 1, 0.22, 1), opacity .7s .1s ease, box-shadow .7s .25s ease;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 0%;
    height: 1px;
    background: ${Color.gray[300]};
    transition: width .4s .5s ease;
    transform-origin: 100% 50%;
  }

  &:after {
    transform-origin: 0% 50%;
  }

  ${({ isMounted }) => isMounted ? css`
    svg {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 0 0 5px ${Color.gray[200]}, 0 0 0 6px ${Color.purple};
    }

    &::before,
    &::after {
      content: '';
      display: block;
      width: 50%;
      height: 1px;
      background: ${Color.gray[300]};
    }
  ` : ''}
`;
//#endregion

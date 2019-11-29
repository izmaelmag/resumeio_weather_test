import React from 'react';
import styled from 'styled-components';

const $Header = styled.header`
  &::before,
  &::after {
    content: '1';
  }
`

const Header = () => (
  <$Header>

  </$Header>
);

export default Header;

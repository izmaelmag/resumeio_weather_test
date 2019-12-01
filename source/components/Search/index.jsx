import React, { useState } from 'react';
import styled from 'styled-components';
import { Color, Font } from '../../styles';
import Results from './Results';

const SearchForm = () => {
  const [searchText, setSearchText] = useState('');

  return(
    <$Search>
      <$Search.input
        value={searchText}
        type='text'
        placeholder='Search'
        onChange={({ currentTarget }) => setSearchText(currentTarget.value)}
      />

      <$Search.button onClick={() => false} />

      <$Search.results>
        <Results />
      </$Search.results>
    </$Search>
  );
};

export default SearchForm;

//#region Styled components
const $Search = styled.form`
  position: relative;
  max-width: calc(100% - 128px);
  width: 100%;
  display: flex;
  align-items: stretch;
  height: 48px;
  border-radius: 8px;
  z-index: 1;
`;

$Search.input = styled.input`
  ${Font.text}
  
  background: ${Color.gray[300]};
  border-radius: 8px 0 0 8px;
  padding: 12px 16px;
  color: ${Color.gray[500]};
  border: none;
  box-shadow: none;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

$Search.button = styled.button`
  width: 48px;
  border-radius: 0 8px 8px 0;
  border: none;
  box-shadow: none;
  flex-shrink: 0;
  background: ${Color.purple};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

$Search.results = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 56px;
  width: 100%;
  height: auto;
  max-height: 254px;
  min-height: 84px;
  background: ${Color.white};
  border-radius: 8px;
  box-shadow: 0 6px 12px ${Color.shadow};
`;
//#endregion

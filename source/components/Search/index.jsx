//@flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { Color, Font, Animations, Media } from '../../styles';
import Results from './Results';
import { searchDataMock } from '../../data'; 
import type { CityT } from '../../typeDefs';
import SearchIcon from '../../assets/icons/search.svg';

const SearchForm = () => {
  const [citiesList, setCitiesList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isResultsVisible, setResultsVisibility] = useState(false);

  const filterSearch = () => {
    if (searchText) {
      setResultsVisibility(true);
    }

    const cities = searchDataMock.filter((city: CityT) => {
      return city.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setCitiesList(cities);
  };

  const handleInputChange = ({ currentTarget }) => {
    setSearchText(currentTarget.value);
    setResultsVisibility(false);
  };

  return(
    <$Search onSubmit={(e) => e.preventDefault()}>
      <$Search.input
        value={searchText}
        type='text'
        placeholder='Search'
        onChange={handleInputChange}
      />

      <$Search.button onClick={filterSearch}>
        <SearchIcon />
      </$Search.button>

      {
        (searchText && isResultsVisible) && (
          <$Search.results>
            <Results
              onSelect={() => setSearchText('')}
              searchText={searchText}
              cities={citiesList}
            />
          </$Search.results>
        )
      }
    </$Search>
  );
};

export default SearchForm;

//#region Styled components
const $Search = styled.form`
  ${Animations.fadeInBottom(0.6, 0.1)}

  position: relative;
  max-width: calc(100% - 133px);
  min-width: 300px;
  width: 100%;
  display: flex;
  align-items: stretch;
  height: 48px;
  border-radius: 8px;
  z-index: 1;

  ${Media.mobile`
    width: 100%;
    max-width: 100%;
  `}
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
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }

  svg path {
    fill: ${Color.white};
  }
`;

$Search.results = styled.div`
  ${Animations.fadeInTop(0.7)}

  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 56px;
  width: 100%;
  height: auto;
  max-height: 254px;
  min-height: 84px;
  background: ${Color.white};
  border-radius: 8px;
  box-shadow: 0 6px 12px ${Color.shadow};
  overflow: auto;

  strong {
    ${Font.mark}
  }

  span {
    ${Font.label}
  }

  ::-webkit-scrollbar {
    width: 1px;
    height: 100%;
    opacity: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent};
    transition: all .3s ease;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: ${Color.purple};
    }
  }

  ${Media.mobile`
    width: calc(100% + 16px);
    left: -8px;
  `}
`;
//#endregion

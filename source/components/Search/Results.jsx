import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import Spinner from '../Spinner'; 
import { CityT } from '../CityCard';
import { Font } from '../../styles';

type SearchResultsProps = {
  cities: CityT[],
  searchText: string,
  onSelect: () => void
}

const Results = ({ cities, searchText, onSelect }: SearchResultsProps) => {
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  });

  if (isLoading) {
    return(
      <$Results> <Spinner /> </$Results>
    );
  }

  if (cities && cities.length) {
    return (
      <$Results>
        { cities.map(city => <ResultCard key={city.id} city={city} onSelect={onSelect} />) }
      </$Results>
    );
  }

  return(
    <$Results>
      <strong>City called “{searchText}” was not found</strong>
      <span>Try different city name</span>
    </$Results>
  );
};

export default Results;

//#region Styled components
const $Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-radius: 8px;

  strong {
    ${Font.mark}
  }

  span {
    ${Font.label}
  }
`;
//#endregion

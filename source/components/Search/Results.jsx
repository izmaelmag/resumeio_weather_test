//@flow
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import Spinner from '../Spinner'; 
import type { SearchResultsProps } from '../../typeDefs';
import { Animations } from '../../styles';

const Results = ({ cities, searchText, onSelect }: SearchResultsProps) => {
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadingState(false), 1000);
  });

  if (isLoading) {
    return(
      <$Results> <Spinner /> </$Results>
    );
  }

  if (cities && cities.length) {
    return (
      <>
        {cities.map(city => <ResultCard key={city.id} city={city} onSelect={onSelect} />)}
      </>
    );
  }

  return(
    <$Results>
      <$NoResults>
        <strong>City called “{searchText}” was not found</strong>
        <span>Try different city name</span>
      </$NoResults>
    </$Results>
  );
};

export default Results;

//#region Styled components
const $Results = styled.div`
  ${Animations.fadeIn(0.3, 0.1)}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-radius: 8px;
`;

const $NoResults = styled.div`
  padding: 8px 16px;
  text-align: center;
  
  strong {
    display: block;
  }
`;
//#endregion

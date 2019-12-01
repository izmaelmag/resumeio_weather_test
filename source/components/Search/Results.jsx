import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ResultCard from './ResultCard';
import Spinner from '../Spinner'; 
import { CityT } from '../CityCard';
import { Font,  Color } from '../../styles';

type SearchResultsProps = {
  results: CityT[],
  searchString: string
}

const Results = ({ results, searchString }: SearchResultsProps) => {
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1000);
  });

  if (isLoading) {
    return(
      <$Results>
        <Spinner />
      </$Results>
    );
  }

  if (results && results.length) {
    return (
      <$Results>
        { results.map(city => <ResultCard key={city.id} city={city} />) }
      </$Results>
    );
  }

  return(
    <$Results>
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      {/* <strong>City called “{searchString}” was not found</strong>
      <span>Try different city name</span> */}
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
  overflow: auto;
  border-radius: 8px;

  scrollbar-color: ${Color.purple} ${Color.gray[300]};

  ::-webkit-scrollbar {
    width: 1px;
    height: 100%
  }

  ::-webkit-scrollbar-track {
    background: ${Color.gray[300]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Color.purple};
  }

  strong {
    ${Font.mark}
  }

  span {
    ${Font.label}
  }
`;
//#endregion

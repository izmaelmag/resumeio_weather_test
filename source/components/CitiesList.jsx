//@flow
import React from 'react';
import styled from 'styled-components';
import CityCard from './CityCard';
import { Grid, Cell } from 'styled-css-grid';
import { AppContext, providerValuesT } from './App';

export default class CitiesList extends React.Component {
  render() {
    return(
      <$Cities columns={2} rowGap='24px' columnGap='32px'>
        <AppContext.Consumer>
          {
            ({ cities }: providerValuesT) => {
              return cities.map(city => (
                <Cell key={city.id}>
                  <CityCard {...city} />
                </Cell>
              ));
            }
          }
        </AppContext.Consumer>
      </$Cities>
    );
  }
}

const $Cities = styled(Grid)`
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;    
  }
`;

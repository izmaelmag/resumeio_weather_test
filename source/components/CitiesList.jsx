//@flow
import React from 'react';
import styled from 'styled-components';
import CityCard from './CityCard';
import { Grid, Cell } from 'styled-css-grid';
import { Media } from '../styles';
import { AppContext } from './App';
import type { AppProviderValuesT } from '../typeDefs';

export default class CitiesList extends React.Component<{}> {
  render() {
    return(
      <$Cities columns={2} rowGap='24px' columnGap='32px'>
        <AppContext.Consumer>
          {
            ({ cities }: AppProviderValuesT) => cities.map(city => (
              <$Cell_City key={city.id}>
                <CityCard {...city} />
              </$Cell_City>
            ))
          }
        </AppContext.Consumer>
      </$Cities>
    );
  }
}

//#region Styled components
const $Cities = styled(Grid)`
  width: 100%;

  ${Media.tablet`
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  `}

  ${Media.mobile`
    grid-row-gap: 16px;
  `}
`;

const $Cell_City = styled(Cell)`
  ${Media.mobile`
    grid-column-end: span 2;
  `}
`;
//#endregion

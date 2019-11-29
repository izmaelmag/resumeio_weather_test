import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";

import Header from './Header';
import SearchForm from './Search';
import CityCard from './CityCard';

import { Font, Color, Animations } from '../styles';

export default class App extends React.Component {
  render() {
    return(
      <$Container columns={2} gap='32px' columnGap='24px'>
        <Cell width={2}>
          <Header />
        </Cell>

        <$Cell_Title width={1}>
          <$Title>Weather forecast</$Title>
          <$Subtitle>Simple but powerful weather forcasting service based on OpenWeatherMap API</$Subtitle>
        </$Cell_Title>

        <$Cell_SearchForm width={1}>
          <SearchForm />
        </$Cell_SearchForm>

        <Cell width={2}>
          <$Cities columns={2} rowGap='24px' columnGap='32px'>
            <Cell>
              <CityCard />
            </Cell>
            <Cell>
              <CityCard />
            </Cell>
            <Cell>
              <CityCard />
            </Cell>
          </$Cities>
        </Cell>
      </$Container>
    );
  }
}

//#region Styled Components
const $Container = styled(Grid)`
  padding: 24px 0; 
  max-width: 992px;
  margin: 0 auto;
`;

const $Cities = styled(Grid)`
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;    
  }
`;

const $Title = styled.h1`
  ${Font.title}
  ${Animations.fadeIn(.5, .2)}

  color: ${Color.gray[500]};
  margin: 0 0 16px;
`;

const $Subtitle = styled.div`
  ${Font.subtitle}
  ${Animations.fadeIn(.5, .3)}

  color: ${Color.gray[400]};
`;

const $Cell_SearchForm = styled(Cell)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 800px) {
    grid-column-end: span 2;
    justify-content: flex-start; 
  }
`;

const $Cell_Title = styled(Cell)`
  @media (max-width: 800px) {
    grid-column-end: span 2;    
  }
`;
//#endregion

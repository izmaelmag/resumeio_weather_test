import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import { Font, Color,  Animations } from '../styles';
import { Grid, Cell } from "styled-css-grid";

const $Container = styled(Grid)`
  padding: 24px 0; 
  max-width: 992px;
  margin: 0 auto;
`;

const $Title = styled.h1`
  ${Font.title}
  ${Animations.fadeIn(.5, .2)}

  color: ${Color.gray[500]};
  margin: 32px 0 16px;
`;

const $Subtitle = styled.div`
  ${Font.subtitle}
  ${Animations.fadeIn(.5, .3)}

  color: ${Color.gray[400]};
`;

export default class App extends React.Component {
  render() {
    return(
      <$Container columns={2} gap={32}>
        <Cell width={2}>
          <Header />
        </Cell>

        <Cell width={1}>
          <$Title>Weather forecast</$Title>
          <$Subtitle>Simple but powerful weather forcasting service based on OpenWeatherMap API</$Subtitle>
        </Cell>

        <Cell width={1} middle center>
          search
        </Cell>

        <Cell width={2}>
          cards
        </Cell>
      </$Container>
    );
  }
}

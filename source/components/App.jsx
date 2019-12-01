//@flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";

import Header from './Header';
import SearchForm from './Search';
import CitiesList from './CitiesList';
import { CityT } from './CityCard';

import { Font, Color, Animations, Media } from '../styles';
import { defaultWeatherData } from '../data';

export const AppContext = React.createContext();

export type providerValuesT = {
  cities: CityT[],
  removeCity: (cityId: number) => void,
  addCity: (newCity: CityT) => void
}

class App extends React.Component {
  state = {
    cities: defaultWeatherData.cities
  }

  removeCity = (cityId: number) => {
    const cities = this.state.cities.filter(city => city.id !== cityId);

    this.setState({ cities });
  }

  isCitySelected = (id) => this.state.cities.filter(city => city.id === id).length

  addCity = (newCity: CityT) => {
    if (!this.isCitySelected(newCity.id)) {
      const cities = [newCity, ...this.state.cities];
  
      this.setState({ cities });
    }
  }

  render() {
    const providerValue: providerValuesT = {
      cities: this.state.cities,
      removeCity: this.removeCity,
      addCity: this.addCity
    };

    return(
      <AppContext.Provider value={providerValue}>
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
            <CitiesList />
          </Cell>
        </$Container>
      </AppContext.Provider>
    );
  }
}

export default App;

//#region Styled Components
const $Container = styled(Grid)`
  padding: 24px; 
  max-width: 992px;
  margin: 0 auto;

  ${Media.tablet`
    padding: 16px 20px;
    grid-row-gap: 20px;
  `}

  ${Media.mobile`
    padding: 8px 16px;
    grid-row-gap: 16px;
  `}
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

  ${Media.mobile`
    grid-column-end: span 2;
    justify-content: flex-start; 
  `}
`;

const $Cell_Title = styled(Cell)`
  ${Media.mobile`
    grid-column-end: span 2;
  `}
`;
//#endregion

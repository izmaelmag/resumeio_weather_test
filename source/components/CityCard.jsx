//@flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { Color, Font, Animations } from '../styles';
import DeleteButton from './DeleteButton';
import WeatherDetail from './WeatherDetail';
import { AppContext, providerValuesT } from './App';

export type CityT = {
  id: number,
  name: string,
  location: {
    lat: number,
    lng: number
  },
  weather: {
    humidity: number,
    pressure: number,
    clouds: string,
    wind: number,
    temperature: {
      celsium: number
    }
  }
};

const CityCard = ({ id, name, weather }: CityT) => {
  const [isUnmounting, setUnmountingState] = useState(false);

  const unmountAnimation = (removeCallback) => {
    setUnmountingState(true);

    setTimeout(() => removeCallback(id), 550);
  };

  return(
    <AppContext.Consumer>
      {
        ({ removeCity }: providerValuesT) => (
          <$Card isUnmounting={isUnmounting}>
            <$Card.main>
              <DeleteButton onClick={() => unmountAnimation(removeCity)} />
              <$CityName>{name}</$CityName>
              <$Temperature>{weather.temperature.celsium}°C</$Temperature>
              <$Clouds>{weather.clouds}</$Clouds>
            </$Card.main>
      
            <$Card.details>
              <WeatherDetail type='wind' value={weather.wind} />
              <WeatherDetail type='humidity' value={weather.humidity} />
              <WeatherDetail type='pressure' value={weather.pressure} />
            </$Card.details>
          </$Card>
        )
      }
    </AppContext.Consumer>
  );
};

export default CityCard;

//#region Styled components
const $Card = styled.div`
  ${({ isUnmounting }) => isUnmounting ? Animations.fadeOutBottom(0.5) : Animations.fadeIn(0.6, 0.1)}

  position: relative;
  background: ${Color.white};
  border-radius: 16px;
`;

$Card.main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 104px 32px 32px;
`;

$Card.details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  border-top: 1px solid ${Color.gray[200]};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const $CityName = styled.span`
  ${Font.caption}
  ${Animations.fadeIn(.6, .1)}

  color: ${Color.purple};
  margin-bottom: 20px;
`;

const $Temperature = styled.span`
  ${Font.display}
  ${Animations.fadeInTop()}

  color: ${Color.gray[500]};
  margin-bottom: 4px;
`;

const $Clouds = styled.span`
  ${Font.label}
  ${Animations.fadeInBottom()}

  color: ${Color.gray[400]};
`;
//#endregion

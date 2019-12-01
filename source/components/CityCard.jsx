//@flow
import React, { useState } from 'react';
import styled from 'styled-components';
import { Color, Font, Animations, Media } from '../styles';
import DeleteButton from './DeleteButton';
import WeatherDetail from './WeatherDetail';
import { AppContext, providerValuesT } from './App';
import CloudsIcon from '../assets/icons/clouds.png';

console.log(CloudsIcon);

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
              <$Temperature>
                {weather.temperature.celsium}°C
                <img src={CloudsIcon} alt={weather.clouds} />
              </$Temperature>
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
  border-radius: 24px;

  ${Media.tablet`
    border-radius: 16px;
  `}

  ${Media.mobile`
    border-radius: 12px;
  `}
`;

$Card.main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 104px 32px 32px;

  ${Media.tablet`
    padding: 20px 80px 20px 20px;
  `}

  ${Media.mobile`
    padding: 16px 80px 16px 20px;
  `}
`;

$Card.details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  border-top: 1px solid ${Color.gray[200]};
  display: flex;
  flex-direction: row;
  align-items: center;

  ${Media.tablet`
    padding: 20px;
  `}

  ${Media.mobile`
    padding: 16px 20px;
  `}
`;

const $CityName = styled.span`
  ${Font.caption}
  ${Animations.fadeIn(.6, .1)}

  color: ${Color.purple};
  margin-bottom: 20px;

  ${Media.tablet`
    margin-bottom: 16px;
  `}

  ${Media.mobile`
    margin-bottom: 8px;
  `}
`;

const $Temperature = styled.span`
  ${Font.display}
  ${Animations.fadeInTop()}

  display: flex;
  align-items: center;
  color: ${Color.gray[500]};
  margin-bottom: 4px;

  img {
    margin-left: 16px;

    ${Media.mobile`
      height: 40px;
    `}
  }
`;

const $Clouds = styled.span`
  ${Font.label}
  ${Animations.fadeInBottom()}

  color: ${Color.gray[400]};
`;
//#endregion

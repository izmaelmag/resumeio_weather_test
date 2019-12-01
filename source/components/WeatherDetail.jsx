//@flow
import React from 'react';
import styled from 'styled-components';
import { Color, Font, Animations } from '../styles';
import { DetailTypesIcons, DetailTypesMeasures } from '../constants';

type WeatherDetailProps = {
  type: string,
  value: string | number
};

const WeatherDetail = ({ type, value }: WeatherDetailProps) => {
  const Icon = DetailTypesIcons[type];

  return(
    <$WeatherDetail>
      <Icon />
      <span>{value}&nbsp;{DetailTypesMeasures[type]}</span>
    </$WeatherDetail>
  );
};

export default WeatherDetail;

//#region Styled components
const $WeatherDetail = styled.div`
  ${Animations.fadeInBottom(0.5, 0.1)};

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  display: flex;
  align-items: center;
  margin-right: 32px;

  span {
    margin-left: 4px;
    ${Font.text}
    color: ${Color.gray[500]};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
//#endregion

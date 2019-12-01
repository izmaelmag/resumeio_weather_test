import React from 'react';
import styled from 'styled-components';
import CityT from '../CityCard';
import AddIcon from '../../assets/icons/add.svg';
import { Color, Font } from '../../styles';

const ResultCard = ({ name, location }: CityT) => {
  return(
    <$ResultCard>
      <div>
        <strong>London</strong>
        <span>42.87823, 13.68274</span>
      </div>

      <$ResultCard.button>
        <AddIcon />
      </$ResultCard.button>
    </$ResultCard>
  );
};

export default ResultCard;

//#region Styled components
const $ResultCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  box-sizing: border-box;
  cursor: pointer;
  background: ${Color.white};
  transition: background-color .3s ease;

  strong {
    ${Font.mark}
    display: block;
    color: ${Color.gray[500]};
    transition: color .3s ease;
  }

  span {
    color: ${Color.gray[400]};
    transition: color .3s ease;
  }

  &:hover {
    background: ${Color.gray[100]};

    strong, span {
      color: ${Color.purple};
    }
  }
`;

$ResultCard.button = styled.button`
  border: none;
  background: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    svg path {
      transition: fill .3s ease;
      fill: ${Color.gray[500]};
    }
  }
`;
//#endregion

//@flow
import React from 'react';
import styled from 'styled-components';
import CityT from '../CityCard';
import AddIcon from '../../assets/icons/add.svg';
import { Color, Font } from '../../styles';
import { AppContext } from '../App';

type ResultCardProps = {
  city: CityT,
  onSelect: () => void
}

const ResultCard = ({ city, onSelect }: ResultCardProps) => {
  return(
    <AppContext.Consumer>
      {
        ({ addCity }) => (
          <>
            <$ResultCard onClick={() => {
              addCity(city);
              onSelect();
            }}>
              <div>
                <strong>{city.name}</strong>
                <span>{city.location.lat},&nbsp;{city.location.lng}</span>
              </div>
        
              <$ResultCard.button>
                <AddIcon />
              </$ResultCard.button>
            </$ResultCard>
          </>
        )
      }
    </AppContext.Consumer>
  );
};

export default ResultCard;

//#region Styled components
const $ResultCard = styled.div`
  position: relative;
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

  &:focus-within,
  &:hover {
    background: ${Color.gray[100]};

    strong, span {
      color: ${Color.purple};
    }
  }

  &:not(:last-child)::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 24px;
    height: 1px;
    background: ${Color.gray[200]};
    width: calc(100% - 48px);
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

  &:focus {
    outline: none;
  }
`;
//#endregion

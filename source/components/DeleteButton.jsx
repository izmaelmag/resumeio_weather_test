//@flow
import React from 'react';
import styled from 'styled-components';
import { Color } from '../styles';
import DeleteIcon from '../assets/icons/delete.svg';

type DeleteButtonProps = {
  onClick: () => void
};

const DeleteButton = ({ onClick }: DeleteButtonProps) => (
  <$Delete onClick={onClick}>
    <DeleteIcon />
  </$Delete>
);

export default DeleteButton;

//#region Styled components
const $Delete = styled.button`
  border: none;
  background: ${Color.white};
  position: absolute;
  top: 24px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid ${Color.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${Color.purple};
      transition: fill .4s ease;
    }
  }
`;
//#endregion

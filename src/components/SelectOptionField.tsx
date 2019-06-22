import React from 'react';
import {styled} from '../theme';

const SelectOptionField = styled.option`
  color: black;
  padding: 10px 5px;
  border: none;
  text-align: center;
  width: 100%;
  border: 2px solid transparent;
  :focus {
    outline: none;
    border: 2px solid ${props => props.theme.palette.focus};
  }
`;

export default SelectOptionField;

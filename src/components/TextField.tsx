import React from 'react';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

const StyledTextField = styled.input`
  color: '#fff';
`;

export const TextField: React.FC<Props> = props => (
  <StyledTextField {...props} />
);

export default TextField;

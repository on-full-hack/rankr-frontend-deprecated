import React from 'react';
import AppTitle from './AppTitle';

type Props = {
  title?: string;
};

export const AppBar: React.FC<Props> = ({title = 'Rankr'}) => (
  <div>
    <AppTitle primary>{title}</AppTitle>
  </div>
);

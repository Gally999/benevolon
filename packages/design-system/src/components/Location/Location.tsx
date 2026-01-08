import React from 'react';
import './Location.css';
import { TextWithIcon } from '../TextWithIcon/TextWithIcon';

export interface LocationProps {
  location: string;
  className?: string;
}

export const Location: React.FC<LocationProps> = ({
  location,
  className = '',
}) => {

  return (
    <TextWithIcon
      text={location}
      icon="MapPin"
      iconPosition="left"
      className={`ds-Location ${className}`}
    />
  );
};
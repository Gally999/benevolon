import React from 'react';
import { DateComponent } from '../Date/DateComponent';
import { TextWithIcon } from '../TextWithIcon/TextWithIcon';
import { Badge } from '../Badge/Badge'; // Assumant que Badge existe
import { Icon } from '../Icon/Icon';
import './Card.css';
import { IconPlaceholder } from '../IconPlaceholder';

export interface CardProps {
  title: string;
  icon: string;
  date: Date | string;
  city: string;
  location: string;
  onClick?: () => void; // Pour la navigation
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  date,
  city,
  location,
  onClick,
  className = '',
}) => {
  return (
    <div className={`ds-Card ${className}`} onClick={onClick}>
      <IconPlaceholder icon={icon} size={80} className="ds-Card__icon-placeholder" />
      <div className="ds-Card__content">
        <div className="ds-Card__header">
          <h3 className="ds-Card__title">{title}</h3>
          <Icon name="ChevronRight" size={20} className="ds-Card__chevron" />
        </div>
        <div className="ds-Card__meta">
          <DateComponent date={date} format="dd/MM/yyyy" />
          <span className="ds-Card__separator">•</span>
          <Badge label={city} />
        </div>
        <TextWithIcon
          text={location}
          icon="MapPin"
          iconPosition="left"
          className="ds-Card__location"
        />
      </div>
    </div>
  );
};
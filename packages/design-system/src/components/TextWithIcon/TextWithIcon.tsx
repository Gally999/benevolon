import React from 'react';
import { Icon } from '../Icon';
import './TextWithIcon.css';

export interface TextWithIconProps {
  text: string;
  icon: string; // Nom de l'icône Lucide (ex: 'Heart', 'Calendar')
  iconPosition?: 'left' | 'right';
  iconSize?: number;
  iconColor?: string;
  textSize?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  className?: string;

}

export const TextWithIcon: React.FC<TextWithIconProps> = ({
  text,
  icon,
  iconPosition = 'left',
  iconSize = 16,
  iconColor,
  textSize,
  className = '',
}) => {
  const iconElement = (
    <Icon
      name={icon as any}
      size={iconSize}
      color={iconColor}
      className="ds-TextWithIcon__icon"
    />
  );

  return (
    <div className={`ds-TextWithIcon ds-TextWithIcon--${iconPosition} ${className}`}>
      {iconPosition === 'left' && iconElement}
      <span className={`ds-TextWithIcon__text ${textSize ? `ds-TextWithIcon__text--${textSize}` : ''}`}>{text}</span>
      {iconPosition === 'right' && iconElement}
    </div>
  );
};
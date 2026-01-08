import React from 'react';
import { Icon } from '../Icon/Icon';
import './IconPlaceholder.css';

export interface IconPlaceholderProps {
  icon: string; // Nom de l'icône Lucide (ex: 'Music', 'Guitar', 'Bike')
  size?: number; // Taille du carré (par défaut 80px)
  className?: string;
}

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
  icon,
  size = 80,
  className = '',
}) => {
  return (
    <div
      className={`ds-IconPlaceholder ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon name={icon as any} size={size * 0.5} /> {/* Icône à 50% de la taille du carré */}
    </div>
  );
};
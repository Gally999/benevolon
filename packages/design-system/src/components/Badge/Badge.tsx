import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Contenu du badge */
  label: string;
  /** Variante visuelle */
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}


export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'neutral'
}) => {
  return (
    <span className={`badge badge--${variant}`}>
      {label}
    </span>
  );
}
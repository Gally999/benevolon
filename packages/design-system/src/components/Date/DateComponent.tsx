import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale'; // Pour le français, ajustez si besoin
import './DateComponent.css';
import { TextWithIcon } from '../TextWithIcon/TextWithIcon';

export interface DateProps {
  date: Date | string; // Accepte une Date ou une string ISO
  format?: string; // Format personnalisé (ex: 'dd/MM/yyyy', 'yyyy-MM-dd')
  className?: string;
}

export const DateComponent: React.FC<DateProps> = ({
  date,
  format: dateFormat = 'dd/MM/yyyy',
  className = '',
}) => {
  // Convertir en Date si c'est une string
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Formater la date avec date-fns
  const formattedDate = format(dateObj, dateFormat, { locale: fr });

  return (
    <TextWithIcon
      text={formattedDate}
      icon="Calendar"
      iconPosition="left"
      className={`ds-Date ${className}`}
    />
  );
};
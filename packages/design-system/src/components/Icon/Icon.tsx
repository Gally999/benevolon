import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number | string;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 16, color, className }) => {
  const IconComponent = LucideIcons[name] as React.ComponentType<any>;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icons.`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
    />
  );
};
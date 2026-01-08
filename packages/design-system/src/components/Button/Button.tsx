import React from "react";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color: string;
  onClick?: () => void;
}

export function Button({
  children,
  disabled = false,
  size = "medium",
  color = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`ds-Button ds-Button--${size} ${disabled ? "ds-Button--disabled" : ""} ds-Button--${color}-color`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
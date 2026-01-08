import React from "react";
import "./TextInput.css";

export interface TextInputProps {
  text: string;
  // disabled?: boolean;
  
  onChange?: () => void;
}

export function TextInput({
  text,
  // disabled = false,
  onChange,
}: TextInputProps) {
  return (
    <input
      type="text"
      className={`ds-TextInput`}
      // disabled={disabled}
      onChange={onChange}
      value={text}
    />
  );
}
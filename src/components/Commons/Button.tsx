import React, { type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, disabled }) => {
  return (
    <>
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
    </>
  );
};


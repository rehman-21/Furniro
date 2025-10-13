import React from "react";
interface InputProp {
  type: string;
  className: string;
  name: string;
  placeholder: string;
  label?: string;
  error?: string;
  value?: string | number;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

export const CustomInput: React.FC<InputProp> = ({
  type,
  className,
  name,
  placeholder,
  value,
  onChange,
  required,
  id
}) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        id={id}
      />
    </>
  );
};

import React from 'react';

interface InputProps {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'url';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
}) => {
  const baseClasses = 'w-full h-12 rounded-lg bg-black/[0.05] focus:outline-none focus:border-[#4522B4] border-b border-black/[0.1] px-3 form-input-email';
  
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default Input; 
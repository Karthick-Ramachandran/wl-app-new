import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  htmlFor,
  children,
  required = false,
  className = '',
}) => {
  const baseClasses = 'block text-left mb-2 form-label';
  
  return (
    <label htmlFor={htmlFor} className={`${baseClasses} ${className}`}>
      {children}
      {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label; 
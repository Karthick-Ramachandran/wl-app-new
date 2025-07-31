import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent | React.FormEvent) => void | Promise<void>;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  isLoading = false,
}) => {
  const baseClasses = 'font-basier-narrow-medium transition-colors cursor-pointer rounded-lg';
  
  const variantClasses = {
    primary: 'bg-[#4400B4] text-white hover:bg-[#4400B4]/90',
    secondary: 'bg-[#979187] text-white opacity-60 cursor-not-allowed',
    outline: 'bg-transparent border border-[#4400B4] text-[#4400B4] hover:bg-[#4400B4] hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-10',
    md: 'px-6 py-3 text-lg h-12',
    lg: 'px-8 py-4 text-xl h-14',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <motion.button
      type={type}
      onClick={onClick ? (e) => onClick(e) : undefined}
      disabled={disabled || isLoading}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {isLoading ? 'SUBMITTING...' : children}
    </motion.button>
  );
};

export default Button; 
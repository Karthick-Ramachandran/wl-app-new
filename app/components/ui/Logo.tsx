import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showCenterLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showCenterLogo = true,
}) => {
  const sizeClasses = {
    sm: 'h-[200px] sm:h-[280px]',
    md: 'h-[200px] sm:h-[280px] md:h-[420px]',
    lg: 'h-[300px] sm:h-[380px] md:h-[500px]',
  };
  
  const centerLogoSizeClasses = {
    sm: 'h-[80px] sm:h-[120px]',
    md: 'h-[80px] sm:h-[120px] md:h-[160px]',
    lg: 'h-[130px] sm:h-[150px] md:h-[170px]',
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`flex justify-center relative ${className}`}
    >
      <Image
        src="/logo.png"
        alt="HACC Logo"
        width={700}
        height={630}
        className={`w-auto ${sizeClasses[size]} max-w-full object-contain`}
      />
      
      {showCenterLogo && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute inset-0 flex items-center justify-center center-logo-container"
        >
          <Image
            src="/center.svg"
            alt="Center Logo"
            width={200}
            height={220}
            className={`w-auto ${centerLogoSizeClasses[size]}`}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Logo; 
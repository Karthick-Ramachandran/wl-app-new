import React from 'react';
import { Button } from '../ui';

const Navigation: React.FC = () => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      
    </div>
  );
};

export default Navigation; 
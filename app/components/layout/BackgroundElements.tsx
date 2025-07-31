import React from 'react';
import Image from 'next/image';

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* Noise overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-cover opacity-[0.5] noise-overlay" />

      {/* Ellipse background */}
      <Image
        src="/ui/Ellipse.png"
        alt="Ellipse Illustration"
        width={1000}
        height={1000}
        className="absolute top-1/2 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default BackgroundElements; 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlockRevealAnimation from 'react-block-reveal-animation';
import Image from 'next/image';
import { Button } from '../ui';
import '../../hero-responsive.css';

interface HeroSectionProps {
  onGetStarted: () => void;
}

interface ImagePosition {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  width: string;
  height: string;
  display?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const [imagePositions, setImagePositions] = useState<{
    image1: ImagePosition;
    image2: ImagePosition;
    image3: ImagePosition;
    image4: ImagePosition;
    image5: ImagePosition;
    image6: ImagePosition;
  }>({
    image1: { left: '-150px', top: '-8px', width: '200px', height: '300px' },
    image2: { bottom: '80px', right: '80px', width: '200px', height: '300px' },
    image3: { top: '150px', left: '40px', width: '150px', height: '225px' },
    image4: { bottom: '32px', left: '-150px', width: '200px', height: '200px' },
    image5: { bottom: '-32px', right: '-150px', width: '150px', height: '225px' },
    image6: { top: '-8px', right: '-150px', width: '200px', height: '300px' },
  });

  const calculateImagePositions = () => {
    const screenWidth = window.innerWidth;
    
    // Calculate positions based on screen width
    let positions: {
      image1: ImagePosition;
      image2: ImagePosition;
      image3: ImagePosition;
      image4: ImagePosition;
      image5: ImagePosition;
      image6: ImagePosition;
    } = {
      image1: { left: '-150px', top: '-8px', width: '200px', height: '300px' },
      image2: { bottom: '80px', right: '80px', width: '200px', height: '300px' },
      image3: { top: '150px', left: '40px', width: '150px', height: '225px' },
      image4: { bottom: '32px', left: '-150px', width: '200px', height: '200px' },
      image5: { bottom: '-32px', right: '-150px', width: '150px', height: '225px' },
      image6: { top: '-8px', right: '-150px', width: '200px', height: '300px' },
    };

    if (screenWidth >= 1440) {
      // Large desktop
      positions = {
        image1: { left: '-240px', top: '-16px', width: '340px', height: '509px' },
        image2: { bottom: '80px', right: '80px', width: '340px', height: '509px' },
        image3: { top: '200px', left: '80px', width: '340px', height: '509px' },
        image4: { bottom: '0px', left: '-240px', width: '376px', height: '376px' },
        image5: { bottom: '-80px', right: '-240px', width: '340px', height: '509px' },
        image6: { top: '-16px', right: '-240px', width: '340px', height: '509px' },
      };
    } else if (screenWidth >= 1280) {
      // Medium desktop
      positions = {
        image1: { left: '-180px', top: '-14px', width: '320px', height: '480px' },
        image2: { bottom: '80px', right: '80px', width: '320px', height: '480px' },
        image3: { top: '180px', left: '80px', width: '220px', height: '330px' },
        image4: { bottom: '8px', left: '-180px', width: '320px', height: '320px' },
        image5: { bottom: '-16px', right: '-180px', width: '250px', height: '375px' },
        image6: { top: '-14px', right: '-180px', width: '320px', height: '480px' },
      };
    } else if (screenWidth >= 1024) {
      // Small desktop
      positions = {
        image1: { left: '-120px', top: '-12px', width: '280px', height: '420px' },
        image2: { bottom: '80px', right: '80px', width: '280px', height: '420px' },
        image3: { top: '160px', left: '80px', width: '200px', height: '300px' },
        image4: { bottom: '16px', left: '-120px', width: '280px', height: '280px' },
        image5: { bottom: '-12px', right: '-120px', width: '200px', height: '300px' },
        image6: { top: '-12px', right: '-120px', width: '280px', height: '420px' },
      };
         } else if (screenWidth >= 768) {
       // Tablet
       positions = {
         image1: { left: '-80px', top: '-10px', width: '250px', height: '375px' },
         image2: { bottom: '80px', right: '80px', width: '250px', height: '375px' },
         image3: { display: 'none', width: '0px', height: '0px' }, // Hidden on tablet
         image4: { bottom: '20px', left: '-80px', width: '250px', height: '250px' },
         image5: { bottom: '-10px', right: '-80px', width: '180px', height: '270px' },
         image6: { top: '-10px', right: '-80px', width: '250px', height: '375px' },
       };
     } else if (screenWidth >= 600) {
       // Small tablet
       positions = {
         image1: { left: '-40px', top: '-8px', width: '220px', height: '330px' },
         image2: { display: 'none', width: '0px', height: '0px' }, // Hidden
         image3: { display: 'none', width: '0px', height: '0px' }, // Hidden
         image4: { bottom: '32px', left: '-40px', width: '220px', height: '220px' },
         image5: { bottom: '-32px', right: '-40px', width: '150px', height: '225px' },
         image6: { top: '-8px', right: '-40px', width: '220px', height: '330px' },
       };
     } else {
       // Mobile
       positions = {
         image1: { left: '-20px', top: '-8px', width: '180px', height: '270px' },
         image2: { display: 'none', width: '0px', height: '0px' }, // Hidden
         image3: { display: 'none', width: '0px', height: '0px' }, // Hidden
         image4: { bottom: '32px', left: '-20px', width: '180px', height: '180px' },
         image5: { bottom: '-32px', right: '-20px', width: '120px', height: '180px' },
         image6: { top: '-8px', right: '-20px', width: '180px', height: '270px' },
       };
     }

    setImagePositions(positions);
  };

  useEffect(() => {
    calculateImagePositions();
    window.addEventListener('resize', calculateImagePositions);
    return () => window.removeEventListener('resize', calculateImagePositions);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20, transition: { duration: 0.4 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="hero-container">
      {/* Decorative Images - Dynamic Positioning */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Side - Only first image */}
        <div 
          className="hero-image-1"
          style={{
            position: 'absolute',
            ...imagePositions.image1,
            opacity: 1,
            display: imagePositions.image1.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/1.png"
            alt="Breadboard with electronic components"
            width={340}
            height={509}
          />
        </div>

        {/* Second Image - Positioned as specified */}
        <div 
          className="hero-image-2"
          style={{
            position: 'absolute',
            ...imagePositions.image2,
            opacity: 1,
            display: imagePositions.image2.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/2.png"
            alt="Second decorative image"
            width={340}
            height={509}
          />
        </div>

        {/* Third Image - Pen positioned near BOLDEST MINDS text */}
        <div 
          className="hero-image-3"
          style={{
            position: 'absolute',
            ...imagePositions.image3,
            opacity: 1,
            display: imagePositions.image3.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/3.png"
            alt="Pen positioned near BOLDEST MINDS text"
            width={340}
            height={509}
          />
        </div>

        {/* Left Side - Oil Lamp (aligned with 5.png on same line) */}
        <div 
          className="hero-image-4"
          style={{
            position: 'absolute',
            ...imagePositions.image4,
            opacity: 1,
            display: imagePositions.image4.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/4.png"
            alt="Traditional Indian oil lamp"
            width={376}
            height={376}
          />
        </div>

        {/* Bottom Right - Tuning Fork */}
        <div 
          className="hero-image-5"
          style={{
            position: 'absolute',
            ...imagePositions.image5,
            opacity: 1,
            display: imagePositions.image5.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/5.png"
            alt="Purple tuning fork"
            width={340}
            height={509}
          />
        </div>

        {/* Right Side - Heatsink (mirror of 1.png) */}
        <div 
          className="hero-image-6"
          style={{
            position: 'absolute',
            ...imagePositions.image6,
            opacity: 1,
            display: imagePositions.image6.display || 'block'
          }}
        >
          <Image
            src="/images/section-1/6.png"
            alt="Copper heatsink"
            width={340}
            height={509}
          />
        </div>
      </div>

      {/* Main Content - Centered */}
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={staggerContainer}
        className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4 -mt-20"
      >
        <motion.div variants={fadeInUp}>
          <BlockRevealAnimation
            duration={1}
            delay={0.5}
            color="#4400B4"
          >
            <h1 className="hero-heading font-bold text-black mb-8 text-center uppercase">
              <span className="font-mazius-regular">
                BUILD WITH INDIA&apos;S
              </span>
              <br />
              <span className="font-mazius-extraitalic">
                BOLDEST MINDS
              </span>
            </h1>
          </BlockRevealAnimation>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="hero-subtitle font-normal text-[#605C52] mb-12 mx-auto text-center font-inter"
        >
          A 2-week long AI hackathon where builders and <br/>creators come together to shape the future of AI in India
        </motion.p>

        <motion.div variants={fadeInUp} className="hero-buttons flex flex-col sm:flex-row justify-center items-center gap-2">
          <div style={{
            padding: '1px',
            borderRadius: '8px',
            background: 'linear-gradient(180deg, #4400B4 0%, #88438C 100%)',
            display: 'inline-block',
            width: '100%'
          }}>
            <button
              onClick={() => window.open('https://hack-map-blue.vercel.app/', '_blank')}
              className="cursor-pointer w-full sm:w-auto"
              style={{
                width: '100%',
                height: '40px',
                padding: '12px 24px',
                borderRadius: '7px',
                border: 'none',
                background: '#F9F2E8',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '115%',
                letterSpacing: '-0.06em',
                color: '#4400B4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                opacity: 1
              }}
            >
              VIEW MAP
            </button>
          </div>
          
          <button
            onClick={onGetStarted}
            className="cursor-pointer w-full sm:w-auto"
            style={{
              height: '42px',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              background: '#000000',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '115%',
              letterSpacing: '-0.06em',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              opacity: 1
            }}
          >
            JOIN THE HACK
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection; 
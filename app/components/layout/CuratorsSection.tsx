'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../../waitlist.css';

const CuratorsSection: React.FC = () => {
  const [selectedCurator, setSelectedCurator] = useState<number | null>(null);
  const [hoveredCurator, setHoveredCurator] = useState<number | null>(null);

  const curators = [
    {
      name: "SUHAS",
      image: "/curators/suhas-image.png",
      title: "Co-Founder @ localhosthq"
    },
    {
      name: "SAMURAI",
      image: "/curators/samurai-image.png",
      title: "Core Contributor @ Zo World"
    },
    {
      name: "PAUL",
      image: "/curators/paul-image.png",
      title: "Founder & CEO @ Spacekayak"
    },
    {
      name: "SUJAY H.G",
      image: "/curators/sujay-image.png",
      title: "Co-Founder & CTO @ Viga Entertainment Technology"
    },
    {
      name: "SANJEED",
      image: "/curators/sanjeed-image.png",
      title: "India Ambassador @ Cursor AI"
    },
    {
      name: "RISHABH",
      image: "/curators/rishabh-image.png",
      title: "Founder & CEO @ Dodo Payments"
    },
    {
      name: "PAARUG",
      image: "/curators/paarug-image.png",
      title: "Content & Community @ Superteam India"
    },
    {
      name: "DHEEMANT",
      image: "/curators/dheemant-image.png",
      title: "Founder & CEO @ MayaResearch"
    },
    {
      name: "CALEB",
      image: "/curators/caleb-image.png",
      title: "Founder @ Backstage with Millionaires"
    },
    {
      name: "AMAL",
      image: "/curators/amal-image.png",
      title: "CTO @ Spacekayak"
    }
  ];

  const handleCuratorClick = (index: number) => {
    setSelectedCurator(selectedCurator === index ? null : index);
  };

  const handleCuratorHover = (index: number) => {
    setHoveredCurator(index);
  };

  const handleCuratorLeave = () => {
    setHoveredCurator(null);
  };

  return (
    <section className="py-16 px-3 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-black font-basier-circle-narrow">MEET OUR CURATORS</h2>
              <p className="text-lg text-[#605C52] max-w-3xl font-inter">
                Tracks shaped by industry experts, thinkers, and <br/> builders at the top of their game.
              </p>
            </div>
            
            {/* Become a Curator Button */}
            <div className="mt-6 lg:mt-0">
              <button
                onClick={() => window.open('https://kayakverse.notion.site/223daec80a728139ae8ce085977fb875?pvs=105', '_blank')}
                className="cursor-pointer flex items-center gap-2"
                style={{
                  padding: '14px 24px',
                  borderRadius: '8px',
                  background: '#000000',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '-0.06em',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  opacity: 1,
                  border: 'none'
                }}
              >
                BECOME A CURATOR
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curators Horizontal Scroll - Full Width */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max pl-3 pr-3">
          {curators.map((curator, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer flex-shrink-0 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '300px' }}
              onMouseEnter={() => handleCuratorHover(index)}
              onMouseLeave={handleCuratorLeave}
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={curator.image}
                  alt={curator.name}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Mobile Button */}
                <button
                  onClick={() => handleCuratorClick(index)}
                  className="lg:hidden absolute top-3 right-3 bg-white shadow-lg flex items-center justify-center"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    minWidth: '32px',
                    minHeight: '32px'
                  }}
                >
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={selectedCurator === index ? "M6 18L18 6M6 6l12 12" : "M12 6v6m0 0v6m0-6h6m-6 0H6"} />
                  </svg>
                </button>

                {/* Name and conditional title (always visible at bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="curator-name mb-1">{curator.name}</h3>
                  {(selectedCurator === index || hoveredCurator === index) && (
                    <p className="text-white text-sm opacity-90">{curator.title}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratorsSection; 
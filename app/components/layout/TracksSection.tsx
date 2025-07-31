'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import '../../waitlist.css';

const TracksSection: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<number>(0);

  const tracks = [
    {
      name: "AI x Systems",
      description: "Developing AI solutions tailored to India's unique needs, from Indic AI that embraces local languages and cultures, to building scalable AI infrastructure.",
      borderGradient: "linear-gradient(180deg, #4400B4 0%, #88438C 100%)",
      image: "/images/new-images/infra-track-image.png",
      isExpanded: true
    },
    {
      name: "AI x Culture",
      description: "Exploring the intersection of AI and cultural expression, from digital art to preserving traditional knowledge through technology.",
      borderGradient: "linear-gradient(180deg, #293D52 0%, #5C89B8 100%)",
      image: "/images/new-images/mixed-media-track-image.png"
    },
    {
      name: "AI x Matter",
      description: "Building AI solutions for the physical world, from smart materials to sustainable manufacturing and environmental monitoring.",
      borderGradient: "linear-gradient(180deg, #831400 0%, #FF5E41 100%)",
      image: "/images/new-images/hardware-track-image.png"
    },
    {
      name: "AI x Society",
      description: "Creating AI-powered solutions for social challenges, from healthcare accessibility to education and community development.",
      borderGradient: "linear-gradient(180deg, #0C261D 0%, #2E8C6B 96.15%)",
      image: "/images/new-images/civic-track-image.png"
    }
  ];

  const handleTrackClick = (index: number) => {
    setExpandedTrack(index);
  };

  return (
    <section className="py-16 px-3 bg-[#F9F2E8]">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Heading + Tracks */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-black mb-6 font-basier-circle-narrow">THE TRACKS</h2>
              <p className="text-lg text-[#605C52] max-w-3xl font-inter">
                India's best builders. Six bold tracks. No pitches, no slides, just focused <br/> execution. 
                We bring the space, tools, and context to power AI-led <br/>innovation from the ground up.
              </p>
            </div>

            {/* Track List */}
            <div className="space-y-0">
              {tracks.map((track, index) => (
                <motion.div 
                  key={index} 
                  className={`relative cursor-pointer transition-all duration-300 ${
                    expandedTrack === index ? 'bg-white/50 rounded-lg p-4' : 'hover:bg-white/30 rounded-lg p-4'
                  }`}
                  onClick={() => handleTrackClick(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Border with gradient */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                    style={{
                      background: expandedTrack === index ? track.borderGradient : 'transparent'
                    }}
                  />
                  
                  <div className="pl-6">
                    <h3 className={`track-title mb-2 transition-all duration-300 ${
                      expandedTrack === index ? 'text-black' : 'track-title-unselected'
                    }`}>
                      {track.name}
                    </h3>
                    
                    <AnimatePresence>
                      {expandedTrack === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="track-description text-[#605C52] mb-4">
                            {track.description}
                          </p>
                          <button 
                            onClick={() => window.open('https://dorahacks.io/buidl/29075', '_blank')}
                            className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
                          >
                            Explore more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Track Card */}
          <div className="relative rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={expandedTrack}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative"
                style={{
                  width: '600px',
                  height: '600px',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={tracks[expandedTrack].image}
                  alt={`${tracks[expandedTrack].name} track`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{tracks[expandedTrack].name}</h3>
                  <p className="text-sm opacity-90">{tracks[expandedTrack].description.split('.')[0]}.</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-black mb-6 font-basier-circle-narrow">THE TRACKS</h2>
            <p className="text-lg text-[#605C52] max-w-3xl font-inter">
              India's best builders. Six bold tracks. No pitches, no slides, just focused execution. 
              We bring the space, tools, and context to power AI-led innovation from the ground up.
            </p>
          </div>

          {/* Track List - Mobile */}
          <div className="space-y-0">
            {tracks.map((track, index) => (
              <motion.div 
                key={index} 
                className={`relative cursor-pointer transition-all duration-300 ${
                  expandedTrack === index ? 'bg-white/50 rounded-lg p-4' : 'hover:bg-white/30 rounded-lg p-4'
                }`}
                onClick={() => handleTrackClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Border with gradient */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-lg"
                  style={{
                    background: expandedTrack === index ? track.borderGradient : 'transparent'
                  }}
                />
                
                <div className="pl-6">
                  <AnimatePresence>
                    {expandedTrack === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Mobile Image - At the top within the track card */}
                        <div className="relative mb-4">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={expandedTrack}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.4 }}
                              className="relative"
                              style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '20px',
                                overflow: 'hidden'
                              }}
                            >
                              <Image
                                src={tracks[expandedTrack].image}
                                alt={`${tracks[expandedTrack].name} track`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                                priority
                              />
                              <div className="absolute inset-0 bg-black/20"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{tracks[expandedTrack].name}</h3>
                                <p className="text-xs opacity-90">{tracks[expandedTrack].description.split('.')[0]}.</p>
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <h3 className={`track-title mb-2 transition-all duration-300 ${
                    expandedTrack === index ? 'text-black' : 'track-title-unselected'
                  }`}>
                    {track.name}
                  </h3>
                  
                  <AnimatePresence>
                    {expandedTrack === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="track-description text-[#605C52] mb-4">
                          {track.description}
                        </p>
                        
                        <button 
                          onClick={() => window.open('https://dorahacks.io/buidl/29075', '_blank')}
                          className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300"
                        >
                          Explore more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection; 
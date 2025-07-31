import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../../stats-responsive.css';
import '../../waitlist.css';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-3">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-6 font-basier-circle-narrow text-left">WHAT&apos;S THE GREAT RESIDENTIAL HACK?</h2>
          <p className="text-lg text-[#605C52] max-w-3xl font-inter text-left">
            Two weeks of building, burning out, and belonging, with 500+ handpicked hackers, three grape-fueled tracks, and 48 hours of peer tech and cultural intensity.
          </p>
        </div>

        {/* Desktop Stats Image - Show on medium screens and up */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="relative w-full">
            <Image 
              src="/images/stats/desktop.svg" 
              alt="Stats section desktop view" 
              width={1200} 
              height={600} 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Mobile Stats Image - Show on small screens only */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="block md:hidden"
        >
          <div className="relative w-full">
            <Image 
              src="/images/section-2/mobile.png" 
              alt="Stats section mobile view" 
              width={800} 
              height={1200} 
              className="w-full h-auto object-contain"
              style={{ maxHeight: '90vh' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 
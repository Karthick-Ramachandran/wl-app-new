import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../ui';

interface SuccessSectionProps {
  onShare?: () => void;
}

const SuccessSection: React.FC<SuccessSectionProps> = ({ onShare }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-16 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Logo size="lg" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-black mb-6"
        >
          Welcome to the waitlist! 🎉
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-[#605C52] mb-8"
        >
          Thank you for joining The Great Residential H/ACC. We'll be in touch soon with updates about the hackathon and your next steps.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          {onShare && (
            <button
              onClick={onShare}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors mr-4"
            >
              Share with friends
            </button>
          )}
          
          <button
            onClick={() => window.location.href = '/'}
            className="bg-transparent border border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Back to website
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessSection; 
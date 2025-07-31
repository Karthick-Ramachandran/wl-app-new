import React from 'react';

interface FooterProps {
  onJoinHack?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onJoinHack }) => {
  return (
    <footer className="relative py-16 px-4" style={{
      background: 'linear-gradient(135deg, #4400B4 0%, #88438C 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content Area */}
          <div className="space-y-8">
            {/* White Card */}
            <div className="bg-white rounded-lg p-8 max-w-md">
              <h2 className="text-3xl font-bold text-black mb-4">
                BE PART OF THE SIGNAL
              </h2>
              <p className="text-[#605C52] mb-6">
                Join a community pushing the boundaries of AI, creativity, and code.
              </p>
              <button 
                onClick={onJoinHack || (() => window.location.href = '/')}
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
                JOIN THE H/ACC
              </button>
            </div>

            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © [2025]The great residential hack @Spacekayak.
            </div>
          </div>

          {/* Right Navigation Area */}
          <div className="flex flex-col items-end space-y-8">
            {/* X Button */}
            <a 
              href="https://x.com/thegreathacc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Navigation Links */}
            <div className="grid grid-cols-3 gap-12 text-white">
              <div>
                <h3 className="text-lg font-semibold mb-4">SECTIONS</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white/80 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white/80 transition-colors">Conference</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">LINKS</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="mailto:kunal@spacekayak.xyz" className="hover:text-white/80 transition-colors">Partner with us</a></li>
                  <li><a href="https://kayakverse.notion.site/223daec80a728139ae8ce085977fb875?pvs=105" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Become a curator</a></li>
                  <li><a href="https://dorahacks.io/buidl/29075" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">Register</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">INDIA HQ</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white/80 transition-colors">Bengaluru</a></li>
                </ul>
              </div>
            </div>

            {/* Policy Links */}
            <div className="flex space-x-4 text-sm text-white/60">
              <a href="#" className="hover:text-white/80 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import "../../waitlist.css"
const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'curators', 'schedule', 'faqs', 'partners'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full bg-[#F9F2E8] px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Text */}
        <div className="flex items-center space-x-3">
          <Image src="/new-logo.png" alt="logo" width={40} height={40} />
          <div className="text-left">
            <div 
              className="font-basier-circle-narrow font-semibold text-black"
              style={{
                fontSize: '16.16px',
                lineHeight: '82%',
                letterSpacing: '-0.07em'
              }}
            >
              <div>THE GREAT</div>
              <div>RESIDENTIAL</div>
              <div>H/ACC</div>
            </div>
          </div>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className={`transition-colors ${
              activeSection === 'about' 
                ? 'text-[#4400B4] font-medium' 
                : 'text-black hover:text-[#4400B4]'
            }`}
          >
            About
          </a>
          <a 
            href="#curators" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('curators');
            }}
            className={`transition-colors ${
              activeSection === 'curators' 
                ? 'text-[#4400B4] font-medium' 
                : 'text-black hover:text-[#4400B4]'
            }`}
          >
            Curators
          </a>
          <a 
            href="#schedule" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('schedule');
            }}
            className={`transition-colors ${
              activeSection === 'schedule' 
                ? 'text-[#4400B4] font-medium' 
                : 'text-black hover:text-[#4400B4]'
            }`}
          >
            Schedule
          </a>
          <a 
            href="#faqs" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('faqs');
            }}
            className={`transition-colors ${
              activeSection === 'faqs' 
                ? 'text-[#4400B4] font-medium' 
                : 'text-black hover:text-[#4400B4]'
            }`}
          >
            FAQs
          </a>
        </nav>

        {/* CTA Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <div style={{
            padding: '1px',
            borderRadius: '8px',
            background: 'linear-gradient(180deg, #4400B4 0%, #88438C 100%)',
            display: 'inline-block'
          }}>
            <button
              onClick={() => window.open('https://hack-map-blue.vercel.app/', '_blank')}
              className="cursor-pointer"
              style={{
                width: '139px',
                height: '45px',
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
                whiteSpace: 'nowrap'
              }}
            >
              VIEW MAP
            </button>
          </div>
          <button
            onClick={() => window.location.href = '/'}
            className="cursor-pointer"
            style={{
              width: '160px',
              height: '47px',
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
              whiteSpace: 'nowrap'
            }}
          >
            JOIN THE HACK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay - Full Screen */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#F9F2E8] z-40 w-screen h-screen">
          <div className="w-full h-full p-6 flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Image src="/new-logo.png" alt="logo" width={40} height={40} />
                <div className="text-left">
                  <div 
                    className="font-basier-circle-narrow font-semibold text-black"
                    style={{
                      fontSize: '16.16px',
                      lineHeight: '82%',
                      letterSpacing: '-0.07em'
                    }}
                  >
                    <div>THE GREAT</div>
                    <div>RESIDENTIAL</div>
                    <div>H/ACC</div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-6 mb-8">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`block text-left transition-all duration-300 ${
                  activeSection === 'about' 
                    ? 'text-[#4400B4]' 
                    : 'text-black opacity-70 hover:text-[#4400B4]'
                }`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  padding: '12px 0'
                }}
              >
                About
              </a>
              <a 
                href="#schedule" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('schedule');
                }}
                className={`block text-left transition-all duration-300 ${
                  activeSection === 'schedule' 
                    ? 'text-[#4400B4]' 
                    : 'text-black opacity-70 hover:text-[#4400B4]'
                }`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  padding: '12px 0'
                }}
              >
                Schedule
              </a>
              <a 
                href="#curators" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('curators');
                }}
                className={`block text-left transition-all duration-300 ${
                  activeSection === 'curators' 
                    ? 'text-[#4400B4]' 
                    : 'text-black opacity-70 hover:text-[#4400B4]'
                }`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  padding: '12px 0'
                }}
              >
                Curators
              </a>
              <a 
                href="#partners" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('partners');
                }}
                className={`block text-left transition-all duration-300 ${
                  activeSection === 'partners' 
                    ? 'text-[#4400B4]' 
                    : 'text-black opacity-70 hover:text-[#4400B4]'
                }`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  padding: '12px 0'
                }}
              >
                Partners
              </a>
            </nav>

            {/* Mobile CTA Buttons */}
            <div className="space-y-2" style={{ gap: '8px' }}>
              <div style={{
                padding: '1px',
                borderRadius: '8px',
                background: 'linear-gradient(180deg, #4400B4 0%, #88438C 100%)',
                display: 'inline-block',
                width: '100%'
              }}>
                <button
                  onClick={() => window.open('https://hack-map-blue.vercel.app/', '_blank')}
                  className="cursor-pointer w-full"
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
                onClick={() => window.location.href = '/'}
                className="cursor-pointer w-full"
                style={{
                  width: '100%',
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
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
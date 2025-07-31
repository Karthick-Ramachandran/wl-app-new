"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  Header,
  HeroSection,
  StatsSection,
  TracksSection,
  ConferenceSection,
  CuratorsSection,
  PartnersSection,
  ScheduleSection,
  FAQSection,
  Footer,
  SuccessSection
} from '../components/layout';
import { WaitlistForm } from '../components/forms';
import { FormData, validateForm } from '../utils/validation';
import { submitWaitlistForm, shareLink } from '../services/waitlistService';
import '../waitlist.css';

const WebsitePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleJoinHack = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    // Validate form
    const validationError = validateForm(formData);
    if (validationError) {
      toast.error(validationError.message, {
        style: {
          background: "#FF4B4B",
          color: "#fff",
          fontFamily: "var(--font-basier-narrow-medium)",
        },
      });
      setIsSubmitting(false);
      return;
    }

    // Submit form with loading toast
    toast.promise(
      submitWaitlistForm(formData).then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          setIsSubmitting(false);
          
          // Handle specific error cases
          if (response.status === 400) {
            throw new Error(errorData.message || "Please check your input and try again.");
          } else if (response.status === 409) {
            throw new Error(errorData.message || "You are already on the waitlist!");
          } else if (response.status === 500) {
            throw new Error("Server error. Please try again later.");
          } else {
            throw new Error(errorData.message || "Failed to submit form. Please try again.");
          }
        }
        
        setSubmitted(true);
        setIsSubmitting(false);
        return response;
      }),
      {
        loading: "Submitting your application...",
        success: "Successfully joined the waitlist! 🎉",
        error: (err) => err.message,
      },
      {
        style: {
          background: "#4400B4",
          color: "#fff",
          fontFamily: "var(--font-basier-narrow-medium)",
        },
      }
    );
  };

  const handleShare = async () => {
    try {
      await shareLink();
      toast.success("Link copied to clipboard!", {
        style: {
          background: "#4400B4",
          color: "#fff",
          fontFamily: "var(--font-basier-narrow-medium)",
        },
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F2E8] overflow-x-hidden">
      <Header />
      
      {/* Form Overlay */}
      <AnimatePresence>
        {showForm && !submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#F9F2E8] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-black hover:text-gray-600 transition-colors"
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}
                >
                  ×
                </button>
              </div>

              {/* Form Content */}
              <div className="px-4 pb-4">
                <WaitlistForm
                  onSubmit={handleFormSubmit}
                  isSubmitting={isSubmitting}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Success Page */}
      {submitted && (
        <SuccessSection onShare={handleShare} />
      )}

      {/* Main Website Content */}
      {!submitted && (
        <>
          {/* Hero Section - Full Viewport */}
          <section id="about" className="min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center w-full">
              <HeroSection onGetStarted={handleJoinHack} />
            </div>
          </section>

          {/* What's The Great Residential Hack Section */}
          <section className="py-16 px-3 bg-white">
            <div className="max-w-7xl mx-auto">
              <StatsSection />
            </div>
          </section>

          {/* Tracks Section */}
          <TracksSection />

          {/* Conference Section */}
          <ConferenceSection />

          {/* Partners Section */}
          <section id="partners">
            <PartnersSection />
          </section>

          {/* Curators Section */}
          <section id="curators">
            <CuratorsSection />
          </section>

          {/* Schedule Section */}
          <section id="schedule">
            <ScheduleSection />
          </section>

          {/* FAQ Section */}
          <section id="faqs">
            <FAQSection />
          </section>

          {/* Footer */}
          <Footer onJoinHack={handleJoinHack} />
        </>
      )}
    </div>
  );
};

export default WebsitePage; 
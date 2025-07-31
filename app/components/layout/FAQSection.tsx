import React, { useState } from 'react';
import '../../waitlist.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isExpanded = false }) => {
  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span 
          className="text-black"
          style={{
            fontFamily: 'Basier Circle Narrow',
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '-0.04em',
            textTransform: 'uppercase'
          }}
        >
          {question}
        </span>
        <svg
          className={`w-6 h-6 text-gray-500 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-6 pb-6">
          <p 
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '24px',
              letterSpacing: '-0.06em',
              opacity: 0.6,
              color: '#605C52'
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "WHO CAN PARTICIPATE IN THE HACKATHON?",
      answer: "Anyone with a curious mind and a drive to build. Whether you're a developer, designer, researcher or artist... if you're interested in AI and innovation, you're welcome.",
      isExpanded: true
    },
    {
      question: "DO I NEED A TEAM TO REGISTER?",
      answer: "No, you can register individually and form teams during the hackathon."
    },
    {
      question: "WHAT KIND OF PROJECTS CAN I BUILD?",
      answer: "You can build any AI-powered project that fits within the track themes. The focus is on innovation and real-world impact."
    },
    {
      question: "IS IT REMOTE OR IN-PERSON?",
      answer: "The hackathon is in-person, providing an immersive experience with fellow builders and mentors."
    },
    {
      question: "WHAT SUPPORT WILL I GET DURING THE HACKATHON?",
      answer: "You'll have access to mentors, workshops, technical support, and a collaborative environment to help bring your ideas to life."
    }
  ];

  return (
    <section className="py-16 px-3 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
                      <h2 className="faq-section-heading">
            FIND YOUR WAY & GET <br /> YOUR QUESTIONS ANSWERED
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        {/* Partner With Us Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => window.location.href = 'mailto:kunal@spacekayak.xyz'}
            className="cursor-pointer"
            style={{
              width: '222px',
              height: '48px',
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
            PARTNER WITH US
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 
import React from 'react';
import Image from 'next/image';
import '../../waitlist.css';

interface ConferenceCardProps {
  title: string;
  description: string;
  image: string;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ title, description, image }) => {
  return (
    <div className="rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6">
        <h3 
          className="text-black mb-2 font-inter font-bold text-base leading-[110%] tracking-[-0.06em] text-center"
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontStyle: 'Bold',
            fontSize: '16px',
            lineHeight: '110%',
            letterSpacing: '-6%',
            textAlign: 'center'
          }}
        >
          {title}
        </h3>
        <p 
          className="text-[#605C52] font-inter font-normal text-base leading-[110%] tracking-[-0.06em] text-center"
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontStyle: 'Regular',
            fontSize: '16px',
            lineHeight: '110%',
            letterSpacing: '-6%',
            textAlign: 'center'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const ConferenceSection: React.FC = () => {
  const events = [
    {
      title: "Demo Day",
      description: "Watch groundbreaking AI projects come to life as participants showcase their innovations.",
      image: "/conferennce/demo-day-image.png"
    },
    {
      title: "Workshops",
      description: "Hands-on sessions where you can build and refine your AI skills with expert guidance.",
      image: "/conferennce/workshops-image.png"
    },
    {
      title: "Talks from Industry Leaders",
      description: "Get inspired by industry experts sharing their insights on the future of AI and tech innovation.",
      image: "/conferennce/talks-image.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-6 font-basier-circle-narrow text-left">THE CONFERENCE</h2>
          <p className="text-lg text-[#605C52] max-w-3xl font-inter text-left">
            48 hours of live demos, deep dives, and high signal workshops to close the hack with a bang.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <ConferenceCard key={index} {...event} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {events.map((event, index) => (
            <ConferenceCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection; 
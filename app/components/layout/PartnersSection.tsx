'use client';

import React from 'react';
import Image from 'next/image';
import '../../waitlist.css';

const PartnersSection: React.FC = () => {
  const partners = [
    {
      name: "Dodo Payments",
      logo: "/images/dodo payments logo.png"
    },
    {
      name: "DoraHacks",
      logo: "/images/dorahacks-logo.png"
    },
    {
      name: "Lagrange Point",
      logo: "/images/lagrange-point-logo.png"
    },
    {
      name: "Localhost",
      logo: "/images/localhost-logo.png"
    },
    {
      name: "Maya Research",
      logo: "/images/maya-research-logo.png"
    },
    {
      name: "SK",
      logo: "/images/sk-logo.png"
    },
    {
      name: "The Hub",
      logo: "/images/the-hub-logo.png"
    },
    {
      name: "The Residency",
      logo: "/images/the-residency-logo.png"
    },
    {
      name: "Viga",
      logo: "/images/viga-logo.png"
    },
    {
      name: "ZO",
      logo: "/images/zo-logo.png"
    }
  ];

  return (
    <section className="py-16 px-3 bg-[#F9F2E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-black mb-6 font-basier-circle-narrow">OUR PARTNERS</h2>
        </div>
      </div>

      {/* Partners Horizontal Scroll - Full Width */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 min-w-max pl-3 pr-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-center justify-center flex-shrink-0"
              style={{
                width: '250px',
                height: '180px',
                borderRadius: '12px'
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={120}
                className="w-auto h-auto max-w-full max-h-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection; 
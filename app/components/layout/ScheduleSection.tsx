import React from 'react';
import '../../waitlist.css';

interface ScheduleItemProps {
  title: string;
  date: string;
  description: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ title, date, description }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-8">
      <button className="px-4 py-2 border border-black rounded-full text-black text-sm font-medium whitespace-nowrap self-start">
        {title}
      </button>
      <div className="flex-1">
        <div className="text-2xl font-bold text-black mb-2">{date}:</div>
        <p className="text-[#605C52]">{description}</p>
      </div>
    </div>
  );
};

const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    {
      title: "HACKATHON DATES",
      date: "AUGUST 4 - AUGUST 21, 2025",
      description: "Daily shipping hours, mentor check-ins, and collaborative work."
    },
    {
      title: "CONFERENCE DATES",
      date: "AUGUST 23 - AUGUST 24, 2025",
      description: "In-person showcase and tech talks."
    }
  ];

  return (
    <section className="py-16 px-3 bg-[#F9F2E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-black mb-6 text-left">CODE, CREATE, AND CONNECT.</h2>
          <p className="text-lg text-[#605C52] max-w-3xl text-left">
            Three packed days designed to fuel momentum and spark breakthroughs.
          </p>
        </div>

        <div className="space-y-0">
          {scheduleItems.map((item, index) => (
            <React.Fragment key={index}>
              <ScheduleItem {...item} />
              {index < scheduleItems.length - 1 && (
                <div className="border-t border-gray-300 my-8"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection; 
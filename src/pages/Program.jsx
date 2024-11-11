import React from "react";

const programs = [
  { icon: "/path/to/graduation-cap.png", alt: "Graduation Cap", label: "Education" },
  { icon: "/path/to/presentation.png", alt: "Presentation", label: "Workshop" },
  { icon: "/path/to/trophy.png", alt: "Trophy", label: "Awards" },
  { icon: "/path/to/computer.png", alt: "Computer", label: "Online Course" },
  { icon: "/path/to/community.png", alt: "Community", label: "Community" },
  { icon: "/path/to/handshake.png", alt: "Handshake", label: "Collaboration" },
  { icon: "/path/to/business.png", alt: "Business Growth", label: "Entrepreneurship" },
];

const Program = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Program</h2>
      
      <div className="grid grid-cols-4 gap-8 text-center">
        {programs.map((program, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={program.icon} alt={program.alt} className="w-12 h-12" />
            <p className="text-sm text-gray-700">{program.label}</p>
          </div>
        ))}
      </div>
      
      <button className="text-red-500 font-medium">
        Selengkapnya Tentang Program
      </button>
    </div>
  );
};

export default Program;

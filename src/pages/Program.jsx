import React from "react";

const programs = [
  { icon: "/icon/program/school.png", alt: "Graduation Cap", label: "Education" },
  { icon: "/icon/program/Academy.png", alt: "Presentation", label: "Workshop" },
  { icon: "/icon/program/Competition.png", alt: "Trophy", label: "Awards" },
  { icon: "/icon/program/Internship.png", alt: "Computer", label: "Online Course" },
  { icon: "/icon/program/Volunteer.png", alt: "Community", label: "Volunteer" },
  { icon: "/icon/program/Community.png", alt: "Handshake", label: "Collaboration" },
  { icon: "/icon/program/Career.png", alt: "Business Growth", label: "Entrepreneurship" },
];

const Program = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl font-semibold">Program</h2>
        
        <div className="grid grid-cols-2 pt-10 md:grid-cols-4 gap-x-56 gap-y-20 text-center">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group relative">
              <img src={program.icon} alt={program.alt} className="w-32 h-32  duration-300 group-hover:scale-110" />
              
              {/* Hidden text, shown on hover */}
              <p className="text-3xl font-medium text-gray-700 opacity-0 group-hover:opacity-100 absolute -top-20 left-0 right-0 transition-all duration-300 transform scale-90 group-hover:scale-100 group-hover:translate-y-0">
                {program.label}
              </p>
            </div>
          ))}
        </div>
        
        <button className="text-red-500 font-semibold text-lg">
          Selengkapnya Tentang Program
        </button>
      </div>
    </section>
  );
};

export default Program;

import React from "react";

const programs = [
  { icon: "/icon/program/school.png", alt: "Graduation Cap", label: "Scholarship" },
  { icon: "/icon/program/Academy.png", alt: "Presentation", label: "Academy" },
  { icon: "/icon/program/Competition.png", alt: "Trophy", label: "Competition" },
  { icon: "/icon/program/Internship.png", alt: "Computer", label: "Internship" },
  { icon: "/icon/program/Volunteer.png", alt: "Community", label: "Volunteer" },
  { icon: "/icon/program/Community.png", alt: "Handshake", label: "Community" },
  { icon: "/icon/program/Career.png", alt: "Business Growth", label: "Career" },
];

const Program = () => {
  return (
    <section className="container py-24 mx-auto">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="text-3xl md:text-4xl md:font-bold font-semibold">Program</h2>
        
        <div className="grid grid-cols-2 pt-10 md:grid-cols-4 gap-x-20 gap-y-16 md:gap-x-56 md:gap-y-20 text-center">
          {programs.map((program, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group relative">
              <img src={program.icon} alt={program.alt} className="w-24 h-24 md:w-32 md:h-32 duration-300 group-hover:scale-110" />
              
              {/* Hidden text, shown on hover */}
              <p className="text-xl md:text-3xl font-bold text-gray-700 opacity-0 group-hover:opacity-100 absolute -top-[55px] md:-top-20 text-center transition-all duration-300 transform scale-90 group-hover:scale-100 group-hover:translate-y-0">
                {program.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;

import React from "react";

const ProgramCard = ({ icon, alt, label, duration }) => {
  return (
    <div
      className="flex flex-col items-center space-y-4 group relative"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      <img
        src={icon}
        alt={alt}
        className="w-24 h-24 md:w-32 md:h-32 duration-300 group-hover:scale-110"
      />
      <p className="text-xl md:text-3xl font-bold text-[#F92020] opacity-0 group-hover:opacity-100 absolute -top-[55px] md:-top-20 text-center transition-all duration-300 transform scale-90 group-hover:scale-100 group-hover:translate-y-0">
        {label}
      </p>
    </div>
  );
};

export default ProgramCard;

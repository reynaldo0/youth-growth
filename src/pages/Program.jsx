import React from "react";
import { toast, ToastContainer } from "react-toastify";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../docs/program";

const Program = () => {
  const alertClick = () => {
    toast.error("Program Dalam Tahap Perkembangan", {
      position: "top-center",
      autoClose: 3000,
      className: "bg-white text-black",
    });
  };

  return (
    <section className="container py-24 mx-auto">
      <ToastContainer className="z-[9999] fixed" />
      <div className="flex flex-col items-center space-y-8">
        <h2
          className="text-3xl md:text-4xl md:font-bold font-semibold"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Program
        </h2>

        <div className="grid grid-cols-2 pt-10 md:grid-cols-4 gap-x-20 gap-y-16 md:gap-x-56 md:gap-y-20 text-center">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              alt={program.alt}
              label={program.label}
              duration={800 + index * 300}
            />
          ))}
        </div>
      </div>

      <div
        className="relative"
        onClick={alertClick}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <p
          className="absolute bottom-10 right-4 text-2xl font-semibold cursor-pointer text-[#F92020] group"
          role="button"
          tabIndex={0}
        >
          Selengkapnya <br /> Tentang Program
          <span className="block w-0 group-hover:w-full h-[2px] bg-[#F92020] transition-all duration-500"></span>
        </p>
      </div>
    </section>
  );
};

export default Program;

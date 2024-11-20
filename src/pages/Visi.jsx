import React from "react";
import { motion } from "framer-motion";
import visionSlides from "../docs/visi";

const VisionSection = () => {
  return (
    <section>
      
      <h2 className="text-3xl text-center md:text-4xl md:font-bold font-semibold">Visi dan Misi</h2>
      <div className="flex flex-wrap justify-center items-center py-12 md:py-24 bg-white space-y-8 md:space-y-0">
        {/* Right Section - 3 Static Cards */}
        <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-8 w-full">
          {visionSlides.map((slide, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center w-full md:w-[30%] transition-transform hover:scale-105"
            >
              {/* Image with Fade-in Effect */}
              <motion.img
                key={`img-${slide.image}`}
                src={slide.image}
                alt={slide.alt}
                className="w-32 h-32 md:w-40 md:h-40 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Title */}
              <h3 className="text-lg md:text-2xl font-semibold text-center border-b-2 border-black pb-2 mb-2">
                {slide.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-xl text-gray-700 text-center">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;

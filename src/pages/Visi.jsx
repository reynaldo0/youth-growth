import React, { useEffect } from "react";
import visionSlides from "../docs/visi";
import AOS from "aos";
import "aos/dist/aos.css"; // Make sure AOS is imported

const VisionSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);

  return (
    <section className="py-12 md:py-24">
      <h2
        className="text-3xl text-center md:text-4xl md:font-bold font-semibold pb-10"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Visi dan Misi
      </h2>
      <div className="flex flex-wrap justify-center items-center space-y-8 md:space-y-0 mx-7">
        {/* Right Section - 3 Static Cards */}
        <div className="flex flex-wrap justify-center transition items-center space-y-6 md:space-y-0 md:space-x-8 w-full">
          {visionSlides.map((slide, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center w-full md:w-[30%] transition-all duration-300 transform hover:translate-x-2 hover:-translate-y-2 hover:border-[#F92020] hover:border-l-4 hover:border-b-4 hover:border-r hover:border-t"
              style={{ height: "auto" }}
              data-aos="fade-up"
              data-aos-duration={`${800 + index * 300}`}
            >
              {/* Image with Fade-in Effect */}
              <img
                key={`img-${slide.image}`}
                src={slide.image}
                alt={slide.alt}
                className="w-20 h-20 md:w-40 md:h-40 mb-4"
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

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion"; // Importing framer-motion
import visionSlides from "../docs/visi";

const VisionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    setActiveIndex(swiperRef.current.swiper.activeIndex);
  };

  const goToSlide = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-24 bg-white space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="bg-red-600 text-white p-6 md:p-12 rounded-r-[40px] flex flex-col items-start">
        <h2 className="text-2xl md:text-5xl font-serif leading-tight">
          Kami membawa visi untuk menjadi gerakan utama dalam mempersiapkan
          generasi muda menuju Indonesia emas 2045.
        </h2>
        <hr className="border border-white px-48 w-1/4 my-6" />
        <p className="text-base md:text-2xl font-light">
          Generasi muda merupakan fondasi untuk masa depan yang lebih baik.
          Mereka akan menjadi sumber daya terpenting dalam menghadapi tantangan
          global dan berperan aktif dalam memajukan berbagai sektor dan
          menciptakan perubahan positif yang berkelanjutan.
        </p>
      </div>

      {/* Right Section with Custom Pagination */}
      <div className="flex flex-col items-center text-center space-y-4 w-full md:w-[45%]">
        <Swiper
          onSlideChange={handleSlideChange}
          className="w-full"
          ref={swiperRef}
          modules={[Navigation, Pagination]}
        >
          {visionSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center space-y-4 mx-32">
                {/* Title with Slide-in Effect from Right */}
                
                {/* Image with Fade-in Effect */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.img
                      key={`img-${slide.image}`} // Ensure a unique key for image
                      src={slide.image}
                      alt={slide.alt}
                      className="w-40 h-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {/* Title with Slide-in Effect */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.h3
                      key={`title-${slide.title}`} // Ensure a unique key for title
                      className="text-xl font-semibold md:text-2xl border-b-2 border-black pb-2"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.title}
                    </motion.h3>
                  )}
                </AnimatePresence>

                {/* Description with Slide-in Effect from Left */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      key={`desc-${slide.description}`} // Ensure a unique key for description
                      className="text-base md:text-xl text-gray-700 px-5"
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    >
                      {slide.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex space-x-5 mt-4">
          {visionSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? "bg-black" : "bg-transparent border-2 border-black"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;

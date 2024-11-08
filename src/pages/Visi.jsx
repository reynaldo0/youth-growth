import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Directly import modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VisionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide index
  const swiperRef = useRef(null); // Reference to Swiper instance

  const totalSlides = 3; // Set the number of slides

  const handleSlideChange = () => {
    // Update active index when slide changes
    setActiveIndex(swiperRef.current.swiper.activeIndex);
  };

  const goToSlide = (index) => {
    // Change slide when a dot is clicked
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index); // Update the active index manually
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-24 bg-white space-y-8 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="bg-red-600 text-white p-6 md:p-12 rounded-r-[40px] flex flex-col items-start">
        <h2 className="text-2xl md:text-5xl font-serif leading-tight">
          Kami membawa visi untuk menjadi gerakan utama dalam mempersiapkan generasi muda menuju Indonesia emas 2045.
        </h2>
        <hr className="border border-white px-48 w-1/4 my-6" />
        <p className="text-base md:text-2xl font-light">
        Generasi muda merupakan fondasi untuk masa depan yang lebih baik. Mereka akan menjadi sumber daya terpenting dalam menghadapi tantangan global dan berperan aktif dalam memajukan berbagai sektor dan menciptakan perubahan positif yang berkelanjutan.
        </p>
      </div>

      {/* Right Section with Custom Pagination */}
      <div className="flex flex-col items-center text-center space-y-4 w-full md:w-1/2">
        <Swiper
          onSlideChange={handleSlideChange} // Track slide change
          className="w-full"
          ref={swiperRef} // Assign ref to Swiper
          modules={[Navigation, Pagination]} // Use modules here
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-4">
              <img src="/path-to-your-icon1.svg" alt="Empowering Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold underline">Empowering</h3>
              <p className="text-base text-gray-700">
                Mendorong pemuda untuk memberdayakan diri mereka demi menjadi agen perubahan yang positif dalam masyarakat.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-4">
              <img src="/path-to-your-icon2.svg" alt="Educating Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold underline">Educating</h3>
              <p className="text-base text-gray-700">
                Mempersiapkan generasi muda melalui pendidikan yang holistik dan komprehensif.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="flex flex-col items-center space-y-4">
              <img src="/path-to-your-icon3.svg" alt="Inspiring Icon" className="w-16 h-16" />
              <h3 className="text-xl font-semibold underline">Inspiring</h3>
              <p className="text-base text-gray-700">
                Menginspirasi anak muda untuk menjadi pemimpin masa depan yang visioner.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex space-x-2 mt-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-red-600' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionSection;

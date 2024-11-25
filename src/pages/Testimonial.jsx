import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { toast, ToastContainer } from "react-toastify";
import testimonials from "../docs/testimonial";

// Custom hook to detect mobile screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const alertClick = () => {
  toast.error("Testimoni Tidak Ditemukan", {
    position: "top-center",
    autoClose: 3000,
    style: { backgroundColor: "#ffff", color: "#000" },
  });
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      const adjustedIndex = index % testimonials.length;
      swiperRef.current.slideTo(adjustedIndex);
      setActiveIndex(adjustedIndex);
    }
  };

  return (
    <section className="py-24 bg-white container mx-auto" id="testimoni">
      <ToastContainer className="z-[9999] fixed" />
      <div className="mx-5 md:mx-0">
        <h2
          className="text-3xl font-bold text-center md:text-start mb-8"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Testimoni
        </h2>
        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={isMobile ? 1 : 2}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 pb-16 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 md:w-52 md:h-full rounded-xl object-cover mb-4 md:mb-0 md:mr-6"
                  data-aos="fade-up"
                  data-aos-duration={`${800 + index * 300}`}
                />
                <div>
                  <p
                    className="text-gray-800 italic"
                    data-aos="fade-up"
                    data-aos-duration={`${900 + index * 300}`}
                  >
                    "{testimonial.testimonial}"
                  </p>
                  <div
                    className="w-28 h-[2px] my-5 bg-red-500"
                    data-aos="fade-up"
                    data-aos-duration={`${900 + index * 300}`}
                  ></div>
                  <h4
                    className="text-lg font-bold"
                    data-aos="fade-up"
                    data-aos-duration={`${950 + index * 300}`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm text-gray-600"
                    data-aos="fade-up"
                    data-aos-duration={`${1000 + index * 300}`}
                  >
                    {testimonial.title}
                  </p>
                  <p
                    className="text-sm text-gray-600"
                    data-aos="fade-up"
                    data-aos-duration={`${1100 + index * 300}`}
                  >
                    {testimonial.organization}
                  </p>
                </div>
                <a
                  className="absolute cursor-pointer bottom-5 right-7 text-red-500 text-sm font-bold underline mt-4 inline-block"
                  data-aos="fade-up"
                  data-aos-duration={`${800 + index * 300}`}
                  onClick={alertClick}
                >
                  Baca Lebih Lanjut
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex justify-center space-x-3 md:space-x-5 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                index === activeIndex
                  ? "bg-black"
                  : "bg-transparent border-2 border-black"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Custom hook to detect mobile screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768); // Adjust as needed
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const testimonials = [
  {
    name: "Chika Dania",
    title: "Pekerja Sosial",
    organization: "Komunitas Peduli Lingkungan Jakarta",
    testimonial:
      "Melalui Youth-Growth, saya bisa bergabung dalam Community yang penuh inspirasi. Volunteer Program mereka memperkuat komitmen saya pada kerja sosial. Ini platform luar biasa untuk yang ingin membuat perubahan.",
    image: "/testimoni/chika.png",
  },
  {
    name: "Arya Baskoro",
    title: "Asisten Manajer HRD",
    organization: "TechnoCrops",
    testimonial:
      "Youth-Growth mempersiapkan saya menghadapi dunia kerja. Career Program dan informasi beasiswa sangat membantu saya berkembang. Komunitasnya pun penuh dengan orang-orang yang memotivasi. Platform ini sangat saya rekomendasikan!",
    image: "/testimoni/arya.png",
  },
  {
    name: "Nadia Ramadhani ",
    title: "Mahasiswa Ilmu Komunikasi",
    organization: "Universitas Gadjah Mada",
    testimonial:
      "Youth-Growth adalah sumber inspirasi bagi saya. Program Scholarship mempermudah saya menemukan beasiswa, dan Volunteer Program membuat saya lebih peka terhadap isu sosial. Platform ini benar-benar mendukung perkembangan anak muda.",
    image: "/testimoni/nadia.png",
  },
  {
    name: "Raka Mahendra",
    title: "Fresh Graduate Teknik Mesin",
    organization: "Institute Teknologi Bandung",
    testimonial:
      "Pelatihan di Youth-Growth sangat membantu! Workshop mereka memperkaya keterampilan teknis saya, dan Career Program membimbing saya dalam memulai karir. Saya sangat merekomendasikan Youth-Growth untuk pemuda yang ingin sukses.",
    image: "/testimoni/raka.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const isMobile = useIsMobile();

  // Update active index when slide changes
  const handleSlideChange = (swiper) => {
    // Use realIndex to ensure proper handling of looped slides
    setActiveIndex(swiper.realIndex); // Use realIndex instead of activeIndex
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    if (swiperRef.current) {
      // We are using slideTo method but correcting for loop behavior
      const adjustedIndex = index % testimonials.length; // Ensure index wraps around correctly
      swiperRef.current.slideTo(adjustedIndex);
      setActiveIndex(adjustedIndex);
    }
  };

  return (
    <section className="py-24 bg-white container mx-auto" id="testimoni">
      <div className="mx-5 md:mx-0">
        <h2 className="text-3xl font-bold text-center md:text-start mb-8">Testimoni</h2>
        <Swiper
          onSlideChange={handleSlideChange} // Update active index on slide change
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
                />
                <div>
                  <p className="text-gray-800 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="w-28 h-[2px] my-5 bg-red-500"></div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.organization}
                  </p>
                </div>
                <a
                  href="#"
                  className="absolute bottom-5 right-7 text-red-500 text-sm font-bold underline mt-4 inline-block"
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

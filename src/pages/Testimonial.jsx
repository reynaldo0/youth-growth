import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    name: "Chika Dania",
    title: "Pekerja Sosial",
    organization: "Komunitas Peduli Lingkungan Jakarta",
    testimonial:
      "Melalui Youth-Growth, saya bisa bergabung dalam Community yang penuh inspirasi. Volunteer Program mereka memperkuat komitmen saya pada kerja sosial. Ini platform luar biasa untuk yang ingin membuat perubahan.",
    image: "/testimoni/1.png", // Ganti dengan URL gambar asli
  },
  {
    name: "Arya Baskoro",
    title: "Asisten Manajer HRD",
    organization: "TechnoCrops",
    testimonial:
      "Youth-Growth mempersiapkan saya menghadapi dunia kerja. Career Program dan informasi beasiswa sangat membantu saya berkembang. Komunitasnya pun penuh dengan orang-orang yang memotivasi. Platform ini sangat saya rekomendasikan!",
    image: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
  },
  {
    name: "Rina Sari",
    title: "Mahasiswa",
    organization: "Universitas ABC",
    testimonial:
      "Youth-Growth memberikan wawasan yang sangat berguna untuk dunia kerja. Saya merasa lebih percaya diri menghadapi tantangan ke depan.",
    image: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Indeks slide aktif
  const swiperRef = useRef(null); // Referensi untuk Swiper

  // Fungsi untuk berpindah ke slide tertentu
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Pindah ke slide tertentu
      setActiveIndex(index); // Perbarui indeks aktif
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimoni</h2>
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Perbarui indeks saat slide berubah
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Simpan instance Swiper ke referensi
          spaceBetween={30}
          slidesPerView={2}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 pb-16 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start">
                {/* Gambar */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 md:w-52 md:h-full rounded-xl object-cover mb-4 md:mb-0 md:mr-6"
                />
                {/* Teks */}
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
        <div className="flex justify-center space-x-3 md:space-x-5 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)} // Navigasi ke slide tertentu
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

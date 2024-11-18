import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimoni</h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
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
      </div>
    </section>
  );
};

export default Testimonials;

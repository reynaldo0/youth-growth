import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Generasi", "Indonesia"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-red-500"
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md md:text-stroke-lg font-sans tracking-wide">
          YOUTH GROWTH
        </h1>

        <p className="text-lg md:text-4xl mb-2 font-montserrat">
        <span ref={typedElement}></span> Emas 2024
        </p>
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-x-5 top-1/2 border-t-4 border-[#FF8C00]" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
          Platform Pengembangan Diri dan Kesempatan Emas Bagi Generasi Muda
        </p>
        <div className="border-2 h-48 w-96 mb-10"></div>
        <a href="#map">
          <button className="bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-semibold hover:bg-[#FF8C00]/70">
            Jelajahi
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

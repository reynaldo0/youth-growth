import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedElement = useRef(null);

  // Array of background images
  const images = [
    "url('/background/bg1.png')",
    "url('/background/bg2.png')",
    "url('/background/bg3.png')",
    "url('/background/bg4.png')",
  ];

  // State to keep track of current and previous background indices
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [prevBgImageIndex, setPrevBgImageIndex] = useState(null);

  useEffect(() => {
    // Initialize Typed.js
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

  useEffect(() => {
    // Set interval to change background image index
    const interval = setInterval(() => {
      setPrevBgImageIndex(bgImageIndex); // Set the previous image index
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Update to the next image
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [bgImageIndex, images.length]);

  return (
    <div className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* Background Images with Fade Transition */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: images[prevBgImageIndex],
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: prevBgImageIndex === null ? 0 : 1,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: images[bgImageIndex],
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 1,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/100 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center pt-12 justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md md:text-stroke-lg font-sans tracking-wide">
          <span className="text-[#F92020]">YOUTH</span> GROWTH
        </h1>

        <p className="text-lg md:text-4xl mb-4 font-montserrat">
          Menuju <span ref={typedElement}></span> Emas 2024
        </p>
        <div className="relative w-full max-w-md mx-auto mb-6">
          <div className="absolute inset-x-5 top-1/2 border-t-4 border-[#F92020]" />
        </div>

        <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
          Platform Pengembangan Diri dan Kesempatan Emas Bagi Generasi Muda
        </p>
        <a href="#map">
          <button className="bg-transparent border-2 border-white bg-[#F92020] text-white text-2xl px-16 py-3 rounded-full font-semibold hover:bg-black hover:text-white">
            Jelajahi
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;

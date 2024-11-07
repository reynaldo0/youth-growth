import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = ({ height = '80vh' }) => {
  const typedElement = useRef(null);

  // Array of background images and corresponding text for "Growth"
  const images = [
    "url('/background/bg1.png')",
    "url('/background/bg2.png')",
    "url('/background/bg3.png')",
    "url('/background/bg4.png')",
  ];

  const growthTexts = ["Growth", "Innovation", "Empowerment", "Opportunity"];

  // State to keep track of current and previous background indices
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [prevBgImageIndex, setPrevBgImageIndex] = useState(null);
  const [growthText, setGrowthText] = useState(growthTexts[0]); // State for dynamic text
  const [textAnimating, setTextAnimating] = useState(false); // For managing text animation state

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
    // Set interval to change background image index with sliding effect
    const interval = setInterval(() => {
      setPrevBgImageIndex(bgImageIndex); // Set the previous image index
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Update to the next image
      setTextAnimating(true); // Trigger text animation when image changes

      // Set the new text for "Growth" after a small delay for animation
      setTimeout(() => {
        setGrowthText(growthTexts[(bgImageIndex + 1) % growthTexts.length]);
        setTextAnimating(false); // Reset text animation state after animation finishes
      }, 1000); // Delay to match the transition duration of the text

    }, 5000); // Change image and text every 5 seconds

    return () => clearInterval(interval);
  }, [bgImageIndex, images.length, growthTexts]);

  const handlePaginationClick = (index) => {
    setPrevBgImageIndex(bgImageIndex); // Set the current image as the previous image
    setBgImageIndex(index); // Update to the clicked image index
    setGrowthText(growthTexts[index]); // Update the text
    setTextAnimating(true); // Trigger text animation when image changes
  };

  return (
    <div className="mx-12 pt-16">
      <div className="relative overflow-hidden rounded-b-3xl" style={{ height: height }}>
        {/* Background Images with Sliding Animation */}
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            backgroundImage: images[prevBgImageIndex],
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "translateX(100%)", // Previous image moves out to the right
            opacity: prevBgImageIndex === null ? 0 : 1,
            height: '100%',  // Ensure background covers the full height
          }}
        />
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            backgroundImage: images[bgImageIndex],
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: "translateX(0)", // New image enters from the left
            height: '100%',  // Ensure background covers the full height
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content aligned to the left */}
        <div className="relative z-10 flex flex-col items-start pt-12 justify-center h-full text-left text-white px-4 ml-12" style={{ height: '100%' }}>
          <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md md:text-stroke-lg font-sans tracking-wide">
            <span className="text-[#F92020]">YOUTH </span>
            {/* Slide text animation */}
            <span
              className={`transition-all duration-700 ease-in-out transform ${textAnimating
                ? "translate-y-8 opacity-0" // Old text slides out upwards
                : "translate-y-0 opacity-100" // New text slides in from the bottom
                }`}
              style={{
                display: "inline-block",
              }}
            >
              {growthText}
            </span>
          </h1>

          <p className="text-lg md:text-4xl mb-4 font-montserrat border-b-4 pb-5 pt-3 border-[#F92020]">
            Menuju <span ref={typedElement}></span> Emas 2024
          </p>

          <p className="max-w-2xl text-lg md:text-xl pt-5 md:pt-0 mb-8">
            Platform Pengembangan Diri dan Kesempatan Emas Bagi Generasi Muda
          </p>
          <a href="#map">
            <button className="bg-transparent border-2 border-white bg-[#F92020] text-white text-2xl px-16 py-3 rounded-full font-semibold hover:bg-black hover:text-white">
              Jelajahi
            </button>
          </a>
        </div>

        {/* Pagination Buttons */}
      </div>
      <div className="absolute pt-5 left-1/2 z-50 transform -translate-x-1/2 flex space-x-4 scale-125">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-3 h-3 rounded-full ${bgImageIndex === index ? 'bg-black' : 'bg-transparent border-2 border-black opacity-50 hover:opacity-75'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

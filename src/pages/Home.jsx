import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = ({ height = "80vh" }) => {
  const typedElement = useRef(null);

  const growthTexts = ["Growth", "Innovation", "Empowerment", "Opportunity"];

  // State to keep track of current and previous background indices
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [prevBgImageIndex, setPrevBgImageIndex] = useState(null);
  const [growthText, setGrowthText] = useState(growthTexts[0]);
  const [textAnimating, setTextAnimating] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevBgImageIndex(bgImageIndex);
      setBgImageIndex((prevIndex) => (prevIndex + 1) % 4);
      setTextAnimating(true);

      // Update `growthText` after a short delay for smoother transition
      setTimeout(() => {
        setGrowthText(growthTexts[(bgImageIndex + 1) % growthTexts.length]);
        setTextAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImageIndex]);

  const handlePaginationClick = (index) => {
    // Only trigger animation if the clicked index is different from the current bgImageIndex
    if (index !== bgImageIndex) {
      setPrevBgImageIndex(bgImageIndex);
      setBgImageIndex(index);
      setTextAnimating(true);

      // Use a delay to transition the growthText smoothly
      setTimeout(() => {
        setGrowthText(growthTexts[index]);
        setTextAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="md:mx-12 md:pt-16 sm:min-h-screen">
      <div
        className="relative overflow-hidden md:rounded-b-3xl"
        style={{ height: height }}
      >
        {/* Background Images with Side Sliding Effect */}
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === bgImageIndex
                ? "translate-x-0 opacity-100"
                : index === prevBgImageIndex
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
            style={{
              backgroundImage: `url('/background/bg${index + 1}.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "100%",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content centered both vertically and horizontally */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5 md:ml-12"
          style={{ height: "100%" }}
        >
          <h1 className="text-4xl md:text-7xl font-black mb-1 text-stroke-md md:text-stroke-lg font-sans tracking-wide">
            <span className="text-[#F92020]">Youth </span>{" "}
            <br className="md:hidden" />
            <span
              className={`transition-all duration-700 pb-2 ease-in-out transform ${
                textAnimating
                  ? "translate-y-8 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
              style={{
                display: "inline-block",
              }}
            >
              <span
                className={
                  growthText === "Growth" ? "text-black" : "text-white"
                }
                style={{
                  WebkitTextStroke:
                    growthText === "Growth" ? "2px white" : undefined,
                }}
              >
                {growthText}
              </span>
            </span>
          </h1>

          <p className="text-2xl md:text-4xl mb-16 font-montserrat md:pb-3 pt-3">
            Menuju <span ref={typedElement}></span> Emas 2024
          </p>

          <a href="#about">
            <button className="border-2 border-white bg-[#F92020] text-white text-xl sm:text-2xl px-8 sm:px-12 py-2 rounded-full font-mono hover:bg-[#F92020]/90">
              Jelajahi
            </button>
          </a>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="absolute hidden pt-5 left-1/2 z-50 transform -translate-x-1/2 md:flex space-x-4 scale-125">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={`w-3 h-3 rounded-full ${
              bgImageIndex === index
                ? "bg-black"
                : "bg-transparent border-2 border-black opacity-50 hover:opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

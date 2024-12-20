import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Home = ({ height = "80vh" }) => {
  const typedElement = useRef(null);

  const growthTexts = [
    "Youth Growth",
    "Always Learn",
    "Stay Connected",
    "Be Empowered",
  ];

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

      setTimeout(() => {
        setGrowthText(growthTexts[(bgImageIndex + 1) % growthTexts.length]);
        setTextAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImageIndex]);

  const handlePaginationClick = (index) => {
    if (index !== bgImageIndex) {
      setPrevBgImageIndex(bgImageIndex);
      setBgImageIndex(index);
      setTextAnimating(true);

      setTimeout(() => {
        setGrowthText(growthTexts[index]);
        setTextAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="md:mx-12 mt-20 md:mt-0 md:pt-16 sm:min-h-screen pb-[55px] md:pb-0">
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
            } w-screen h-screen`}
            style={{
              backgroundImage: `url('/background/bg${index + 1}.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content centered both vertically and horizontally */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-5 md:ml-12"
          style={{ height: "100%" }}
        >
          <h1
            className="text-5xl md:text-7xl font-black mb-1 text-stroke-md md:text-stroke-lg font-sans tracking-wide"
            data-aos="fade-up"
            data-aos-duration="800"
          >
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
              {growthText.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={word === "Youth" ? "text-[#F92020]" : "text-white"}
                >
                  {word}{" "}
                </span>
              ))}
            </span>
          </h1>

          <p
            className="text-2xl md:text-4xl mb-16 font-montserrat md:pb-3 pt-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Menuju <span ref={typedElement}></span> Emas 2024
          </p>

          <a href="#about" data-aos="fade-up" data-aos-duration="1100">
            <button className="border-2 border-white bg-[#F92020]/80 text-white text-2xl md:text-3xl px-12 py-3 md:px-12 md:py-2 rounded-full font-medium hover:bg-[#F92020]/70">
              Jelajahi
            </button>
          </a>
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="absolute pt-4 left-1/2 z-50 transform -translate-x-1/2 md:flex space-x-4 scale-125">
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

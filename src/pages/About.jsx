// About.js
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Garuda from "../components/Models/Garuda";

const useScrollAnimation = (elementRef, callback) => {
  const handleScroll = () => {
    const element = elementRef.current;

    if (element) {
      const elementPosition = element.getBoundingClientRect();

      callback(element, elementPosition);
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
};

const About = () => {
  const lineRef = useRef(null);

  useScrollAnimation(lineRef, (element, position) => {
    const positionTop = position.top - window.innerHeight;
    const marginRight = 16;

    if (positionTop < 0) {
      const newWidth = Math.abs(positionTop);
      const maxWidth =
        window.innerWidth - element.getBoundingClientRect().left - marginRight;
      element.style.width = `${Math.min(newWidth, maxWidth)}px`;
    }
  });

  return (
    <section
      id="about"
      className="bg-cover bg-center bg-repeat pb-36 pt-16"
      style={{ backgroundImage: "url('/bg/background.png')" }}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse flex-wrap items-center justify-between gap-10 md:flex-row md:gap-0">
          <div className="relative flex w-full items-center justify-center md:w-1/2">
            <Canvas
              camera={{ position: [0, 1, 3], fov: 50 }}
              style={{ width: "100%", height: "500px" }}>
              {/* Add Lights */}
              <Environment preset="dawn" />
              <ambientLight intensity={0.5} /> {/* Soft general light */}
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1} // Intensity of the spotlight
                castShadow
              />
              <Garuda /> {/* Render the rotating Model component */}
              <OrbitControls /> {/* Enable user to control the rotation */}
            </Canvas>
          </div>
          <div className="w-full md:w-1/2">
            <h1
              id="rebelliumText"
              className="relative mb-8 font-radioCasnada text-4xl font-semibold md:text-5xl">
              Apa itu <span className="text-yellow z-10">Youth Growth?</span>
              <div ref={lineRef} className="line bg-yellow z-10"></div>
            </h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              id="rebelliumDesc"
              className="text-sm text-secondary-200 md:max-w-2xl md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus repellat hic laborum cupiditate quo excepturi voluptatibus porro neque dolorum quas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

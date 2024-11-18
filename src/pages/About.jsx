import React, { useRef, useEffect, useState } from "react";
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

  // State for responsive canvas size
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(1); // Scale for 3D object

  useEffect(() => {
    const updateCanvasSize = () => {
      // Dynamically scale 3D object based on viewport width
      const newScale = window.innerWidth < 768 ? 0.8 : 1; // For mobile, scale down
      setScale(newScale);
    };

    // Update canvas size on mount and window resize
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-cover bg-center bg-repeat pb-36 pt-16"
      style={{ backgroundImage: "url('/bg/background.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-0 items-center justify-between">
          {/* 3D Model */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <div ref={canvasRef} className="w-full h-[200px] scale-150 md:scale-100 mr-60 md:mr-0 sm:h-[400px] md:h-[500px]">
              <Canvas
                camera={{ position: [0, 1, 3], fov: 50 }}
                style={{ width: "100%", height: "100%" }}
              >
                <Environment preset="dawn" />
                <ambientLight intensity={0.5} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={1}
                  castShadow
                />
                <Garuda scale={scale} /> {/* Apply dynamic scale */}
                <OrbitControls />
              </Canvas>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h1 className="relative mb-8 text-4xl font-semibold text-primary-500 md:text-5xl">
              lorem <span className="text-yellow z-10">lorem</span>
              <div ref={lineRef} className="line bg-yellow z-10"></div>
            </h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              id="rebelliumDesc"
              className="text-sm text-secondary-200 md:max-w-2xl md:text-base sm:px-4 md:px-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              repellat hic laborum cupiditate quo excepturi voluptatibus porro
              neque dolorum quas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

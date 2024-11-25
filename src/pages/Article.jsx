import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import gaya untuk toastify
import articles from "../docs/article";

const Artikel = () => {
  const alertClick = () => {
    toast.error("Artikel Tidak Ditemukan", {
      position: "top-center",
      autoClose: 3000,
      style: { backgroundColor: "#ffff", color: "#000" },
    });
  };

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section className="py-16" id="article">
      <ToastContainer className="z-[9999] fixed" />
      <div className="px-4 relative md:px-10 lg:px-20 py-8">
        <h2
          className="text-3xl font-bold mb-6"
          data-aos={isMobile ? "fade-up" : "fade-right"}
          data-aos-duration="1000"
        >
          Artikel
        </h2>
        <div className="flex absolute top-8 right-5 md:right-20 justify-end mb-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            onClick={alertClick}
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-duration="1000"
          >
            Lihat Artikel Lainnya
          </button>
        </div>
        <div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {articles.map((art, index) => (
            <div
              key={index}
              className="bg-white transition-all duration-300 transform hover:-translate-y-2 hover:translate-x-2 border-l-4 border-b-4 border-r border-t border-transparent hover:border-[#F92020] shadow-md rounded-lg overflow-hidden hover:shadow-lg flex flex-col justify-between"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{art.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 text-justify">
                    {art.description}{" "}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={alertClick}
                    >
                      Baca Selengkapnya
                    </span>
                  </p>
                </div>
                <div className="text-gray-500 text-sm flex justify-between items-center mt-auto">
                  <span>{art.date}</span>
                  <div className="space-x-2 flex items-center">
                    <button className="hover:text-red-500">
                      <img
                        src="/icon/bookmark.svg"
                        alt="Bookmark"
                        className="svg-icon hover:filter hover:hue-rotate-[90deg] hover:brightness-0 hover:saturate-100"
                        width={18}
                        height={18}
                      />
                    </button>
                    <button className="hover:text-red-500">
                      <img
                        src="icon/heart.svg"
                        alt="Heart"
                        className="svg-icon hover:filter hover:hue-rotate-[90deg] hover:brightness-0 hover:saturate-100"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artikel;

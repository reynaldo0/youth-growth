import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import Calendar from "../components/Calender";
import calender from "../docs/calender";

const CalendarSection = () => {

  const daysOfWeek = ["S", "S", "R", "K", "J", "S", "M"];
  const startDate = 28;
  const highlightDatesRed = [3, 10, 17, 24, 31];
  const highlightDatesGreen = [1, 8, 15, 22, 29];

  const [isMobile, setIsMobile] = useState(false);

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

  const alertClick = () => {
    toast.error("Agenda Tidak Ditemukan", {
      position: "top-center",
      autoClose: 3000,
      style: { backgroundColor: "#ffff", color: "#000" },
    });
  };

  return (
    <section className="bg-white py-12" id="calender">
      <ToastContainer className="z-[9999] fixed" />
      <h2
        className="text-white md:pl-20 py-2 rounded-r-full bg-red-500 inline-block px-5 md:px-10 font-serif text-2xl md:text-4xl mb-4"
        data-aos={isMobile ? "fade-up" : "fade-right"}
        data-aos-duration="800"
      >
        Kalender
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 items-start">
          {/* Kalender */}
          <div
            className="col-span-1 mx-5"
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-duration="1000"
          >
            <Calendar
              daysOfWeek={daysOfWeek}
              startDate={startDate}
              highlightDatesRed={highlightDatesRed}
              highlightDatesGreen={highlightDatesGreen}
            />
          </div>
          {/* Yang Akan Datang */}
          {/* Yang Akan Datang */}
          <div className="col-span-2">
            <div className="text-white rounded-lg p-4 md:p-0 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="text-red-500 font-bold text-xl"
                  data-aos={isMobile ? "fade-up" : "fade-right"}
                  data-aos-duration="800"
                >
                  Yang akan datang
                </h3>
                <button
                  className="text-white font-medium bg-red-500 px-2 md:px-5 py-2 rounded-full text-sm"
                  data-aos={isMobile ? "fade-up" : "fade-left"}
                  data-aos-duration="800"
                  onClick={alertClick}
                >
                  Lihat Agenda Lainnya
                </button>
              </div>
              <div className="bg-red-500 p-4 grid grid-cols-1 md:grid-cols-2 rounded-2xl gap-4 flex-grow">
                <div className="space-y-3 md:border-r-2 md:border-white md:pr-6">
                  {calender.slice(0, 5).map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border-b border-white pb-3"
                      data-aos="fade-up"
                      data-aos-duration={`${800 + index * 300}`}
                    >
                      <div className="text-white font-medium">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-2 flex-grow">
                        <h4 className="text-white font-medium text-sm">
                          {event.title}
                        </h4>
                        <p className="text-white text-xs">{event.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {calender.slice(5).map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border-b border-white pb-3"
                      data-aos="fade-up"
                      data-aos-duration={`${800 + index * 300}`}
                    >
                      <div className="text-white font-medium">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-2 flex-grow">
                        <h4 className="text-white font-medium text-sm">
                          {event.title}
                        </h4>
                        <p className="text-white text-xs">{event.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;

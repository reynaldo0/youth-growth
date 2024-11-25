import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "../components/Modal";
import { events } from "../docs/events";

const EventsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
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

  const alertClick = () => {
    toast.error("Agenda Tidak Ditemukan", {
      position: "top-center",
      autoClose: 3000,
      style: { backgroundColor: "#ffff", color: "#000" },
    });
  };

  return (
    <section className="py-16 md:py-20" id="agenda">
      <ToastContainer className="z-[9999] fixed" />
      <div className="px-4 relative md:px-10 lg:px-20 py-5">
        <h2
          className="text-3xl font-bold md:mb-6 mx-auto container md:px-5"
          data-aos={isMobile ? "fade-up" : "fade-right"}
          data-aos-duration="1000"
        >
          Agenda
        </h2>
        <div className="flex absolute top-8 right-5 md:right-20 justify-end mb-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-duration="1000"
            onClick={alertClick}
          >
            Lihat Agenda Lainnya
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="relative">
              <div
                className="bg-white pb-20 h-full shadow-md rounded-lg p-6 border-l-4 border-red-600"
                data-aos="fade-up"
                data-aos-duration={`${800 + index * 300}`}
              >
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Tanggal:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Lokasi:</strong> {event.location}
                </p>
                <p className="text-gray-700 mt-3">{event.description}</p>
                <button
                  onClick={() => openModal(event)}
                  className="absolute bottom-5 left-5 mt-4 bg-red-500 py-2 px-4 hover:bg-red-500/90 rounded-xl text-white font-medium"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedEvent && (
          <Modal
            event={selectedEvent}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default EventsSection;

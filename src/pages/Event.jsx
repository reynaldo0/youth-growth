import React, { useState } from "react";
import { createPortal } from "react-dom";

const events = [
  {
    title: "Forum Pemuda Indonesia: Mewujudkan Indonesia Emas 2024",
    date: "15 November 2024",
    location: "Jakarta, Indonesia",
    description:
      "Forum ini mempertemukan pemuda Indonesia untuk berdiskusi tentang peran mereka dalam mewujudkan Indonesia Emas 2024. Bersama para pemimpin muda, kita akan menggali potensi dan kontribusi generasi muda dalam memajukan bangsa.",
  },
  {
    title:
      "Seminar Ekonomi Nasional: Strategi Meningkatkan Pertumbuhan untuk Indonesia Emas 2024",
    date: "25 November 2024",
    location: "Surabaya, Indonesia",
    description:
      "Seminar ini akan membahas berbagai strategi ekonomi untuk mempercepat pertumbuhan Indonesia menuju Indonesia Emas 2024. Para ekonom terkemuka akan berbagi wawasan tentang kebijakan yang dapat mendukung perekonomian yang inklusif dan berkelanjutan.",
  },
  {
    title: "Pameran Industri Kreatif Indonesia: Menuju Indonesia Emas 2024",
    date: "5 Desember 2024",
    location: "Bali, Indonesia",
    description:
      "Pameran ini menampilkan produk-produk unggulan industri kreatif Indonesia. Para pelaku industri kreatif akan memperkenalkan karya terbaik mereka yang mendukung cita-cita Indonesia Emas 2024, dengan fokus pada pemberdayaan ekonomi kreatif.",
  },
];

// Modal Component
const Modal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modalOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 float-right font-bold text-lg"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-red-700 mb-4">
          Daftar untuk {event.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Tanggal:</strong> {event.date}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Lokasi:</strong> {event.location}
        </p>
        <RegistrationForm />
      </div>
    </div>,
    document.body
  );
};

// Registration Form Component
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Pendaftaran berhasil! Kami akan menghubungi Anda lebih lanjut.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nama Lengkap"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Nomor Telepon"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
      />
      <textarea
        name="notes"
        placeholder="Catatan (Opsional)"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-500"
      />
      <button
        type="submit"
        className="w-full bg-red-500 text-white rounded-lg py-2 hover:bg-red-500 transition-all"
      >
        Daftar Sekarang
      </button>
    </form>
  );
};

// Events Section
const EventsSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <section className="py-16 md:py-24" id="events">
      <h2 className="text-white md:pl-20 py-2 rounded-r-full bg-red-500 inline-block px-5 md:px-10 font-serif text-2xl md:text-4xl mb-4">
        Agenda
      </h2>
      <div className="container mx-auto px-6 md:px-10">

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div className="relative">
              <div
                key={index}
                className="bg-white pb-20 h-full shadow-md rounded-lg p-6 border-l-4 border-red-600"
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
                  className="absolute bottom-5 left-5 mt-4 bg-red-500 py-2 px-4 hover:bg-red-500/90 rounded-xl text-white  font-medium"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <Modal
          event={selectedEvent}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default EventsSection;

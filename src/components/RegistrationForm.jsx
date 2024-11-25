import React, { useState } from "react";

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

export default RegistrationForm;

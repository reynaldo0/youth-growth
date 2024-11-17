import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Testimoni
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Testimoni Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <p className="text-gray-600 mb-4">
              “Melalui Youth-Growth, saya bisa bergabung dalam Community yang
              penuh inspirasi. Volunteer Program merupakan platform yang sangat
              membantu saya.”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Chika Dania"
                className="rounded-full w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Chika Dania</h4>
                <p className="text-sm text-gray-500">Community Leader</p>
              </div>
            </div>
          </div>
          {/* Tambahkan Card kedua */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <p className="text-gray-600 mb-4">
              “Youth-Growth mempersiapkan saya dengan baik untuk dunia kerja
              melalui program ini.”
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/60"
                alt="Arya Baskoro"
                className="rounded-full w-12 h-12"
              />
              <div>
                <h4 className="font-bold text-gray-800">Arya Baskoro</h4>
                <p className="text-sm text-gray-500">TechCorp Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

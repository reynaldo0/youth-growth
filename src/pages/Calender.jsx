import React from "react";

const Calendar = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-red-500 font-bold text-xl mb-4">Kalender</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kalender */}
          <div className="col-span-1">
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">November 2024</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                <div>S</div>
                <div>S</div>
                <div>R</div>
                <div>K</div>
                <div>J</div>
                <div>M</div>
                <div>S</div>
                {[...Array(28).keys()].map((day) => (
                  <div key={day} className="text-gray-400">
                    {day + 1}
                  </div>
                ))}
                <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  19
                </div>
                {[...Array(11).keys()].map((day) => (
                  <div key={day} className="text-gray-400">
                    {day + 20}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Agenda */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Yang akan datang</h3>
            <div className="bg-red-100 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">26 Mei:</span> Youth Leadership
                  Camp 2024
                </li>
                <li>
                  <span className="font-bold">27 Mei:</span> Tech and Innovation
                  Workshop
                </li>
                {/* Tambahkan agenda lainnya sesuai kebutuhan */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;

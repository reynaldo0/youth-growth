import React from "react";

const Calendar = ({
  daysOfWeek,
  startDate,
  highlightDatesRed,
  highlightDatesGreen,
}) => {
  return (
    <div className="border rounded-lg p-4 h-full">
      <h3 className="text-lg font-bold mb-2">November 2024</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {/* Days of the Week */}
        {daysOfWeek.map((day, index) => (
          <div
            key={index}
            className={day === "J" ? "text-green-500" : "text-gray-400"}
          >
            {day}
          </div>
        ))}

        {/* Dates from 28th to 31st */}
        {[...Array(4).keys()].map((day, index) => (
          <div
            key={index}
            className="text-gray-400 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
          >
            {startDate + day}
          </div>
        ))}

        {/* Dates from 1st to 18th */}
        {[...Array(18).keys()].map((day, index) => (
          <div
            key={index + 4}
            className={`${
              highlightDatesRed.includes(day + 1)
                ? "text-red-500 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
                : highlightDatesGreen.includes(day + 1)
                ? "text-green-500 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
                : "text-gray-800 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
            }`}
          >
            {day + 1}
          </div>
        ))}

        {/* Specific styling for 19th */}
        <div className="bg-[#A1A1A1] text-white rounded-full w-8 h-8 flex items-center justify-center hover:text-white hover:bg-red-500">
          19
        </div>

        {/* Dates from 20th to 31st */}
        {[...Array(12).keys()].map((day, index) => (
          <div
            key={index + 19}
            className={`${
              highlightDatesRed.includes(day + 20)
                ? "text-red-500 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
                : highlightDatesGreen.includes(day + 20)
                ? "text-green-500 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
                : "text-gray-800 hover:text-white hover:bg-red-500 rounded-full w-8 h-8 items-center justify-center flex"
            }`}
          >
            {day + 20}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

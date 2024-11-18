import React from "react";
import { Bookmark } from "lucide-react"; // Import Bookmark icon from Lucide React

const CalendarSection = () => {
  const events = [
    {
      date: "22 Nov",
      title: "Youth Leadership Camp 2024",
      team: "Youth-Growth Community",
    },
    {
      date: "24 Nov",
      title: "Tech and Innovation Workshop",
      team: "Future Innovators Club",
    },
    {
      date: "27 Nov",
      title: "Volunteer for a Greener Tomorrow",
      team: "Green Youth Initiative",
    },
    {
      date: "2 Des",
      title: "Career Mentorship Day",
      team: "Career Connect Network",
    },
    {
      date: "5 Des",
      title: "Youth-Growth Scholarship Fair",
      team: "Youth-Growth Scholarship Team",
    },
    {
      date: "10 Des",
      title: "Scholarship Registration for 2025",
      team: "Youth-Growth Scholarship Committee",
    },
    {
      date: "11 Des",
      title: "Internship Program Registration",
      team: "Youth-Growth Internship Initiative",
    },
    {
      date: "15 Des",
      title: "Youth Empowerment Talk Series",
      team: "Youth Empowerment Forum",
    },
    {
      date: "20 Des",
      title: "Community Service Project Launch",
      team: "Youth-Growth Community Service Team",
    },
  ];

  const daysOfWeek = ["S", "S", "R", "K", "J", "S", "M"]; // Days of the week
  const startDate = 28; // Starting from 28
  const endDate = 1; // Ending on the 1st of the next month
  const highlightDatesRed = [3, 10, 17, 24, 31]; // Highlight these dates with red
  const highlightDatesGreen = [1, 8, 15, 22, 29]; // Highlight these dates with green

  return (
    <section className="bg-white py-8 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <h2 className="text-red-500 font-bold text-xl mb-4">Kalender</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Kalender */}
          <div className="col-span-1">
            <div className="border rounded-lg p-4 h-full">
              <h3 className="text-lg font-bold mb-2">November 2024</h3>
              <div className="grid grid-cols-7 gap-2 text-center">
                {daysOfWeek.map((day, index) => (
                  <div
                    key={index}
                    className={day === "J" ? "text-green-500" : "text-gray-400"}
                  >
                    {day}
                  </div>
                ))}

                {/* Starting from the 28th */}
                {[...Array(4).keys()].map((day, index) => (
                  <div key={index} className="text-gray-400">
                    {startDate + day}
                  </div>
                ))}

                {/* Continue from 1st till 18th */}
                {[...Array(18).keys()].map((day, index) => (
                  <div
                    key={index + 4}
                    className={`${
                      highlightDatesRed.includes(day + 1)
                        ? "text-red-500"
                        : highlightDatesGreen.includes(day + 1)
                        ? "text-green-500"
                        : "text-gray-800"
                    }`}
                  >
                    {day + 1}
                  </div>
                ))}

                {/* Style the 19th date with red background */}
                <div className="bg-[#A1A1A1] text-white rounded-full w-8 h-8 flex items-center justify-center">
                  19
                </div>

                {/* Continue from 20th to 31st */}
                {[...Array(12).keys()].map((day, index) => (
                  <div
                    key={index + 19}
                    className={`${
                      highlightDatesRed.includes(day + 20)
                        ? "text-red-500"
                        : highlightDatesGreen.includes(day + 20)
                        ? "text-green-500"
                        : "text-gray-800"
                    }`}
                  >
                    {day + 20}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yang Akan Datang */}
          <div className="col-span-2">
            <div className="text-white rounded-lg p-4 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-red-500 font-bold text-xl">
                  Yang akan datang
                </h3>
                <button className="text-white font-medium bg-red-600 px-3 py-1 rounded-lg text-sm">
                  Lihat Agenda Lainnya
                </button>
              </div>
              <div className="bg-red-500 p-4 grid grid-cols-1 md:grid-cols-2 rounded-xl gap-4 flex-grow">
                {/* Left Column */}
                <div className="space-y-3 border-r-2 border-white pr-6">
                  {events.slice(0, 5).map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border-b border-white pb-3"
                    >
                      <div className="text-white font-medium">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-2 flex-grow">
                        <h4 className="text-white font-medium text-sm">
                          {event.title}
                        </h4>
                        <p className="text-white text-xs">{event.team}</p>
                      </div>
                      {/* Align the bookmark icon vertically */}
                      <div className="flex justify-center items-center">
                        <Bookmark className="w-4 h-4 text-white hover:text-gray-200" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  {events.slice(5).map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 border-b border-white pb-3"
                    >
                      <div className="text-white font-medium">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-2 flex-grow">
                        <h4 className="text-white font-medium text-sm">
                          {event.title}
                        </h4>
                        <p className="text-white text-xs">{event.team}</p>
                      </div>
                      {/* Align the bookmark icon vertically */}
                      <div className="flex justify-center items-center">
                        <Bookmark className="w-4 h-4 text-white hover:text-gray-200" />
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

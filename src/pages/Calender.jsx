import React from "react";

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

          {/* Yang Akan Datang */}
          <div className="col-span-2">
            <div className="bg-red-500 text-white rounded-lg p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white text-lg font-bold">
                  Yang akan datang
                </h3>
                <button className="text-white font-medium bg-red-600 px-4 py-1 rounded-lg">
                  Lihat Agenda Lainnya
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                <div className="space-y-4">
                  {/* Kolom pertama */}
                  {events.slice(0, 5).map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-white font-bold">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-4">
                        <h4 className="text-white font-semibold">
                          {event.title}
                        </h4>
                        <p className="text-white text-sm">{event.team}</p>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="white"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 6h14M5 12h14m-7 6h7"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {/* Kolom kedua */}
                  {events.slice(5).map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-white font-bold">{event.date}</div>
                      <div className="border-l-2 border-dashed border-white pl-4">
                        <h4 className="text-white font-semibold">
                          {event.title}
                        </h4>
                        <p className="text-white text-sm">{event.team}</p>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="white"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 6h14M5 12h14m-7 6h7"
                          />
                        </svg>
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

import React from "react";
import { Bookmark, Heart } from "lucide-react";

const articles = [
  {
    title: "Scholarships : Your Gateway to Academic Excellence",
    description:
      "With countless scholarship opportunities available, youth can pursue higher education without the burden of financial stress. Scholarships not only alleviate monetary concerns but also recognize and reward academic achievement, opening new avenues for personal and professional growth. By applying for these opportunities, young people",
    date: "20-11-2024",
    image: "/article/1.png",
  },
  {
    title: "Unlocking Opportunities with Youth Empowerment Programs",
    description:
      "Youth empowerment programs are paving the way for the next generation to develop essential skills, from leadership to social awareness. These initiatives not only provide resources and mentorship but also inspire young people to take charge of their futures and become agents of change in their communities. Through workshops, training sessions, and collab",
    date: "20-10-2024",
    image: "/article/2.png",
  },
  {
    title: "Community Engagement : Building Stronger Connections",
    description:
      "Engaging in community work not only fosters a sense of belonging but also enhances collaboration among youth. By volunteering and participating in local projects, young people can strengthen their social ties and develop a deeper understanding of the challenges faced by their communities. This active involvement promotes empathy, teamwork, and led",
    date: "15-10-2024",
    image: "/article/3.png",
  },
  {
    title: "How Internships Can Shape Your Career Path",
    description:
      "Internships provide invaluable hands-on experience, helping young individuals connect academic knowledge to real-world applications. By participating in internships, youth can build professional networks, learn workplace skills, and gain a clearer understanding of their career goals. This practical exposure not only enhances their resumes but also equips the",
    date: "29-09-2024",
    image: "/article/4.png",
  },
];

const Artikel = () => {
  return (
    <section className="py-24">
      <div className="px-4 relative md:px-10 lg:px-20 py-8">
        <h2 className="text-3xl font-bold mb-6">Artikel</h2>
        <div className="flex absolute top-8 right-20 justify-end mb-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
            Lihat Artikel Lainnya
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-2 text-justify">
                  {article.description}{" "}
                  <span className="text-red-500">Baca Selengkapnya</span>
                </p>
                <div className="text-gray-500 text-xs flex justify-between items-center">
                  <span>{article.date}</span>
                  <div className="space-x-2 flex items-center">
                    <button className="hover:text-red-500">
                      <Bookmark size={18} />
                    </button>
                    <button className="hover:text-red-500">
                      <Heart size={18} />
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

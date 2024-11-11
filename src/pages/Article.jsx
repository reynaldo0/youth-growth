import React from 'react';
import { Bookmark, Heart } from 'lucide-react';

const articles = [
  {
    title: "Scholarships: Your Gateway to Academic Excellence",
    description:
      "With countless scholarship opportunities available, youth can pursue higher education without the burden of financial stress...",
    date: "20-11-2024",
    image: "path/to/image1.jpg",
  },
  {
    title: "Unlocking Opportunities with Youth Empowerment Programs",
    description:
      "Youth empowerment programs are paving the way for the next generation to develop essential skills, from leadership to social awareness...",
    date: "20-10-2024",
    image: "path/to/image2.jpg",
  },
  {
    title: "Community Engagement: Building Stronger Connections",
    description:
      "Engaging in community work not only fosters a sense of belonging but also enhances collaboration among youth...",
    date: "15-10-2024",
    image: "path/to/image3.jpg",
  },
  {
    title: "How Internships Can Shape Your Career Path",
    description:
      "Internships provide invaluable hands-on experience, helping young individuals connect academic knowledge to real-world applications...",
    date: "29-09-2024",
    image: "path/to/image4.jpg",
  },
];

const Artikel = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-8">
      <h2 className="text-3xl font-bold mb-6">Artikel</h2>
      <div className="flex justify-end mb-4">
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
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.description} <span className="text-red-500">Baca Selengkapnya</span>
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
  );
};

export default Artikel;

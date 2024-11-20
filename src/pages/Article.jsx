import React, { useState } from "react";
import { Bookmark, Heart } from "lucide-react";

const articles = [
  {
    title: "Beasiswa: Gerbang Anda Menuju Keunggulan Akademik di Indonesia",
    description:
      "Dengan banyaknya kesempatan beasiswa yang tersedia, kaum muda dapat melanjutkan pendidikan tinggi tanpa beban stres finansial. Beasiswa tidak hanya meringankan masalah keuangan, tetapi juga mengakui dan menghargai pencapaian akademik, membuka peluang baru untuk pertumbuhan pribadi dan profesional. Dengan mengajukan permohonan untuk kesempatan ini, kaum muda",
    date: "20-11-2024",
    image: "/article/1.png",
  },
  {
    title: "Membuka Peluang dengan Program Pemberdayaan Pemuda",
    description:
      "Program pemberdayaan pemuda membuka jalan bagi generasi berikutnya untuk mengembangkan keterampilan penting, mulai dari kepemimpinan hingga kesadaran sosial. Inisiatif ini tidak hanya menyediakan sumber daya dan bimbingan, tetapi juga menginspirasi kaum muda untuk mengambil kendali atas masa depan mereka dan menjadi agen perubahan di komunitas mereka. Melalui lokakarya, sesi pelatihan, dan kolaborasi",
    date: "20-10-2024",
    image: "/article/2.png",
  },
  {
    title: "Keterlibatan Komunitas: Membangun Koneksi yang Lebih Kuat",
    description:
      "Terlibat dalam pekerjaan komunitas tidak hanya menumbuhkan rasa kebersamaan, tetapi juga meningkatkan kolaborasi di antara pemuda. Dengan menjadi sukarelawan dan berpartisipasi dalam proyek lokal, kaum muda dapat memperkuat ikatan sosial mereka dan mengembangkan pemahaman yang lebih dalam tentang tantangan yang dihadapi oleh komunitas mereka. Keterlibatan aktif ini mempromosikan empati, kerja sama, dan kepemimpinan",
    date: "15-10-2024",
    image: "/article/3.png",
  },
  {
    title: "Bagaimana Magang Dapat Membentuk Jalur Karir Anda",
    description:
      "Magang memberikan pengalaman langsung yang sangat berharga, membantu individu muda menghubungkan pengetahuan akademis dengan aplikasi dunia nyata. Dengan berpartisipasi dalam magang, pemuda dapat membangun jaringan profesional, mempelajari keterampilan di tempat kerja, dan mendapatkan pemahaman yang lebih jelas tentang tujuan karir mereka. Paparan praktis ini tidak hanya meningkatkan resume mereka, tetapi juga mempersiapkan mereka",
    date: "29-09-2024",
    image: "/article/4.png",
  },
];

const Artikel = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24" id="article">
      <div className="px-4 relative md:px-10 lg:px-20 py-8">
        <h2
          className="text-3xl text-red-500 font-bold mb-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Artikel
        </h2>
        <div className="flex absolute top-8 right-5 md:right-20 justify-end mb-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Lihat Artikel Lainnya
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`transition-all duration-300 transform hover:border-l-4 hover:border-b-4 hover:border-r hover:border-t rounded-lg overflow-hidden shadow-md ${
                expandedIndex === index
                  ? "bg-gray-100 border-red-500"
                  : "bg-white hover:-translate-y-2 hover:translate-x-2 hover:border-[#F92020]"
              }`}
              style={{ height: expandedIndex === index ? "auto" : "450px" }}
              data-aos="fade-up"
              data-aos-duration={`${800 + index * 300}`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                <p className="text-md text-gray-600 mb-2 text-justify">
                  {expandedIndex === index
                    ? article.description // Tampilkan seluruh deskripsi jika aktif
                    : `${article.description.slice(0, 100)}...`}{" "}
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index
                      ? "Sembunyikan"
                      : "Baca Selengkapnya"}
                  </span>
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

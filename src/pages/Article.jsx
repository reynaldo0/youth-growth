import React from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import gaya untuk toastify

const artikel = [
  {
    title: "Beasiswa: Gerbang Menuju Keunggulan Akademik",
    description:
      "Dengan berbagai kesempatan beasiswa yang tersedia, generasi muda dapat mengejar pendidikan tinggi tanpa beban stres keuangan. Beasiswa tidak hanya mengurangi kekhawatiran finansial tetapi juga mengakui dan memberi penghargaan atas",
    date: "20-11-2024",
    image: "/article/1.png",
  },
  {
    title: "Membuka Peluang dengan Program Pemberdayaan Pemuda",
    description:
      "Program pemberdayaan pemuda membuka jalan bagi generasi berikutnya untuk mengembangkan keterampilan penting, dari kepemimpinan hingga kesadaran sosial. Inisiatif ini tidak hanya memberikan sumber ",
    date: "20-10-2024",
    image: "/article/2.png",
  },
  {
    title: "Keterlibatan Komunitas: Membangun Koneksi yang Lebih Kuat",
    description:
      "Terlibat dalam kegiatan komunitas tidak hanya menumbuhkan rasa memiliki tetapi juga meningkatkan kolaborasi di antara pemuda. Dengan menjadi relawan dan berpartisipasi dalam proyek lokal, generasi ",
    date: "15-10-2024",
    image: "/article/3.png",
  },
  {
    title: "Bagaimana Magang Dapat Membentuk Jalur Karir Anda",
    description:
      "Magang memberikan pengalaman praktis yang sangat berharga, membantu individu muda menghubungkan pengetahuan akademik dengan aplikasi dunia nyata. Dengan mengikuti magang, pemuda dapat membangun jaringan profesional ",
    date: "29-09-2024",
    image: "/article/4.png",
  },
];

const Artikel = () => {
  // Fungsi untuk menampilkan toast saat tombol "Baca Selengkapnya" diklik
  const alertClick = () => {
    // Tampilkan toast info ketika tombol diklik
    toast.error("Artikel Tidak Ditemukan", {
      position: "top-center",
      autoClose: 3000,
      style: { backgroundColor: "#ffff", color: "#000" },
    });
  };

  return (
    <section className="py-16" id="article">
      <ToastContainer className="z-[9999] fixed" />
      <div className="px-4 relative md:px-10 lg:px-20 py-8">
        <h2 className="text-3xl font-bold mb-6">Artikel</h2>
        <div className="flex absolute top-8 right-5 md:right-20 justify-end mb-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600" onClick={alertClick}>
            Lihat Artikel Lainnya
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {artikel.map((art, index) => (
            <div
              key={index}
              className="bg-white transition-all duration-300 transform hover:-translate-y-2 hover:translate-x-2 border-l-4 border-b-4 border-r border-t border-transparent hover:border-[#F92020] shadow-md rounded-lg overflow-hidden hover:shadow-lg flex flex-col justify-between"
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{art.title}</h3>
                  <p className="text-sm text-gray-600 mb-2 text-justify">
                    {art.description}{" "}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={alertClick} // Call function on click
                    >
                      Baca Selengkapnya
                    </span>
                  </p>
                </div>
                <div className="text-gray-500 text-sm flex justify-between items-center mt-auto">
                  <span>{art.date}</span>
                  <div className="space-x-2 flex items-center">
                    <button className="hover:text-red-500">
                      {/* Bookmark icon with SVG URL */}
                      <img
                        src="/icon/bookmark.svg" // Replace with your SVG URL
                        alt="Bookmark"
                        className="svg-icon hover:filter hover:hue-rotate-[90deg] hover:brightness-0 hover:saturate-100"
                        width={18}
                        height={18}
                      />
                    </button>
                    <button className="hover:text-red-500">
                      {/* Heart icon with SVG URL */}
                      <img
                        src="icon/heart.svg" // Replace with your SVG URL
                        alt="Heart"
                        className="svg-icon hover:filter hover:hue-rotate-[90deg] hover:brightness-0 hover:saturate-100"
                        width={18}
                        height={18}
                      />
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

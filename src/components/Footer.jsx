import React from "react";
import { MapPin, Mail } from "lucide-react"; // Import the icons from lucide-react

const Footer = () => {
  return (
    <footer className="bg-red-900 md:px-10">
      <div className="container mx-auto w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 flex flex-col justify-between md:mb-0">
            <a href="#home" className="flex items-center">
              <p className="text-2xl md:text-3xl tracking-wider text-white font-bold">
                Youth Growth
              </p>
            </a>

            <div className="mb-5 mt-10 md:mb-0">
              <h2 className="mb-6 text-base font-semibold uppercase text-white">
                Hubungi Kami
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4 flex items-center gap-3 text-base">
                  <MapPin className="w-5 h-5 text-gray-300/90" />{" "}
                  {/* Using MapPin icon */}
                  <a href="#" className="hover:underline">
                    Indonesia
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-3 text-base">
                  <Mail className="w-5 h-5 text-gray-300/90" />{" "}
                  {/* Using Mail icon */}
                  <a
                    href="mailto:youthgrowth@gmail.com?subject=Hallo Youth Growth! Saya ingin mengajak anda untuk berkolaborasi untuk mewujudkan Indonesia Emas 2024..."
                    className="hover:underline"
                  >
                    youthgrowth@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8 md:gap-10 lg:gap-28">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Akses Konten
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Beranda
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#about" className="hover:underline">
                    Tentang
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#agenda" className="hover:underline">
                    Agenda
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#article" className="hover:underline">
                    Artikel
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#testimoni" className="hover:underline">
                    Testimoni
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Tim Kami
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/rynldysllino"
                    className=" hover:underline"
                  >
                    Reynaldo <br /> Yusellino
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/ikhsan.nrd_"
                    className="hover:underline"
                  >
                    Muhammad <br /> ikhsanurridha
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Credit
              </h2>
              <ul className="font-medium text-gray-300/90">
                <li className="mb-4">
                  <a
                    href="https://www.pinterest.com"
                    className="hover:underline"
                  >
                    Pinterest
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-center text-sm text-gray-300/90">
            Dibuat oleh Tim Logic Lab
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useRef } from "react";

const Navbar = () => {
  const collapseBtnRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    if (collapseRef.current && collapseBtnRef.current) {
      const collapse = collapseRef.current;
      const collapseBtn = collapseBtnRef.current;

      collapseBtn.onclick = () => {
        collapse.classList.toggle("hidden");
      };
    }
  }, []);

  return (
    <header>
      <nav className="fixed left-0 top-0 z-[9999] md:px-10 w-full border-white shadow-sm bg-white backdrop-blur-md bg-opacity-80 border rounded-lg">
        <div className="container mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <p className="text-2xl text-[#F92020] font-bold">
              Youth <span className="text-black">Growth</span>
            </p>
          </a>
          <button
            ref={collapseBtnRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="w-full hidden md:block md:w-auto" ref={collapseRef}>
            <ul className="mt-4 flex flex-col h-full rounded-lg border border-gray-100 bg-white p-4 font-medium md:mt-0 md:flex-row md:items-center md:space-x-10 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="relative block rounded px-3 py-2 md:text-black before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-[#F92020]"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="relative block rounded px-3 py-2 md:text-black before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-[#F92020]"
                >
                  Tentang
                </a>
              </li>

              <li>
                <a
                  href="#agenda"
                  className="relative block rounded px-3 py-2 md:text-black before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-[#F92020]"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#article"
                  className="relative block rounded px-3 py-2 md:text-black before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-[#F92020]"
                >
                  Artikel
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="relative block rounded px-3 py-2 md:text-black before:absolute before:-bottom-2 before:left-0 before:h-[2.5px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:transition before:content-[''] hover:bg-gray-100 hover:before:scale-x-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:before:opacity-100 md:hover:bg-transparent md:hover:text-primary-100 md:dark:hover:bg-transparent md:dark:hover:text-[#F92020]"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

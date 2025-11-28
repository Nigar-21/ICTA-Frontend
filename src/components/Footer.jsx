import React, { useState } from "react";
import Logo from "../assets/icta-logo.png";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <footer className="bg-[#162556] text-white py-8 px-4 sm:py-10 sm:px-8 mt-auto relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="ICTA Logo"
            className="w-[180px] sm:w-[220px] md:w-[300px]"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 
                15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 
                1.125 0 00-.852-1.09l-4.423-1.106a1.125 
                1.125 0 00-1.173.417l-.97 1.293a1.125 
                1.125 0 01-1.21.38A12.035 12.035 0 
                015.786 9.53a1.125 1.125 0 
                01.38-1.21l1.293-.97a1.125 1.125 
                0 00.417-1.173L6.77 1.754A1.125 
                1.125 0 005.68.9H4.31A2.25 2.25 0 
                002.25 3.15v3.6z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Bizimlə əlaqə</span>
          </button>

          <button
            onClick={() => window.open("https://tm.icta.az/projects/texniki_d-st-k/issues", "_blank")}
            className="flex items-center gap-2 bg-white/10 border border-white/20 px-3 sm:px-4 py-2 rounded-full hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.75a6 6 0 018.486 
                8.49l-1.37 1.37a2.25 2.25 0 
                01-3.182 0l-1.478-1.478a2.25 
                2.25 0 010-3.182l1.37-1.37A6 
                6 0 019.75 3.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12.75l-3 3m0 
                0l3 3m-3-3h12"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Texniki dəstək</span>
          </button>
        </div>

        {/* Text */}
        <div className="text-center md:text-right max-w-[280px] text-sm sm:text-base text-gray-300 leading-relaxed">
          <p>
            Bu səhifə <span className="font-semibold text-white">Şöbənin təcrübəçiləri</span> tərəfindən hazırlanmışdır.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 sm:mt-8 border-t border-gray-600 pt-3 sm:pt-4 text-center text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Bütün hüquqlar qorunur.
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-2xl rounded-xl shadow-2xl p-4 sm:p-6 relative">
            <button
              className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-600 hover:text-black text-lg sm:text-xl"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h2 className="text-center text-xl sm:text-2xl font-bold text-[#162556] mb-4 sm:mb-5">
              Bizimlə əlaqə
            </h2>

            <table className="w-full border border-[#162556] text-center text-[#162556] rounded-lg sm:rounded-2xl text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-100 font-semibold">
                  <th className="border px-2 py-1 sm:px-3 sm:py-2">Vəzifə</th>
                  <th className="border px-2 py-1 sm:px-3 sm:py-2">Ad</th>
                  <th className="border px-2 py-1 sm:px-3 sm:py-2">Email</th>
                  <th className="border px-2 py-1 sm:px-3 sm:py-2">Daxili</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">Şöbə müdiri</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">Vüsal Əkbərli</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">vusal.akbarli@icta.az</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">511</td>
                </tr>

                <tr>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">Şəbəkə inzibatçısı</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">Ehtiram Mustafayev</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">ehtiram.mustafayev@icta.az</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">513</td>
                </tr>

                <tr>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">İT mütəxəssisi</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">Cavid Həsənli</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">cavid.hasanli@icta.az</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">515</td>
                </tr>

                <tr className="font-semibold bg-gray-100">
                  <td className="border px-2 py-1 sm:px-3 sm:py-2" colSpan={3}>Otaq nömrəsi</td>
                  <td className="border px-2 py-1 sm:px-3 sm:py-2">208</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </footer>
  );
}

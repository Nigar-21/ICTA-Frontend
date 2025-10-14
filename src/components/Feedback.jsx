import React, { useState } from "react";

export default function FeedbackSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("anonim");

  const people = [
    "Şöbə müdiri",
    "Texniki dəstək komandası",
    "Sistem inzibatçısı",
    "Təcrübəçi rəhbəri",
  ];

  const types = ["Şikayət", "Təklif", "Müraciət"];

  return (
    <section className="py-24 flex flex-col items-center justify-center text-center bg-transparent">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1E3A8A] tracking-wide">
          Şikayət və ya təklifiniz var?
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-3 rounded-full bg-[#1E3A8A] text-white font-medium hover:bg-[#17275B] cursor-pointer transition-all shadow-sm hover:shadow-md"
        >
          Bizə yazın
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-8 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>

            <h3 className="text-xl font-semibold text-[#162556] mb-6 text-center">
              Şikayət və ya təklif formu
            </h3>

            <div className="flex mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("anonim")}
                className={`flex-1 py-2 font-medium ${
                  activeTab === "anonim"
                    ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]"
                    : "text-gray-500 hover:text-[#1E3A8A]"
                }`}
              >
                Anonim müraciət
              </button>
              <button
                onClick={() => setActiveTab("adi")}
                className={`flex-1 py-2 font-medium ${
                  activeTab === "adi"
                    ? "text-[#1E3A8A] border-b-2 border-[#1E3A8A]"
                    : "text-gray-500 hover:text-[#1E3A8A]"
                }`}
              >
                Adi müraciət
              </button>
            </div>

            {activeTab === "anonim" ? (
              <form className="flex flex-col gap-4">
                <div className="relative">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Kimə ünvanlanıb
                    </option>
                    {people.map((person, index) => (
                      <option key={index}>{person}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Müraciət tipi
                    </option>
                    {types.map((type, index) => (
                      <option key={index}>{type}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                    </svg>
                  </span>
                </div>

                <textarea
                  rows="4"
                  placeholder="Mesajınızı yazın..."
                  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1E3A8A] resize-none"
                ></textarea>

                <div>
                  <label className="text-sm text-gray-600">
                    Fayl əlavə et:
                  </label>
                  <input
                    type="file"
                    className="block w-full mt-1 text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[#1E3A8A] file:text-white hover:file:bg-[#2E3192]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1E3A8A] text-white py-2 rounded-lg font-medium hover:bg-[#2E3192] cursor-pointer transition-all"
                >
                  Göndər
                </button>
              </form>
            ) : (
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Ad və Soyad"
                  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
                <input
                  type="email"
                  placeholder="Email ünvanınız"
                  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />

                <div className="relative">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Kimə ünvanlanıb
                    </option>
                    {people.map((person, index) => (
                      <option key={index}>{person}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <select
                    className="appearance-none w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-500 outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Müraciət tipi
                    </option>
                    {types.map((type, index) => (
                      <option key={index}>{type}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                    </svg>
                  </span>
                </div>

                <textarea
                  rows="4"
                  placeholder="Mesajınızı yazın..."
                  className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1E3A8A] resize-none"
                ></textarea>

                <div>
                  <label className="text-sm text-gray-500">
                    Fayl əlavə et:
                  </label>
                  <input
                    type="file"
                    className="block w-full mt-1 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer file:mr-3 file:py-1 file:px-3 file:border-0 file:rounded-md file:bg-[#1E3A8A] file:text-white hover:file:bg-[#2E3192]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1E3A8A] text-white py-2 rounded-lg font-medium hover:bg-[#2E3192] cursor-pointer transition-all"
                >
                  Göndər
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

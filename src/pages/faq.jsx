import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import ServerImage from "../assets/ITPhoto.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("http://localhost:7176/api/Faq/getAll")
    .then(res => res.json())
    .then(data => {
      setFaqs(data);
      setLoading(false);
    })
    .catch(err => {
      console.error("FAQ error:", err);
      setLoading(false);
    });
}, []);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return <p className="text-center mt-10">Yüklənir...</p>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div
        className="relative w-full h-[200px] sm:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${ServerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-2xl sm:text-5xl font-bold text-center px-4">
          Tez-tez verilən suallar (FAQ)
        </h1>
      </div>

      <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqs
            .filter((faq) => faq.isActive)
            .map((faq, index) => (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#1E3A8A]">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="text-[#1E3A8A]" size={20} />
                  ) : (
                    <Plus className="text-[#1E3A8A]" size={20} />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

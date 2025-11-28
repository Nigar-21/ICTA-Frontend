import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ServerImage from "../assets/ITPhoto.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Tədris proqramlarına necə qeydiyyatdan keçə bilərəm?",
      answer:
        "Qeydiyyat üçün əsas səhifədəki 'Qeydiyyatdan keç' düyməsini klikləyib, formu doldurmalısınız. Qeydiyyat tamamlandıqdan sonra sizə təsdiq e-poçtu göndəriləcək.",
    },
    {
      question: "Dərslər onlayn keçirilirmi?",
      answer:
        "Bəli, dərslərin bir hissəsi onlayn şəkildə keçirilir. Platformamız vasitəsilə canlı dərslərə qoşula və qeydləri sonradan izləyə bilərsiniz.",
    },
    {
      question: "Ödəniş üsulları hansılardır?",
      answer:
        "Ödənişlər onlayn kart vasitəsilə, yaxud ofisimizə yaxınlaşaraq nağd şəkildə həyata keçirilə bilər.",
    },
    {
      question: "Dərs materiallarına necə çıxış əldə edə bilərəm?",
      answer:
        "Dərs materialları qeydiyyatdan sonra şəxsi hesabınızda 'Resurslar' bölməsində aktiv olur.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
      <div
        className="relative w-full h-[200px] sm:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${ServerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-2xl sm:text-5xl font-bold text-center px-4">
          Tez-tez verilən suallar (FAQ)
        </h1>
      </div>

      <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
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

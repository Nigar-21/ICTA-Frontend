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
          {/* Şöbə cover */}
          <div
                 className="relative w-full h-[400px] flex flex-col items-center justify-center"
                 style={{
                   backgroundImage: `url(${ServerImage})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}
               >
                 <div className="absolute inset-0 bg-black/40"></div>
             
                 <h1 className="relative z-10 text-white text-5xl font-bold text-center px-4">
                     Tez-tez verilən suallar (FAQ)
                 </h1>
               </div>

    <div className="bg-white min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      {/* <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#1E3A8A]">
        Tez-tez verilən suallar (FAQ)
      </h1> */}

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 shadow-md transition hover:shadow-lg"
            // style={{
            //   background:
            //     "linear-gradient(180deg, #ffffff 0%, #f9f9ff 50%, #f3f4ff 100%)",
            // }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="text-[#1E3A8A]" size={22} />
              ) : (
                <Plus className="text-[#1E3A8A]" size={22} />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-700 text-[16px] leading-relaxed animate-fadeIn">
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

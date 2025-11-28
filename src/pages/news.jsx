import React from "react";
import { Link } from "react-router-dom";
import Cover from '../assets/ITPhoto.png'

export default function Yenilikler() {
  const data = [
    {
      title: "Xəbərlər",
      image: Cover,
      link: "/xeberler"
    },
    {
      title: "Məqalələr",
      image: Cover,
      link: "/meqaleler"
    },
    {
      title: "Elanlar",
      image: Cover,
      link: "/elanlar"
    }
  ];

  return (
    <div className="bg-white">
      <div
        className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${Cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Yeniliklər
        </h1>
      </div>

      <div className="max-w-7xl mx-auto py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md sm:shadow-xl overflow-hidden relative h-[200px] sm:h-[230px] md:h-[250px] cursor-pointer hover:shadow-2xl transition"
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 grid grid-rows-[1fr_auto] p-4 sm:p-6">

                <div className="flex justify-center items-center">
                  <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-white text-center mt-4 sm:mt-6">
                    {section.title}
                  </h2>
                </div>

                <div className="flex justify-end">
                  <Link
                    to={section.link}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-[#1E3A8A] text-white rounded-full hover:bg-[#17275B] transition text-sm sm:text-base"
                  >
                    Hamısına bax →
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

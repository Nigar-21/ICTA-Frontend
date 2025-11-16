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
      <div className="relative w-full h-[250px]">
            <img
              src={Cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/60 to-transparent"></div>
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              Yeniliklər
            </h1>
          </div>

    <div className="max-w-7xl mx-auto py-16 px-8">
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((section, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-xl overflow-hidden relative h-[250px] cursor-pointer hover:shadow-2xl transition"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
          
            <div className="absolute inset-0 bg-black/30"></div>

          
          <div className="absolute inset-0 grid grid-rows-[1fr_auto] p-6">
  
  <div className="flex justify-center items-center">
    <h2 className="text-[30px] font-semibold text-white text-center mt-6">
      {section.title}
    </h2>
  </div>


  <div className="flex justify-end">
    <Link
      to={section.link}
      className="px-4 py-2 bg-[#1E3A8A] text-white rounded-full hover:bg-[#17275B] transition"
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

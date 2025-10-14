import React from "react";
import ServerImage from "../assets/ITPhoto.png"; 
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="relative">
          <img
            src={ServerImage}
            alt="Server otağı"
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#1E3A8A]/20 to-transparent"></div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
            Şöbə haqqında
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Şəbəkə inzibatçılığı və texniki dəstək şöbəsi — informasiya
            texnologiyalarının etibarlı, təhlükəsiz və dayanıqlı şəkildə
            idarə edilməsini təmin edən mühüm struktur bölmədir. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur ut nisl nec
            nulla fermentum tincidunt. Donec eget velit vel leo porttitor
            vehicula. Proin ut libero ut massa pharetra vulputate. Nulla
            facilisi. Donec sed mi in neque vehicula tincidunt eget sit amet
            turpis. 
          </p>

        <div className="flex flex-nowrap gap-3">
  <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#162556] transition-all duration-300">
    Şöbə haqqında
  </button>
  <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
    Əsasnamə
  </button>
  <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
    Struktur
  </button>
  <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
    Müraciət qaydaları
  </button>
</div>
        </div>
      </div>
    </div>
  );
}

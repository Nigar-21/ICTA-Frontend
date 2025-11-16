import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ServerImage from "../assets/ITPhoto.png";
import Komandamiz from "../components/Team";
import SobeImage from "../assets/data.jpg";
import EsasnameImage from "../assets/ai.jpg";
import StrukturImage from "../assets/comp.jpg";
import MuracietImage from "../assets/network.jpg";


export default function About() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "sobe"; // default tab
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const tabs = [
    { name: "Şöbə haqqında", key: "sobe" },
    { name: "Əsasnamə", key: "esasname" },
    { name: "Struktur", key: "struktur" },
    { name: "Müraciət qaydaları", key: "muraciet" },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case "sobe":
        return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={SobeImage}
        alt="Şöbə"
        className="w-[90%] h-[500px]  object-cover rounded-2xl shadow-md"
      />
          <div>
            <h2 className="text-2xl font-bold mb-4">Şöbə haqqında məlumat</h2>
            <p>- Şöbənin yaranma tarixi: 2010</p>
            <p>- Görülən işlər: İT infrastrukturu, texniki dəstək, sistemlərin idarəsi</p>
            <p>- Əlavə məlumat: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
        );
      case "esasname":
        return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={EsasnameImage}
        alt="Əsasnamə"
        className="w-[90%] h-[500px]  object-cover rounded-2xl shadow-md"
      />
          <div>
            <h2 className="text-2xl font-bold mb-4">Əsasnamə</h2>
            <p>- Əsasnamənin yazı forması və təsdiqi</p>
            <p>- Təsdiq tarixi: 01.01.2025</p>
         <a
  href="/pdf/esasname.pdf"
  download="esasname.pdf"
  className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-2xl shadow-lg transition"
  style={{ background: 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)' }}
>
  PDF yüklə
</a>

          </div>
            </div>
        );
      case "struktur":
        return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={StrukturImage}
        alt="Struktur"
        className="w-[90%] h-[500px] object-cover rounded-2xl shadow-md"
      />
          <div>
            <h2 className="text-2xl font-bold mb-4">Şöbənin strukturu</h2>
            <p>- Struktur təsdiq tarixi: 05.05.2025</p>
            <a
              href="/pdf/struktur.pdf"
              download="struktur.pdf"
              className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-2xl shadow-lg transition"
              style={{ background: 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)' }}
            >
              Sənəd yüklə
            </a>
          </div>
            </div>
        );
      case "muraciet":
        return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={MuracietImage}
        alt="Müraciət qaydaları"
        className="w-[90%] h-[500px] object-cover rounded-2xl shadow-md"
      />
          <div>
            <h2 className="text-2xl font-bold mb-4">Müraciət qaydaları</h2>
            <p>- Şöbəyə müraciət qaydaları</p>
            <p>- Təsdiqlənmiş sənəd haqqında məlumat</p>
            <a
              href="/pdf/muraciet.pdf"
              download="muraciet.pdf"
              className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-2xl shadow-lg transition"
              style={{ background: 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)' }}
            >
              Sənəd yüklə
            </a>
          </div>
            </div>
        );
      default:
        return <p>Şöbə haqqında məlumatlar...</p>;
    }
  };

  const TabButtons = () => (
    <div className="flex justify-end flex-wrap gap-4 mb-20 ">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform ${
            activeTab === tab.key
              ? "text-white shadow-lg scale-105"
              : "border border-[#1E3A8A] text-[#1E3A8A] hover:shadow-md hover:scale-105"
          }`}
          style={{
            background: activeTab === tab.key
              ? 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)'
              : undefined
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Şöbə cover */}
      <div className="relative w-full h-[250px]">
        <img
          src={ServerImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/60 to-transparent"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
          Haqqımızda
        </h1>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-0">
        {/* Tab content */}
        <div className="text-gray-700 text-lg leading-relaxed mb-8">
          {renderContent()}
        </div>

        {/* Tabs düymələri contentin altında */}
        <TabButtons />

        {/* Komandamız */}
        <Komandamiz />
      </div>
    </div>
  );
}

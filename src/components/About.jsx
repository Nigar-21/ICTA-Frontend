import React, { useState } from "react";
import ServerImage from "../assets/ITPhoto.png";
import SobeImage from "../assets/data.jpg";
import EsasnameImage from "../assets/ai.jpg";
import StrukturImage from "../assets/comp.jpg";
import MuracietImage from "../assets/network.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState("sobe");

  const tabs = [
    { name: "Şöbə haqqında", key: "sobe" },
    { name: "Əsasnamə", key: "esasname" },
    { name: "Struktur", key: "struktur" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "sobe":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={SobeImage}
              alt="Şöbə"
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Şöbə haqqında məlumat</h2>
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
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Əsasnamə</h2>
              <p>- Əsasnamənin yazı forması və təsdiqi</p>
              <p>- Təsdiq tarixi: 01.01.2025</p>
            </div>
          </div>
        );

      case "struktur":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={StrukturImage}
              alt="Struktur"
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">Şöbənin strukturu</h2>
              <p>- Struktur təsdiq tarixi: 05.05.2025</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Tab content */}
        {renderContent()}

        {/* Tab düymələri */}
        <div className="flex flex-wrap gap-2 md:gap-4 mt-10 justify-start sm:justify-end">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm sm:text-lg px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.key
                  ? "text-white shadow-lg bg-[#1E3A8A]"
                  : "border border-[#1E3A8A] text-[#1E3A8A] hover:shadow-md"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

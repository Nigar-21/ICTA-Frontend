import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ServerImage from "../assets/ITPhoto.png";
import Komandamiz from "../components/Team";
import axios from "axios";

export default function About() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "sobe";
  const [activeTab, setActiveTab] = useState(initialTab);
  const [regulations, setRegulations] = useState([]);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    
   axios.get("/api/Regulations/getRegulations")
  .then(res => setRegulations(res.data.data))
  .catch(err => console.error(err));

  }, []);

  const tabs = [
    { name: "Şöbə haqqında", key: "sobe" },
    { name: "Əsasnamə", key: "esasname" },
    { name: "Struktur", key: "struktur" },
  ];

const renderContent = () => {
  if (!Array.isArray(regulations) || !regulations.length) return <p>Yüklənir...</p>;

  const tabIdMap = {
    sobe: 1,
    esasname: 2,
    struktur: 3,
  };

  const reg = regulations.find(r => r.id === tabIdMap[activeTab]) || {};



    switch (activeTab) {
      case "sobe":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {reg.photo && (
              <img
                src={reg.photo}
                alt="Şöbə"
                className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
              />
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {reg.title || "Şöbə haqqında məlumat"}
              </h2>
              <p>{reg.description || "- Şöbə haqqında əlavə məlumat yoxdur."}</p>
            </div>
          </div>
        );

      case "esasname":
      case "struktur":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {reg.photo && (
              <img
                src={reg.photo}
                alt={reg.title}
                className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
              />
            )}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {reg.title || (activeTab === "esasname" ? "Əsasnamə" : "Struktur")}
              </h2>
              <p>{reg.description || "-"}</p>

              {reg.file && (
                <a
                  href={reg.file}
                  download
                  className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-2xl shadow-lg transition"
                  style={{
                    background:
                      "linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)",
                  }}
                >
                  Sənəd yüklə
                </a>
              )}
            </div>
          </div>
        );

      default:
        return <p>Şöbə haqqında məlumatlar...</p>;
    }
  };

  const TabButtons = () => (
    <div className="flex justify-center md:justify-end flex-wrap gap-3 md:gap-4 mb-16">
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
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Cover */}
      <div
        className="relative w-full h-[250px] md:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${ServerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4">
          Haqqımızda
        </h1>
      </div>

      <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-0">
        <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          {renderContent()}
        </div>

        <TabButtons />

        <Komandamiz />
      </div>
    </div>
  );
}

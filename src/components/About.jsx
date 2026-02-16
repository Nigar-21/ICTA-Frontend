import React, { useState, useEffect } from "react";
import ServerImage from "../assets/ITPhoto.png";
import axios from "axios";
import SobeImage from "../assets/data.jpg";
import EsasnameImage from "../assets/ai.jpg";
import StrukturImage from "../assets/comp.jpg";
import MuracietImage from "../assets/network.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState("sobe");
  const [regulations, setRegulations] = useState([]);

  useEffect(() => {
    axios
      .get("/api/Regulations/getRegulations")
      .then((res) => {
        setRegulations(res.data.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const tabs = [
    { name: "Şöbə haqqında", key: "sobe" },
    { name: "Əsasnamə", key: "esasname" },
    { name: "Struktur", key: "struktur" },
  ];

  const renderContent = () => {
    if (!regulations.length) return <p>Yüklənir...</p>;

    const tabIdMap = {
      sobe: 1,
      esasname: 2,
      struktur: 3,
    };

    const reg = regulations.find((r) => r.id === tabIdMap[activeTab]);

    switch (activeTab) {
      case "sobe":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={reg?.photo || SobeImage}
              alt="Şöbə"
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {reg?.title || "Şöbə haqqında məlumat"}
              </h2>
              <p>
                {reg?.description || "- Şöbə haqqında əlavə məlumat yoxdur."}
              </p>
            </div>
          </div>
        );

      case "esasname":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={reg?.photo || EsasnameImage}
              alt="Əsasnamə"
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {reg?.title || "Əsasnamə"}
              </h2>
              <p>{reg?.description || "- Əsasnamə haqqında məlumat yoxdur."}</p>
              {reg?.file && (
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

      case "struktur":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src={reg?.photo || StrukturImage}
              alt="Struktur"
              className="w-full md:w-[90%] h-[250px] md:h-[500px] object-cover rounded-2xl shadow-md"
            />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {reg?.title || "Struktur"}
              </h2>
              <p>{reg?.description || "- Struktur haqqında məlumat yoxdur."}</p>
              {reg?.file && (
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
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {renderContent()}

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

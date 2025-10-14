import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const teamContacts = [
  { name: "Vüsal Əkbərli", position: "Şöbə rəhbəri", extension: "501", email: "vusal@example.com" },
  { name: "Elvin Məmmədov", position: "Texniki dəstək", extension: "502", email: "elvin@example.com" },
  { name: "Aysel Quliyeva", position: "Şəbəkə inzibatçısı", extension: "503", email: "aysel@example.com" },
  { name: "Rəşad Əliyev", position: "IT mütəxəssisi", extension: "504", email: "rashad@example.com" },
  { name: "Leyla Məmmədova", position: "Şəbəkə analitiki", extension: "505", email: "leyla@example.com" },
  { name: "Kamran Quliyev", position: "Texniki mütəxəssis", extension: "506", email: "kamran@example.com" },
  { name: "Nigar Hacıyeva", position: "Frontend Developer", extension: "507", email: "nigar@example.com" },
  { name: "Orxan Əliyev", position: "SysAdmin", extension: "508", email: "orxan@example.com" },
  { name: "Fərid Məmmədov", position: "IT Specialist", extension: "509", email: "farid@example.com" },
  { name: "Səbinə Quliyeva", position: "Network Engineer", extension: "510", email: "sabine@example.com" },
   { name: "Səbinə Quliyeva", position: "Network Engineer", extension: "510", email: "sabine@example.com" },
];

export default function ContactPreview() {
  const navigate = useNavigate();

  const visibleContacts = teamContacts.slice(0, 5);

  return (
    <div className="bg-white flex flex-col items-center py-8 px-6">
      <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-6">Əlaqə</h2>
      
      <div className="w-full max-w-6xl flex flex-wrap justify-between gap-y-4">
        {visibleContacts.map((member, idx) => (
          <div key={idx} className="w-[18%] flex flex-col">
            <span className="font-semibold text-[#1E3A8A]">{member.name}</span>
            <span className="text-gray-600 text-sm">{member.position}</span>
            <span className="text-gray-500 text-sm">Daxili: ({member.extension})</span>
            <a href={`mailto:${member.email}`} className="flex items-center gap-1 text-[#1E3A8A] text-sm hover:underline mt-1">
              <FaEnvelope /> {member.email}
            </a>
          </div>
        ))}
      </div>

      {teamContacts.length > 10 && (
        <div className="mt-6">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 bg-[#1E3A8A] text-white rounded-full hover:bg-[#17275B] transition font-medium"
          >
            Hamısını gör
          </button>
        </div>
      )}
    </div>
  );
}


import React from "react";

export default function UserContent() {
  const meetings = [
    { title: "Görüş 1", date: "2025-10-09", time: "09:00 - 10:00", place: "Ofis" },
    { title: "Görüş 2", date: "2025-10-10", time: "13:00 - 14:00", place: "Zoom" },
    { title: "Görüş 3", date: "2025-10-11", time: "15:00 - 16:00", place: "Ofis" },
  ];

  return (
    <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-[#1E3A8A]">Profil Məlumatları</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-sm">Ad</p>
          <p className="font-medium">Nigar</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Soyad</p>
          <p className="font-medium">Hacıyeva</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium">nigar@example.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Vəzifə</p>
          <p className="font-medium">Frontend Developer</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-[#1E3A8A] mt-6">Son Görüşlər</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {meetings.map((m, idx) => (
          <div key={idx} className="bg-[#eef2ff] p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer">
            <h3 className="font-semibold text-[#1E3A8A]">{m.title}</h3>
            <p className="text-gray-600 text-sm">{m.date}</p>
            <p className="text-gray-500 text-xs">{m.time} | {m.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

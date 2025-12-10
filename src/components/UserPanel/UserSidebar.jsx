
import React from "react";
import { FaUser, FaBook, FaCalendarAlt, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserSidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Profilim", icon: <FaUser />, route: "/user" },
    { title: "Təlimlərim", icon: <FaBook />, route: "/user/trainings" },
    { title: "Görüşlərim", icon: <FaCalendarAlt />, route: "/user/meetings" },
    { title: "Qaydalar", icon: <FaFileAlt />, route: "/user/rules" },
  ];

  return (
    <div className="w-full sm:w-64 bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-14 h-14 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white text-2xl font-bold">
          N
        </div>
        <div>
          <h2 className="text-lg font-semibold text-[#1E3A8A]">Nigar Hacıyeva</h2>
          <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.route)}
            className="flex items-center gap-3 text-gray-700 hover:bg-[#eef2ff] py-2 px-3 rounded-lg font-medium transition-all duration-200"
          >
            {item.icon} {item.title}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 text-red-600 hover:bg-red-100 py-2 px-3 rounded-lg font-semibold mt-auto"
      >
        <FaSignOutAlt /> Çıxış
      </button>
    </div>
  );
}

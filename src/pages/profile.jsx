import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // İstifadəçi məlumatını localStorage-dan oxuyuruq
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    } else {
      navigate("/auth"); // istifadəçi login etməyibsə yönləndir
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };

  if (!user) return null; // istifadəçi yoxdursa heç nə göstərməyək

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-950">Profilim</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
          >
            <FaSignOutAlt />
            Çıxış
          </button>
        </div>

        {/* İstifadəçi məlumatları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">Ad</h2>
            <p>{user.name || "Məlumat yoxdur"}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">Email</h2>
            <p>{user.email || "Məlumat yoxdur"}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">İstifadəçi adı</h2>
            <p>{user.username || "Məlumat yoxdur"}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-2">Vəzifə</h2>
            <p>{user.role || "User"}</p>
          </div>
        </div>

        {/* Gələcək bölmələr */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Dashboard bölmələri</h2>
          <p className="text-gray-600">Burada istifadəçinin fəaliyyətləri, bildirişlər və digər məlumatlar göstəriləcək.</p>
        </div>
      </div>
    </div>
  );
}

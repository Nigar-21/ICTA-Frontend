import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login"); // login və register tab
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // register üçün

const handleSubmit = (e) => {
  e.preventDefault();
  if (activeTab === "login") {
    console.log("Login:", { email, password });

    // Sadə nümunə: istifadəçi uğurlu login olarsa localStorage-a qoyuruq
    const loggedInUser = { email }; 
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    navigate("/"); // login uğurlu olarsa
  } else {
    console.log("Register:", { name, email, password });

    const newUser = { name, email };
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/"); // register uğurlu olarsa
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#162556] via-[#2c3a7b] to-[#3b446f] px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`py-2 px-6 rounded-full font-semibold transition ${
              activeTab === "login"
                ? "bg-[#1E3A8A] text-white shadow-lg"
                : "bg-gray-200 text-[#1E3A8A] hover:bg-[#e6e6e6]"
            }`}
          >
            Daxil ol
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`py-2 px-6 rounded-full font-semibold transition ${
              activeTab === "register"
                ? "bg-[#1E3A8A] text-white shadow-lg"
                : "bg-gray-200 text-[#1E3A8A] hover:bg-[#e6e6e6]"
            }`}
          >
            Qeydiyyat
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {activeTab === "register" && (
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">Adınız</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınızı daxil edin"
                className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
                required
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Emailinizi daxil edin"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Şifrə</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrənizi daxil edin"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
              required
            />
          </div>

          <button
            type="submit"
            className="py-3 bg-[#1E3A8A] text-white rounded-xl font-semibold hover:bg-[#17275B] transition shadow-lg"
          >
            {activeTab === "login" ? "Daxil ol" : "Qeydiyyat"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          {activeTab === "login" ? (
            <>
              Hesabınız yoxdur?{" "}
              <span
                className="text-[#1E3A8A] font-medium cursor-pointer hover:underline"
                onClick={() => setActiveTab("register")}
              >
                Qeydiyyatdan keç
              </span>
            </>
          ) : (
            <>
              Hesabınız var?{" "}
              <span
                className="text-[#1E3A8A] font-medium cursor-pointer hover:underline"
                onClick={() => setActiveTab("login")}
              >
                Daxil ol
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

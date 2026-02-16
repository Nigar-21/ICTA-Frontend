import React, { useState, useContext  } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Auth() {
  const navigate = useNavigate();
 const { user, setUser } = useContext(UserContext);

  const [activeTab, setActiveTab] = useState("login"); // login və register tab
  const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fName, setFName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [departmentName, setDepartmentName] = useState("");

  const backendUrl = "https://localhost:7176";



  const handleSubmit = async (e) => {
    e.preventDefault();

if (activeTab === "login") {
  const loginData = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(`${backendUrl}/api/Auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) throw new Error("Login uğursuz oldu");

    const data = await response.json();
    console.log("Login successful:", data);

    // Burada context və localStorage yenilənir
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);

    navigate("/"); // yönləndir
  } catch (error) {
    console.error(error);
    alert("Login zamanı xəta baş verdi!");
  }
    } else {
      const registerData = {
        firstName: name,
        lastName: lastName,
        fName: fName,
        phoneNumber: phoneNumber,
        departmentName: departmentName,
        username: username,
        email: email,
        password: password,
      };

      try {
        const response = await fetch(`${backendUrl}/api/Auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(registerData),
        });

        if (!response.ok) throw new Error("Qeydiyyat uğursuz oldu");

        const data = await response.json();
        console.log("Register successful:", data);

        localStorage.setItem("user", JSON.stringify(data));
         setUser(data);
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("Qeydiyyat zamanı xəta baş verdi!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#162556] via-[#2c3a7b] to-[#3b446f] px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl py-6 px-10">
        <div className="flex justify-center mb-4 gap-4">
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {activeTab === "register" && (
            <>
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
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium">
                  Soyadınız
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Soyadınızı daxil edin"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium">
                  Ata adı
                </label>
                <input
                  type="text"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  placeholder="Ata adınızı daxil edin"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium">
                  Telefon nömrəsi
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Telefon nömrənizi daxil edin"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 text-gray-700 font-medium">
                  Departament
                </label>
                <input
                  type="text"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  placeholder="Departamentinizi daxil edin"
                  className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
                />
              </div>
            </>
          )}

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              Email
            </label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email və ya Username"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1E3A8A] shadow-sm transition"
              required
            />
          </div>
            <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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

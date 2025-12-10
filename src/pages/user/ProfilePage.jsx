import React, { useState, useRef } from "react";
import { FaUser, FaBook, FaCalendarAlt, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useLocation } from "react-router-dom";

export default function UserPanel() {
  const location = useLocation();
  const initialTab = location.state?.initialTab || "profile"; 
  const [activeTab, setActiveTab] = useState(initialTab);
const [isEditing, setIsEditing] = useState(false);

const [profile, setProfile] = useState({
  id: "USR-1023",
  name: "Nigar",
  surname: "Hacıyeva",
  email: "nigar@example.com",
  role: "Frontend Developer",
  avatar: null, // file olacaq
});

const [previewImage, setPreviewImage] = useState(
  "https://i.pravatar.cc/150?img=47"
);
 
  const [bookedInfo, setBookedInfo] = useState(null);

  const rooms = ["Otaq 1", "Otaq 2", "Otaq 3"];
  const employees = ["Nigar", "Elvin", "Aysel"];
  const hours = Array.from({ length: 12 }, (_, i) => i + 9); // 9:00 - 20:00

  const bookedSlots = {
    "Otaq 1": [10, 14], 
    "Otaq 2": [9, 12, 16],
    "Otaq 3": [11, 15],
    "Nigar": [9, 13],
    "Elvin": [10, 16],
    "Aysel": [14, 18],
  };
  const createRef = React.useRef(null);


  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedRoomHours, setSelectedRoomHours] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedEmployeeHours, setSelectedEmployeeHours] = useState([]);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
const [meetingTitle, setMeetingTitle] = useState("");
const [meetingPlace, setMeetingPlace] = useState("Ofis");
const [oldPassword, setOldPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");



  const menuItems = [
    { id: "profile", title: "Profilim", icon: <FaUser /> },
    { id: "trainings", title: "Təlimlərim", icon: <FaBook /> },
    { id: "meetings", title: "Görüşlərim", icon: <FaCalendarAlt /> },
    { id: "reserve", title: "Otaq Rezervi", icon: <FaFileAlt /> },
  ];

const [meetings, setMeetings] = useState([
  { title: "Görüş 1", date: "2025-10-09", time: "09:00 - 10:00", place: "Ofis" },
  { title: "Görüş 2", date: "2025-10-10", time: "13:00 - 14:00", place: "Zoom" },
  { title: "Görüş 3", date: "2025-10-11", time: "15:00 - 16:00", place: "Ofis" },
]);


const canCreateMeeting =
  selectedRoom ||
  selectedEmployee;


  return (
    <>
    <div className="flex flex-col md:flex-row min-h-screen gap-6 p-6 bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-6">
         <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E3A8A] shadow">
    <img
      src={previewImage}
      alt="Profil"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="leading-tight">
    <h2 className="text-lg font-semibold text-[#1E3A8A]">
      {profile.name} {profile.surname}
    </h2>
    <p className="text-sm text-gray-500">{profile.role}</p>
  </div>


        </div>

        <div className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg font-medium transition-all duration-200
                ${activeTab === item.id ? "bg-[#eef2ff] text-[#1E3A8A]" : "text-gray-700 hover:bg-[#eef2ff]"}`}
            >
              {item.icon} {item.title}
            </button>
          ))}
        </div>

        <button
          onClick={() => alert("Çıxış edildi!")}
          className="flex items-center gap-3 text-red-600 hover:bg-red-100 py-2 px-3 rounded-lg font-semibold mt-auto"
        >
          <FaSignOutAlt /> Çıxış
        </button>
      </div>

      
      <div className="flex-1 bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6 overflow-y-auto">
{activeTab === "profile" && (
  <>
    
    <div className="flex justify-between items-center border-b pb-4">
      <div>
        <h1 className="text-2xl font-bold text-[#1E3A8A]">Profil Məlumatları</h1>
        <p className="text-sm text-gray-500">
          Şəxsi məlumatlarını idarə et
        </p>
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className={`px-5 py-2 rounded-xl font-semibold transition
          ${
            isEditing
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-[#1E3A8A] text-white hover:opacity-90"
          }`}
      >
        {isEditing ? "Yadda Saxla" : "Redaktə et"}
      </button>
    </div>

    
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
    
      <div className="bg-gradient-to-br from-[#1E3A8A] to-indigo-600 rounded-2xl p-6 text-white flex flex-col items-center shadow-lg">
        
        <div className="relative">
          <img
            src={previewImage}
            alt="Profil"
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
          />

          {isEditing && (
            <label className="absolute bottom-2 right-2 bg-white text-[#1E3A8A] p-2 rounded-full cursor-pointer shadow hover:scale-105 transition">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfile({ ...profile, avatar: file });
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
              />
              ✎
            </label>
          )}
        </div>

        <h2 className="text-xl font-semibold mt-4">
          {profile.name} {profile.surname}
        </h2>
        <p className="text-sm opacity-90">{profile.role}</p>

        <span className="mt-4 px-4 py-1 bg-white/20 rounded-full text-sm">
          ID: {profile.id}
        </span>
      </div>

      
      <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6 shadow">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        
          <div>
            <label className="text-sm text-gray-600">Ad</label>
            <input
              disabled
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className={`w-full mt-1 px-3 py-2 rounded-lg border 
                ${!isEditing && "bg-gray-100 cursor-not-allowed"}`}
            />
          </div>

        
          <div>
            <label className="text-sm text-gray-600">Soyad</label>
            <input
              disabled
              value={profile.surname}
              onChange={(e) =>
                setProfile({ ...profile, surname: e.target.value })
              }
              className={`w-full mt-1 px-3 py-2 rounded-lg border 
                ${!isEditing && "bg-gray-100 cursor-not-allowed"}`}
            />
          </div>

          
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              disabled
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className={`w-full mt-1 px-3 py-2 rounded-lg border 
                ${!isEditing && "bg-gray-100 cursor-not-allowed"}`}
            />
          </div>

        
          <div>
            <label className="text-sm text-gray-600">Vəzifə</label>
            <input
              disabled
              value={profile.role}
              onChange={(e) =>
                setProfile({ ...profile, role: e.target.value })
              }
              className={`w-full mt-1 px-3 py-2 rounded-lg border 
                ${!isEditing && "bg-gray-100 cursor-not-allowed"}`}
            />
          </div>

        </div>
      </div>
    </div>

    <div className="mt-6 bg-gray-50 rounded-2xl p-6 shadow">
  <h3 className="text-xl font-semibold text-[#1E3A8A] mb-4">
    Şifrəni Dəyiş
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="text-sm text-gray-600">Köhnə şifrə</label>
      <input
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        className="w-full mt-1 px-3 py-2 rounded-lg border"
        placeholder="••••••••"
      />
    </div>

    <div>
      <label className="text-sm text-gray-600">Yeni şifrə</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full mt-1 px-3 py-2 rounded-lg border"
        placeholder="••••••••"
      />
    </div>

    <div>
      <label className="text-sm text-gray-600">Təkrar yeni şifrə</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full mt-1 px-3 py-2 rounded-lg border"
        placeholder="••••••••"
      />
    </div>
  </div>

  <div className="flex justify-end mt-4">
    <button
      onClick={() => {
        if (!oldPassword || !newPassword || !confirmPassword) {
          alert("Bütün sahələri doldurun");
          return;
        }
        if (newPassword !== confirmPassword) {
          alert("Yeni şifrələr uyğun deyil");
          return;
        }

        alert("Şifrə uğurla dəyişdirildi ✅");

        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }}
      className="px-6 py-2 rounded-xl bg-[#1E3A8A] text-white font-semibold hover:bg-[#162f6a] transition"
    >
      Şifrəni dəyiş
    </button>
  </div>
</div>

  </>
)}



        {activeTab === "trainings" && <h1 className="text-2xl font-semibold text-[#1E3A8A]">Təlimlərim</h1>}

        {activeTab === "meetings" && (
          <>
            <h1 className="text-2xl font-semibold text-[#1E3A8A]">Görüşlərim</h1>

            {/* Mövcud Görüşlər */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {meetings.map((m, idx) => (
                <div key={idx} className="bg-[#eef2ff] p-4 rounded-xl shadow hover:shadow-md transition cursor-pointer">
                  <h3 className="font-semibold text-[#1E3A8A]">{m.title}</h3>
                  <p className="text-gray-600 text-sm">{m.date}</p>
                  <p className="text-gray-500 text-xs">{m.time} | {m.place}</p>
                </div>
              ))}
            </div>

<div ref={createRef}>

          {/* Yeni Görüş Təyini */}
<div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col gap-6">
  <h2 className="text-2xl font-bold text-[#1E3A8A] border-b pb-2 mb-4">Yeni Görüş Təyini</h2>

  {/* Tarix seçimi */}
  <div className="relative w-full max-w-xs">
    <label className="block text-gray-600 mb-1 font-medium">Tarix</label>
    <input
      type="text"
      readOnly
      value={selectedDate.toLocaleDateString()}
      onClick={() => setShowCalendar(!showCalendar)}
      className="w-full border border-gray-300 rounded-xl px-4 py-2 cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
    />
    {showCalendar && (
      <div className="absolute z-20 mt-2 shadow-lg rounded-xl overflow-hidden">
        <Calendar
          onChange={(date) => {
            setSelectedDate(date);
            setShowCalendar(false);
          }}
          value={selectedDate}
        />
      </div>
    )}
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Otaq seçimi */}
    <div className="bg-[#eef2ff] p-4 rounded-2xl shadow-inner flex flex-col gap-3">
      <label className="text-gray-700 font-medium">Otaq Seçin</label>
      <select
        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
        value={selectedRoom}
        onChange={(e) => {
          setSelectedRoom(e.target.value);
          setSelectedRoomHours([]);
        }}
      >
        <option value="">-- Otaq seçin --</option>
        {rooms.map((room) => (
          <option key={room} value={room}>{room}</option>
        ))}
      </select>

      {selectedRoom && (
        <div className="flex flex-wrap gap-2 mt-3">
          {hours.map((h) => (
            <span
              key={h}
              className={`px-3 py-1 rounded-xl text-sm font-medium cursor-pointer transition 
                ${bookedSlots[selectedRoom].includes(h)
                  ? "bg-red-400 text-white line-through"
                  : selectedRoomHours.includes(h)
                  ? "bg-[#1E3A8A] text-white shadow-md"
                  : "bg-gray-200 hover:bg-[#cfd6ff]"
                }`}
              onClick={() => {
                if (bookedSlots[selectedRoom].includes(h)) {
                  setBookedInfo({
                    type: "room",
                    room: selectedRoom,
                    employee: selectedEmployee || "Nigar",
                    hour: h,
                    place: "Ofis",
                    owner: "Admin",
                  });
                } else {
                  setSelectedRoomHours((prev) =>
                    prev.includes(h) ? prev.filter((x) => x !== h) : [h]
                  );
                  setSelectedEmployeeHours([]);
                  setBookedInfo(null);
                }
              }}
            >
              {h}:00
            </span>
          ))}
        </div>
      )}
    </div>

    {/* Əməkdaş seçimi */}
    <div className="bg-[#eef2ff] p-4 rounded-2xl shadow-inner flex flex-col gap-3">
      <label className="text-gray-700 font-medium">Əməkdaş Seçin</label>
      <select
        className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
        value={selectedEmployee}
        onChange={(e) => {
          setSelectedEmployee(e.target.value);
          setSelectedEmployeeHours([]);
        }}
      >
        <option value="">-- Əməkdaş seçin --</option>
        {employees.map((emp) => (
          <option key={emp} value={emp}>{emp}</option>
        ))}
      </select>

      {selectedEmployee && (
        <div className="flex flex-wrap gap-2 mt-3">
          {hours.map((h) => (
            <span
              key={h}
              className={`px-3 py-1 rounded-xl text-sm font-medium cursor-pointer transition
                ${bookedSlots[selectedEmployee].includes(h)
                  ? "bg-red-400 text-white line-through"
                  : selectedEmployeeHours.includes(h)
                  ? "bg-[#1E3A8A] text-white shadow-md"
                  : "bg-gray-200 hover:bg-[#cfd6ff]"
                }`}
              onClick={() => {
                if (bookedSlots[selectedEmployee].includes(h)) {
                  setBookedInfo({
                    type: "employee",
                    room: selectedRoom || "Otaq 1",
                    employee: selectedEmployee,
                    hour: h,
                    place: "Ofis",
                    owner: "Admin",
                  });
                } else {
                  setSelectedEmployeeHours((prev) =>
                    prev.includes(h) ? prev.filter((x) => x !== h) : [h]
                  );
                  setSelectedRoomHours([]);
                  setBookedInfo(null);
                }
              }}
            >
              {h}:00
            </span>
          ))}
        </div>
      )}
    </div>
  </div>

  {bookedInfo && (
    <div className="bg-red-50 border border-red-300 rounded-2xl p-4 shadow-md mt-4 text-red-700">
      <h3 className="font-semibold mb-2 flex items-center gap-2">⛔ Bu saat artıq doludur</h3>
      <ul className="text-sm text-gray-800 space-y-1">
        <li><b>Tarix:</b> {selectedDate.toLocaleDateString()}</li>
        <li><b>Otaq:</b> {bookedInfo.room}</li>
        <li><b>Əməkdaş:</b> {bookedInfo.employee}</li>
        <li><b>Görüş yeri:</b> {bookedInfo.place}</li>
        <li><b>Saat:</b> {bookedInfo.hour}:00</li>
        <li><b>Təyin edən:</b> {bookedInfo.owner}</li>
      </ul>
    </div>
  )}

  {canCreateMeeting && (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => {
          setShowCreatePanel(!showCreatePanel);
          setTimeout(() => {
            createRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        className="text-[#1E3A8A] text-3xl hover:scale-110 transition duration-300"
      >
        ↓
      </button>
    </div>
  )}
</div>


{showCreatePanel && (
  <div
    ref={createRef}
    className="mt-6 bg-white border border-gray-200 rounded-3xl p-6 shadow-lg flex flex-col gap-6 transition-all duration-300"
  >
    <h3 className="text-2xl font-bold text-[#1E3A8A] border-b pb-2 mb-4">
      Yeni Görüş Təyini
    </h3>

    {/* Mövzu */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">Mövzu</label>
      <input
        type="text"
        value={meetingTitle}
        onChange={(e) => setMeetingTitle(e.target.value)}
        placeholder="Məsələn: Layihə müzakirəsi"
        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
      />
    </div>

    {/* Tarix, Otaq, Əməkdaş, Saat */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Tarix</label>
        <input
          type="text"
          readOnly
          value={selectedDate.toLocaleDateString()}
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
        />
        {showCalendar && (
          <div className="absolute z-20 mt-2 shadow-lg rounded-xl overflow-hidden">
            <Calendar
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              value={selectedDate}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Otaq</label>
        <select
          className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
          value={selectedRoom}
          onChange={(e) => {
            setSelectedRoom(e.target.value);
            setSelectedRoomHours([]);
          }}
        >
          <option value="">-- Otaq seçin --</option>
          {rooms.map((room) => (
            <option key={room} value={room}>{room}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Əməkdaş</label>
        <select
          className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
          value={selectedEmployee}
          onChange={(e) => {
            setSelectedEmployee(e.target.value);
            setSelectedEmployeeHours([]);
          }}
        >
          <option value="">-- Əməkdaş seçin --</option>
          {employees.map((emp) => (
            <option key={emp} value={emp}>{emp}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-700 font-medium">Saat</label>
        <div className="flex flex-wrap gap-2">
          {[...selectedRoomHours, ...selectedEmployeeHours].sort().map((h) => (
            <span
              key={h}
              className="px-3 py-1 rounded-xl bg-[#1E3A8A] text-white font-medium shadow-md"
            >
              {h}:00
            </span>
          ))}
          {selectedRoomHours.length === 0 && selectedEmployeeHours.length === 0 && (
            <span className="text-gray-400">Saat seçin</span>
          )}
        </div>
      </div>
    </div>

    {/* Görüş yeri */}
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">Görüş Yeri</label>
      <input
        type="text"
        value={meetingPlace}
        onChange={(e) => setMeetingPlace(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] transition"
      />
    </div>

    {/* Booked info */}
    {bookedInfo && (
      <div className="bg-red-50 border border-red-300 rounded-2xl p-4 shadow-md mt-2 text-red-700">
        <h4 className="font-semibold mb-2 flex items-center gap-2">⛔ Bu saat artıq doludur</h4>
        <ul className="text-sm text-gray-800 space-y-1">
          <li><b>Tarix:</b> {selectedDate.toLocaleDateString()}</li>
          <li><b>Otaq:</b> {bookedInfo.room}</li>
          <li><b>Əməkdaş:</b> {bookedInfo.employee}</li>
          <li><b>Görüş yeri:</b> {bookedInfo.place}</li>
          <li><b>Saat:</b> {bookedInfo.hour}:00</li>
          <li><b>Təyin edən:</b> {bookedInfo.owner}</li>
        </ul>
      </div>
    )}

    {/* Buttons */}
    <div className="flex justify-end gap-4 mt-4">
      <button
        onClick={() => setShowCreatePanel(false)}
        className="px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
      >
        İmtina
      </button>
      <button
        onClick={() => {
          const newMeeting = {
            title: meetingTitle || "Yeni Görüş",
            date: selectedDate.toLocaleDateString(),
            time:
              [...selectedRoomHours, ...selectedEmployeeHours].sort().join(", ") +
              ":00",
            place: meetingPlace || "Ofis",
          };
          setMeetings([newMeeting, ...meetings]);
          setShowCreatePanel(false);
          setMeetingTitle("");
          setSelectedRoom("");
          setSelectedEmployee("");
          setSelectedRoomHours([]);
          setSelectedEmployeeHours([]);
        }}
        className="px-6 py-2 rounded-xl bg-[#1E3A8A] text-white font-semibold hover:bg-[#162f6a] transition"
      >
        Təyin et
      </button>
    </div>
  </div>
)}


            </div>
          </>
        )}

        {activeTab === "reserve" && <h1 className="text-2xl font-semibold text-[#1E3A8A]">Otaq Rezervi</h1>}
      </div>
    </div>
  
</>
  );
}

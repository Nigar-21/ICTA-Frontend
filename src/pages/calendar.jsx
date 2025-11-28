import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const passedDate = location.state?.selectedDate || new Date();

  const [selectedDate, setSelectedDate] = useState(new Date(passedDate));

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  const [meetings, setMeetings] = useState([
    { date: "2025-11-15", time: "10:00 - 11:00", place: "Ofis", note: "Layihə müzakirəsi" },
    { date: "2025-11-15", time: "14:00 - 15:00", place: "Online", note: "Zoom görüşü" },
    { date: "2025-11-16", time: "09:00 - 10:00", place: "Ofis", note: "Səhər planlaşdırması" },
  ]);

  const [newMeeting, setNewMeeting] = useState({
    time: "",
    place: "",
    note: "",
  });

  const selectedDateStr = selectedDate.toISOString().split("T")[0];
  const filteredMeetings = meetings.filter((m) => m.date === selectedDateStr);

  const addMeeting = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!newMeeting.time || !newMeeting.place) {
      return alert("Bütün xanaları doldurun!");
    }

    const updated = [...meetings, { date: selectedDateStr, ...newMeeting }];
    setMeetings(updated);
    setNewMeeting({ time: "", place: "", note: "" });
  };

  const deleteMeeting = (index) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const updated = meetings.filter((_, i) => i !== index);
    setMeetings(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#162556] to-[#2c3a7b] flex flex-col items-center py-6 px-4 sm:py-12 sm:px-6">
      <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
        Görüş Təqvimi
      </h1>

      <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-6xl">

        {/* Calendar */}
        <div className="w-full md:w-1/2 overflow-x-auto">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-xl shadow-md p-2 sm:p-4"
          />
        </div>

        {/* Timeline Meeting Panel */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6">

          <h2 className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">
            {selectedDate.toLocaleDateString()} tarixli görüşlər
          </h2>

          {/* Scrollable Timeline */}
          <div className="relative pl-4 sm:pl-6 border-l-2 border-[#1E3A8A]/30 max-h-72 sm:max-h-[300px] overflow-y-auto pr-2 sm:pr-3">
            {filteredMeetings.length > 0 ? (
              filteredMeetings.map((m, idx) => (
                <div key={idx} className="mb-4 sm:mb-6 relative">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#1E3A8A] rounded-full absolute -left-[9px] sm:-left-[11px] top-1 border-2 border-white shadow"></div>
                  <div className="ml-2 sm:ml-2 p-3 sm:p-4 rounded-xl bg-[#eef2ff] shadow-sm">
                    <p className="font-semibold text-[#1E3A8A]">{m.time}</p>
                    <p className="text-sm text-gray-700">📍 {m.place}</p>
                    {m.note && <p className="text-xs text-gray-500 italic mt-1">📝 {m.note}</p>}

                    <button
                      onClick={() => deleteMeeting(idx)}
                      className="text-red-600 text-sm mt-2 hover:underline"
                    >
                      Sil
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm sm:text-base">Bu tarixdə görüş yoxdur.</p>
            )}
          </div>

          {/* Form */}
          <div className="border-t border-gray-300 pt-4">
            <h3 className="font-semibold text-[#1E3A8A] mb-2 text-sm sm:text-base">Yeni Görüş Əlavə Et</h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                disabled={!isLoggedIn}
                placeholder="Saat (məs: 10:00 - 11:00)"
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
                className={`border rounded-lg p-2 outline-none 
                ${!isLoggedIn ? "bg-gray-100 cursor-not-allowed" : "focus:border-[#1E3A8A]"}`}
              />
              <input
                type="text"
                disabled={!isLoggedIn}
                placeholder="Məkan"
                value={newMeeting.place}
                onChange={(e) => setNewMeeting({ ...newMeeting, place: e.target.value })}
                className={`border rounded-lg p-2 outline-none 
                ${!isLoggedIn ? "bg-gray-100 cursor-not-allowed" : "focus:border-[#1E3A8A]"}`}
              />
              <input
                type="text"
                disabled={!isLoggedIn}
                placeholder="Qeyd (ixtiyari)"
                value={newMeeting.note}
                onChange={(e) => setNewMeeting({ ...newMeeting, note: e.target.value })}
                className={`border rounded-lg p-2 outline-none 
                ${!isLoggedIn ? "bg-gray-100 cursor-not-allowed" : "focus:border-[#1E3A8A]"}`}
              />

              <button
                onClick={addMeeting}
                className="mt-2 bg-[#1E3A8A] text-white py-2 rounded-full hover:bg-[#17275B] transition text-sm sm:text-base"
              >
                {!isLoggedIn ? "Daxil ol" : "Əlavə et"}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

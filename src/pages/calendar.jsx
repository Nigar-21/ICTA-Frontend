import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarPage() {

  const location = useLocation();
  const passedDate = location.state?.selectedDate || new Date(); 

  const [selectedDate, setSelectedDate] = useState(new Date(passedDate)); // ✅ yalnız bu qalsın

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

  const filteredMeetings = meetings.filter(
    (m) => m.date === selectedDateStr
  );

  const addMeeting = () => {
    if (!newMeeting.time || !newMeeting.place) return alert("Bütün xanaları doldurun!");

    const updatedMeetings = [
      ...meetings,
      { date: selectedDateStr, ...newMeeting },
    ];
    setMeetings(updatedMeetings);
    setNewMeeting({ time: "", place: "", note: "" });
  };

  const deleteMeeting = (index) => {
    const updatedMeetings = meetings.filter((_, i) => i !== index);
    setMeetings(updatedMeetings);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#162556] to-[#2c3a7b] flex flex-col items-center py-12 px-6">
      <h1 className="text-white text-3xl font-semibold mb-8">
        Görüş Təqvimi
      </h1>

      <div className="bg-white rounded-2xl p-10 shadow-2xl flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Calendar */}
        <div className="md:w-1/2">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-xl shadow-md p-4"
          />
        </div>

        {/* Meetings Panel */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-[#1E3A8A]">
            {selectedDate.toLocaleDateString()} tarixli görüşlər
          </h2>

          {filteredMeetings.length > 0 ? (
            filteredMeetings.map((m, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl p-4 flex justify-between items-start hover:bg-[#eef2ff] transition"
              >
                <div>
                  <p className="font-medium text-[#1E3A8A]">{m.time}</p>
                  <p className="text-sm text-gray-600">Məkan: {m.place}</p>
                  {m.note && (
                    <p className="text-xs text-gray-500 mt-1 italic">{m.note}</p>
                  )}
                </div>
                <button
                  onClick={() => deleteMeeting(idx)}
                  className="text-red-500 hover:text-red-700 transition text-sm"
                >
                  Sil
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Bu tarixdə görüş yoxdur.</p>
          )}

          {/* Add Meeting Form */}
          <div className="border-t border-gray-300 pt-4 mt-4">
            <h3 className="font-semibold text-[#1E3A8A] mb-2">Yeni Görüş Əlavə Et</h3>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Saat (məs: 10:00 - 11:00)"
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
                className="border rounded-lg p-2 outline-none focus:border-[#1E3A8A]"
              />
              <input
                type="text"
                placeholder="Məkan"
                value={newMeeting.place}
                onChange={(e) => setNewMeeting({ ...newMeeting, place: e.target.value })}
                className="border rounded-lg p-2 outline-none focus:border-[#1E3A8A]"
              />
              <input
                type="text"
                placeholder="Qeyd (ixtiyari)"
                value={newMeeting.note}
                onChange={(e) => setNewMeeting({ ...newMeeting, note: e.target.value })}
                className="border rounded-lg p-2 outline-none focus:border-[#1E3A8A]"
              />
              <button
                onClick={addMeeting}
                className="mt-2 bg-[#1E3A8A] text-white py-2 rounded-full hover:bg-[#17275B] transition"
              >
                Əlavə et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ProfilePage.jsx
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaFilePdf, FaVideo, FaQuestionCircle, FaRegFileAlt, FaBook, FaLaptopCode, FaSignOutAlt } from "react-icons/fa";

// Dummy sections
const MyVideos = () => <div>My Videos</div>;
const MyQuizzes = () => <div>My Quizzes</div>;
const MyPdf = () => <div>My PDF</div>;
const MyMeetings = () => <div>My Meetings</div>;

// Sidebar component
const UserSidebar = () => (
  <div className="w-64 bg-white shadow-md min-h-screen p-6 flex flex-col gap-6">
    <h2 className="text-xl font-semibold text-[#1E3A8A]">Üzv Paneli</h2>
    <ul className="flex flex-col gap-4">
      <li><Link to="/" className="hover:text-[#1E3A8A]">Dashboard</Link></li>
      <li><Link to="/videos" className="hover:text-[#1E3A8A]">My Videos</Link></li>
      <li><Link to="/quizzes" className="hover:text-[#1E3A8A]">My Quizzes</Link></li>
      <li><Link to="/pdf" className="hover:text-[#1E3A8A]">My PDF</Link></li>
      <li><Link to="/meetings" className="hover:text-[#1E3A8A]">My Meetings</Link></li>
      <li>
        <Link to="/logout" className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A]">
          <FaSignOutAlt /> Çıxış
        </Link>
      </li>
    </ul>
  </div>
);

// Main dashboard component
const Main = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const services = [
    { title: "PDF Təlimatlar", icon: FaFilePdf, route: "/pdf", description: "Asanlıqla yükləyə biləcəyiniz PDF formatında təlimatlar." },
    { title: "Video Təlimatlar", icon: FaVideo, route: "/videos", description: "Addım-addım izah edən video dərslər." },
    { title: "Quizlər", icon: FaQuestionCircle, route: "/quizzes", description: "Biliklərinizi sınayın." },
    { title: "Qaydalar", icon: FaRegFileAlt, route: "/rules", description: "Rəsmi müraciət prosedurları." },
    { title: "Siyasətlər", icon: FaBook, route: "/policies", description: "Əsas siyasət və qaydalar." },
    { title: "Prosedurlar", icon: FaLaptopCode, route: "/itrules", description: "İT istifadə qaydaları." },
  ];

  const meetings = [
    { date: '2025-10-09', time: '06:00 - 07:00', place: 'Ofis' },
    { date: '2025-10-09', time: '09:00 - 10:00', place: 'Ofis' },
    { date: '2025-10-09', time: '11:00 - 12:00', place: 'Ofis' },
    { date: '2025-10-10', time: '10:00 - 11:00', place: 'Ofis' },
  ];

  const filteredMeetings = meetings
    .filter(m => {
      const meetingDate = new Date(m.date);
      return (
        meetingDate.getFullYear() === selectedDate.getFullYear() &&
        meetingDate.getMonth() === selectedDate.getMonth() &&
        meetingDate.getDate() === selectedDate.getDate()
      );
    })
    .sort((a, b) => parseInt(a.time.split(':')[0], 10) - parseInt(b.time.split(':')[0], 10))
    .slice(0, 3)
    .map((m, idx) => ({ ...m, title: `Görüş ${idx + 1}` }));

  return (
    <div className="flex flex-col gap-12">
      {/* Hero / Header */}
      <div className="bg-gradient-to-b from-[#162556] via-[#2c3a7b] to-[#3b446f] p-8 sm:p-12 rounded-xl text-center text-white">
        <h1 className="text-xl sm:text-3xl font-semibold mb-4">Şəbəkə inzibatçılığı və texniki dəstək şöbəsi</h1>
        <button
          onClick={() => window.open("https://tm.icta.az/projects/texniki_d-st-k/issues", "_blank")}
          className="px-8 py-2 sm:px-16 sm:py-3.5 bg-[#e6e6e6] text-[#1E3A8A] border border-[#1E3A8A] rounded-full font-semibold hover:bg-[#1E3A8A] hover:text-white transition"
        >
          Müraciət et
        </button>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => navigate(service.route)}
            className="bg-white rounded-2xl p-6 h-[250px] hover:bg-[#eef2ff] transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer border border-[#e5e7eb] relative"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-3 bg-[#dce9ff] rounded-full shadow-sm">
              <service.icon className="text-3xl text-[#1E3A8A]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{service.description}</p>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar & Meetings */}
      <div className="bg-white p-6 sm:p-12 rounded-2xl max-w-6xl mx-auto flex flex-col sm:flex-row gap-8">
        <div className="sm:w-1/3">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="rounded-xl shadow-2xl w-full"
          />
        </div>
        <div className="sm:w-2/3 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-[#1E3A8A]">Seçilmiş tarix: {selectedDate.toLocaleDateString()}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredMeetings.map((meeting, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-lg hover:bg-[#eef2ff] transition cursor-pointer">
                <h4 className="font-semibold text-[#1E3A8A]">{meeting.title}</h4>
                <p className="text-gray-600">{meeting.time}</p>
                <p className="text-gray-500 mt-1">Məkan: {meeting.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Final ProfilePage
export default function ProfilePageFull() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />
      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/videos" element={<MyVideos />} />
          <Route path="/quizzes" element={<MyQuizzes />} />
          <Route path="/pdf" element={<MyPdf />} />
          <Route path="/meetings" element={<MyMeetings />} />
        </Routes>
      </div>
    </div>
  );
}

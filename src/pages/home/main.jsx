import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { FaFilePdf, FaVideo, FaQuestionCircle, FaRegFileAlt, FaBook, FaLaptopCode } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import News from "../../components/News"
import About from '../../components/About'
import Team from '../../components/Team'
import Contact from '../../components/Contact'
import ComplaintSuggestion from '../../components/Feedback'

export default function Main() {

    const navigate = useNavigate(); 
    
 const services = [
  { 
    title: "PDF Təlimatlar", 
    icon: FaFilePdf, 
    route: "/instructions",
    description: "Asanlıqla yükləyə biləcəyiniz və oxuya biləcəyiniz PDF formatında təlimatlar."
  },
  { 
    title: "Video Təlimatlar", 
    icon: FaVideo, 
    route: "/videos",
    description: "Addım-addım izah edən video dərslərlə prosesləri öyrənin."
  },
  { 
    title: "Quizlər", 
    icon: FaQuestionCircle, 
    route: "/quizzes",
    description: "Biliklərinizi sınayın və öyrəndiklərinizi möhkəmləndirin."
  },
  { 
    title: "Qaydalar", 
    icon: FaRegFileAlt, 
    route: "/rules",
    description: "Rəsmi müraciət prosedurlarını və lazım olan addımları öyrənin."
  },
  { 
    title: "Siyasətlər", 
    icon: FaBook, 
    route: "/policies",
    description: "Şirkət və ya təşkilatın əsas siyasətləri və qaydaları haqqında məlumat."
  },
  { 
    title: "Prosedurlar", 
    icon: FaLaptopCode, 
    route: "/itrules",
    description: "İT istifadə qaydaları, təhlükəsizlik və daxili protokollar barədə tövsiyələr."
  },
];


  const meetings = [
  { date: '2025-10-09', time: '06:00 - 07:00', place: 'Ofis' },
  { date: '2025-10-09', time: '09:00 - 10:00', place: 'Ofis' },
  { date: '2025-10-09', time: '11:00 - 12:00', place: 'Ofis' },
   { date: '2025-10-09', time: '13:00 - 14:00', place: 'Ofis' },
  { date: '2025-10-10', time: '10:00 - 11:00', place: 'Ofis' },
  { date: '2025-10-10', time: '13:00 - 14:00', place: 'Ofis' },
];


   const [selectedDate, setSelectedDate] = useState(new Date());



const filteredMeetings = meetings
  .filter(m => {
    const meetingDate = new Date(m.date);
    return (
      meetingDate.getFullYear() === selectedDate.getFullYear() &&
      meetingDate.getMonth() === selectedDate.getMonth() &&
      meetingDate.getDate() === selectedDate.getDate()
    );
  })
  .sort((a, b) => {
    const hourA = parseInt(a.time.split(':')[0], 10);
    const hourB = parseInt(b.time.split(':')[0], 10);
    return hourA - hourB;
  })
  .slice(0, 3)
  .map((m, idx) => ({ ...m, title: `Görüş ${idx + 1}` }));



  
  

  
  
  return (
    <>
       <div      style={{
    background: 'linear-gradient(180deg, #162556 0%, #2c3a7b 50%, #3b446f 100%)'
  }}
        className="mx-auto flex 
       p-8 flex-col items-center gap-8  w-full  h-[380px] relative  ">
        <h1 className='text-white font-semibold text-[35px] '>Şəbəkə inzibatçılığı və texniki dəstək şöbəsi</h1>
          <div className=" w-[40%] items-center justify-between rounded-full border border-[#D4D4D4] hover:border-[#92B5F6] sm:flex sm:h-[48px] sm:px-6">
            <input
              onChange={(e) => setInputValue(e?.target?.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleFilter();
                }
              }}
              type="text"
              placeholder="Axtar"
              className="hidden w-full bg-transparent text-base text-[#1A1A1A] placeholder-[#9C9C9C] outline-none sm:block"
            />
            <button className="ml-2  flex-shrink-0 cursor-pointer"> 
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </button>
          </div>
          <button 
           onClick={() => window.open("https://tm.icta.az/projects/texniki_d-st-k/issues", "_blank")}
          className='px-16 py-3.5 bg-[#e6e6e6] text-[#1E3A8A] border border-[#1E3A8A]  font-semibold rounded-full   hover:bg-[#1E3A8A] hover:border-[#1E3A8A]  mt-2 hover:text-white hover:shadow-lg'>Müraciət et</button>
        </div>


       {/*boxes*/}
    <section className="bg-transparent text-black pb-6 px-8 relative -mt-14">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {services.map((service, index) => (
      <div  onClick={() => navigate(service.route)} 
        key={index}
        className="bg-white rounded-2xl p-6 h-[250px] hover:bg-[#eef2ff] transition-all duration-300 shadow-xl flex flex-col justify-center items-start cursor-pointer border border-[#e5e7eb] relative overflow-visible"
      >
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#dce9ff] shadow-sm">
          <service.icon className="text-3xl text-[#1E3A8A]" />
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      <p className="text-gray-500 mt-2 text-sm w-[80%] ">{service.description}</p>
    
        <div      className="absolute bottom-10 right-4 w-8 h-8 flex items-center justify-center bg-[#1E3A8A] text-white rounded-full shadow-lg cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    ))}
  </div>
</section>

  {/*calendar*/}
   <section className="bg-white p-20 rounded-2xl   w-[83%] mx-auto justify-center flex gap-14 ">
      
      <div className="">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="rounded-xl shadow-2xl p-4"
        />
      </div>

      
      <div className="w-[60%] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-[24px] font-semibold text-black">
            Seçilmiş tarix: {selectedDate.toLocaleDateString()}
          </h3>
        <button
  onClick={() => navigate("/calendar", { state: { selectedDate } })}
  className="px-4 py-2 bg-[#1E3A8A] text-white rounded-full hover:bg-[#17275B] transition font-medium"
>
  Yeni Görüş
</button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMeetings.map((meeting, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-lg hover:hover:bg-[#eef2ff] transition cursor-pointer">
              <h4 className="font-semibold text-[#1E3A8A] text-[18px] mb-1">{meeting.title}</h4>
              <p className="text-gray-600 text-[14px] text-sm">{meeting.time}</p>
              <p className="text-gray-500 text-[13px] mt-1">Məkan: {meeting.place}</p>
            </div>
          ))}
        </div>

     {filteredMeetings.length > 0 && (
  <div className="mt-2 flex justify-end">
    <button
      onClick={() =>
        navigate("/calendar", { state: { selectedDate } }) 
      }
      className="px-4 py-2 bg-gray-200 text-[#1E3A8A] font-medium rounded-full hover:bg-gray-300 transition cursor-pointer"
    >
      Bütün Görüşlər
    </button>
  </div>
)}

      </div>
    </section>

        <News/>
        <About/>
        <Team/>
        
        <ComplaintSuggestion/>

</>
  )
}

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberImage from "../assets/member.jpg"; 

const Komandamiz = () => {

  const [teamMembers, setTeamMembers] = useState([]);

useEffect(() => {
  async function fetchTeamMembers() {
    try {
      const res = await fetch("https://localhost:7176/api/TeamMembers/getAllTeamMembers");
      if (!res.ok) throw new Error("API error: " + res.status);
      const data = await res.json();
      console.log("Team API response:", data);
      setTeamMembers(Array.isArray(data) ? data : data.data || []);
    } catch (err) {
      console.error("Team members alınmadı:", err);
      setTeamMembers([]); // fallback
    }
  }

  fetchTeamMembers();
}, []);




  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="text-[#1E3A8A] pb-8 px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Komandamız
      </h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
       {teamMembers.map((member) => (
  <div key={member.id} className="px-4">
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 my-3">

   
      <img
        src={`https://localhost:8080/uploads/${member.photo}`}
        alt={`${member.name} ${member.surname}`}
        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
      />

    
      <h3 className="text-xl font-semibold">
        {member.name} {member.surname}
      </h3>

    
      <p className="text-sm text-gray-600">
        {member.position}
      </p>

      {member.phone && (
        <p className="text-xs text-gray-500 mb-2">
           {member.phone}
        </p>
      )}

     
      <div className="flex justify-center gap-4 mt-2">

        {member.linkedIn && (
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1E3A8A] hover:text-[#162556]"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="text-[#1E3A8A] hover:text-[#162556]"
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>

    </div>
  </div>
))}

        </Slider>
      </div>
    </section>
  );
};

export default Komandamiz;


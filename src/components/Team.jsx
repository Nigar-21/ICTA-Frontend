import React from "react";
import Slider from "react-slick";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MemberImage from "../assets/member.jpg"; 

const Komandamiz = () => {
  const teamMembers = [
    {
      name: "Nigar Hacıyeva",
      position: "Frontend Developer",
      linkedin: "https://linkedin.com",
      email: "nigar@example.com",
      image: MemberImage,
    },
    {
      name: "Rəşad Məmmədov",
      position: "Backend Developer",
      linkedin: "https://linkedin.com",
      email: "rashad@example.com",
      image: MemberImage,
    },
    {
      name: "Aysel Qasımova",
      position: "UI/UX Dizayner",
      linkedin: "https://linkedin.com",
      email: "aysel@example.com",
      image: MemberImage,
    },
    {
      name: "Tural Əliyev",
      position: "DevOps Engineer",
      linkedin: "https://linkedin.com",
      email: "tural@example.com",
      image: MemberImage,
    },
    {
      name: "Elnarə Hüseynova",
      position: "Project Manager",
      linkedin: "https://linkedin.com",
      email: "elnare@example.com",
      image: MemberImage,
    },
    {
      name: "Murad Quliyev",
      position: "Cybersecurity Specialist",
      linkedin: "https://linkedin.com",
      email: "murad@example.com",
      image: MemberImage,
    },
  ];

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
      <h2 className="text-3xl font-bold text-center mb-4">Komandamız</h2>

      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-6 my-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.position}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E3A8A] hover:text-[#162556] transition-all duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#1E3A8A] hover:text-[#162556] transition-all duration-300"
                  >
                    <FaEnvelope size={20} />
                  </a>
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

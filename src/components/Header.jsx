import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"; 
import Logo from '../assets/icta-logo.png';
import { FaUserCircle,FaUser, FaSignOutAlt } from 'react-icons/fa';
import { FiPhone, FiCalendar } from 'react-icons/fi';

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Profil dropdown state
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Calendar hover text state
  const [showCalendarText, setShowCalendarText] = useState(false);
    const [showContactText, setShowContactText] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

const DropdownArrow = () => (
  <div className="absolute right-4 -top-1.5 w-0 h-0 
  border-l-[7px] border-r-[7px] border-b-[7px]
  border-l-transparent border-r-transparent border-b-white 
  shadow-md"></div>
);


  const navLinks = [
    { name: "Ana səhifə", to: "/" },
    { name: "Haqqımızda",
      dropdown: [
        { name: "Şöbə haqqında", to: "/about?tab=sobe" },
        { name: "Əsasnamə", to: "/about?tab=esasname" },
        { name: "Struktur", to: "/about?tab=struktur" },
      ]
    },
    { name: "Yeniliklər", to: "/news", 
      dropdown: [
        { name: "Xəbərlər", to: "/xeberler" },
        { name: "Məqalələr", to: "/meqaleler" },
        { name: "Elanlar", to: "/elanlar" }
      ]},
    { name: "FAQ", to: "/faq" },
    { name: "Təlimlər",
      dropdown: [
        { name: "Video təlimlər", to: "/videos" },
        { name: "Təlimatlar", to: "/instructions" },
        { name: "Quizlər", to: "/quizzes" }
      ]
    },
    { name: "Reqlament",
      dropdown: [
        { name: "Qaydalar", to: "/rules" },
        { name: "Siyasətlər", to: "/policies" },
        { name: "Prosedurlar", to: "/itrules" }
      ]
    },
  ];

  return (
    <div className="mx-auto flex w-full flex-nowrap items-center justify-between py-8 px-16 bg-blue-950">
      
      {/* LOGO */}
      <img src={Logo} alt="logo" className='w-[310px]' />

      {/* NAVIGATION */}
      <nav className='flex gap-2 text-white font-semibold'>
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            {link.dropdown ? (
              <>
                <Link    
                  to={link.to} 
                  className="cursor-pointer transition-colors duration-200 hover:bg-[#1E3A8A] py-2 px-4 hover:shadow-xl rounded-full">
                  {link.name}
                </Link>
                <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={link.to}
                className="transition-colors duration-200 hover:bg-[#1E3A8A] py-2 px-4 rounded-full"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-6 text-white text-2xl relative">

      
   <div 
  className="relative"
  onMouseEnter={() => setShowContactText(true)}
  onMouseLeave={() => setShowContactText(false)}
>
  <button
    onClick={() => navigate("/contact")}
    className="p-2 rounded-full hover:bg-[#1E3A8A] transition duration-200"
  >
    <FiPhone />
  </button>

  {showContactText && (
    <div className="absolute right-0 top-full mt-2 w-[150px] z-30">
      <DropdownArrow />
      <div className="bg-white text-gray-700 text-[16px] font-semibold rounded-xl shadow-xl px-4 py-2">
        Əlaqə siyahısı
      </div>
    </div>
  )}
</div>


       <div 
  className="relative"
  onMouseEnter={() => setShowCalendarText(true)}
  onMouseLeave={() => setShowCalendarText(false)}
>
  <button
    className="p-2 rounded-full hover:bg-[#1E3A8A] transition duration-200"
    onClick={() => navigate("/calendar")}
  >
    <FiCalendar />
  </button>

  {showCalendarText && (
    <div className="absolute right-0 top-full mt-2 w-[120px] z-30">
      <DropdownArrow />
      <div className="bg-white text-gray-700 text-[16px] font-semibold rounded-xl shadow-xl px-4 py-2">
        Görüşlər
      </div>
    </div>
  )}
</div>


        
{user ? (
  <div className="relative"
   onMouseEnter={() => setShowProfileMenu(true)}
  onMouseLeave={() => setShowProfileMenu(false)}
  >

    <button
     
      className="p-2 rounded-full hover:bg-[#1E3A8A] transition duration-200 text-white text-2xl"
    >
      <FaUserCircle />
    </button>

    {showProfileMenu && (
      <div className="absolute right-0 top-full mt-2 w-48 z-30">

        <DropdownArrow />

        <div className="bg-white text-gray-700 rounded-xl shadow-2xl overflow-hidden">

          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-gray-700
                       hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200 text-[16px] font-semibold"
          >
            <FaUser className="text-xl" />
            Profilim
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full text-left px-4 py-2 text-gray-700
                       hover:bg-[#1E3A8A] hover:text-white transition-colors duration-200 text-[16px] font-semibold"
          >
            <FaSignOutAlt className="text-xl" />
            Hesabdan çıxış
          </button>

        </div>
      </div>
    )}
  </div>
) : (
  <button
    onClick={() => navigate("/auth")}
    className='text-white border rounded-full font-semibold border-[#1E3A8A] bg-[#1E3A8A] 
    hover:bg-[#17275B] hover:border-[#17275B] py-2 px-6 text-[16px] transition-all duration-200'
  >
    Daxil ol
  </button>
)}



      </div>

    </div>
  );
}

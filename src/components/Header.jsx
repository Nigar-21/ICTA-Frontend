import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/icta-logo.png'
export default function Header() {
    const navLinks = [
    { name: "Ana səhifə", to: "/" },
       { name: "Yeniliklər", 
      dropdown: [
        { name: "Xəbərlər", to: "/xeberler" },
        { name: "Məqalələr", to: "/meqaleler" },
        { name: "Elanlar", to: "/elanlar" }
      ]},
      { name: "Haqqımızda", 
      dropdown: [
        { name: "Şöbə haqqında", to: "/haqqimizda" },
        { name: "Əsasnamə", to: "/esasname" },
        { name: "Struktur", to: "/struktur" },
        { name: "Müraciət qaydaları", to: "/muraciet-qaydalari" }
      ]},
    { name: "Əlaqə", to: "/contact" },
    { name: "Kalendar", to: "/calendar" },
    { name: "FAQ", to: "/faq" },
    { name: "Nömrə siyahısı", to: "/numbers" },
  ];

  return (
   <div className="mx-auto flex  w-full flex-nowrap items-center justify-between py-8 px-16 bg-blue-950 ">
<div>
    <img src={Logo} alt="logo" className='w-[310px] '/>
</div>
  <nav className='flex gap-2 text-white font-semibold'>
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            {link.dropdown ? (
              <>
                <span className="cursor-pointer transition-colors duration-200 hover:bg-[#1E3A8A] py-2 px-4  hover:shadow-xl rounded-full ">{link.name}</span>
                <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible hover:shadow-xl transition-all duration-300 z-10">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#1E3A8A]  hover:text-white hover:shadow-xl transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={link.to}
                className="relative transition-colors duration-200 hover:bg-[#1E3A8A] hover:shadow-xl py-2 px-4 rounded-full"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
  <button
        className='text-white border rounded-full cursor-pointer font-semibold border-[#1E3A8A] bg-[#1E3A8A] 
        hover:bg-[#17275B] hover:border-[#17275B] hover:shadow-xl py-2 px-6 transition-all duration-200'
      >
        Daxil ol
      </button>
   </div>
  )
}

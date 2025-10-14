import React from "react";
import Logo from "../assets/icta-logo.png";

export default function Footer() {

  const currentDate = new Date().toLocaleDateString("az-AZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <footer className="bg-[#162556] text-white py-10 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
       
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="ICTA Logo"
            className="w-[220px] sm:w-[260px] md:w-[300px]"
          />
        </div>

    
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm sm:text-base font-medium">
            <span className="font-semibold">Tarix:</span> {currentDate}
          </p>
          <p className="text-sm sm:text-base font-medium">
            <span className="font-semibold">Otaq nömrəsi:</span> 208
          </p>
          <p className="text-sm sm:text-base font-medium">
            <span className="font-semibold">Texniki dəstək nömrəsi:</span>{" "}
            +994 12 345 67 89
          </p>
        </div>

        
        <div className="text-center md:text-right max-w-[280px]">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Bu səhifə{" "}
            <span className="font-semibold text-white">
              Şöbənin təcrübəçiləri
            </span>{" "}
            tərəfindən hazırlanmışdır.
          </p>
        </div>
      </div>

      
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}

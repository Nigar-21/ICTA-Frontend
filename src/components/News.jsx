import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsImage from '../assets/download.jpeg'

export default function News() {
  const newsData = [
    {
      title: "Yeni IT qaydaları tətbiq edildi",
      date: "05.10.2025",
      image: NewsImage,
      category: "Xəbər",
    },
    {
      title: "Müraciət sistemində yeniliklər",
      date: "04.10.2025",
      image: NewsImage,
      category: "Elan",
    },
    {
      title: "Texniki təlimlər başladı",
      date: "03.10.2025",
      image: NewsImage,
      category: "Məqalə",
    },
    {
      title: "Yeni təhlükəsizlik siyasəti",
      date: "02.10.2025",
      image: NewsImage,
      category: "Xəbər",
    },
    {
      title: "Sistem yenilənməsi tamamlandı",
      date: "01.10.2025",
      image: NewsImage,
      category: "Elan",
    },
  ];

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-0 sm:right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer text-[#1E3A8A] hover:text-[#2E3192] z-10"
      >
        <FaArrowRight size={24} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-0 sm:left-[-30px] top-1/2 -translate-y-1/2 cursor-pointer text-[#1E3A8A] hover:text-[#2E3192] z-10"
      >
        <FaArrowLeft size={24} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
<section className="bg-white text-black px-4 sm:px-16 py-6">
  <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-10 text-center">
    Yeniliklər
  </h2>

  <div className="relative max-w-7xl mx-auto">
    <Slider {...settings}>
      {newsData.slice(0, 10).map((item, index) => (
        <div key={index} className="px-2 sm:px-3">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all sm:h-[330px] w-[80%] mx-auto  sm:w-[290px] duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500">{item.date}</span>
              <h3 className="text-lg sm:text-xl font-semibold  text-[#1E3A8A] line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>

  <div className="flex justify-center sm:justify-end mt-10 max-w-7xl mx-auto">
    <Link
      to="/news"
      className="bg-[#1E3A8A] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#162556] transition-all duration-300 font-semibold text-sm sm:text-base"
    >
      Bütün yeniliklərə keçid →
    </Link>
  </div>
</section>

  );
}

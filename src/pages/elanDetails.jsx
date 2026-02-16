import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CoverImage from "../assets/ITPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp as faThumbsUpRegular,
  faThumbsDown as faThumbsDownRegular,
} from "@fortawesome/free-regular-svg-icons";

export default function ElanDetails() {
  const { id } = useParams();

  const [news, setNews] = useState(null); // seçilmiş elan
  const [allNews, setAllNews] = useState([]); // bütün elanlar (most viewed üçün)
  const [userVotes, setUserVotes] = useState({}); // localStorage ilə vote tracking
  const [loading, setLoading] = useState(true);

  // Seçilmiş elanın detallarını fetch etmək
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:7176/api/Novelty/getbyid/${id}`);
        setNews(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Detail API error:", err);
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  // Bütün elanları fetch etmək (most viewed üçün)
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get(`http://localhost:7176/api/Novelty/getall`);
        setAllNews(res.data);
      } catch (err) {
        console.error("All news API error:", err);
      }
    };
    fetchAll();
  }, []);

  // User votes-u localStorage-dan götürmək
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  if (loading) return <div className="text-center py-20">Yüklənir...</div>;
  if (!news) return <div className="text-center py-20">Elan tapılmadı</div>;

  const handleVote = async (newsId, type) => {
    try {
      const currentVote = userVotes[newsId];

      let likeActiveDeactive = 0;
      let dislikeActiveDeactive = 0;

      if (type === "like") {
        likeActiveDeactive = currentVote === "like" ? 0 : 1;
        if (currentVote === "dislike") {
          dislikeActiveDeactive = 0; // əgər dislike varsa onu ləğv et
        }
      } else if (type === "dislike") {
        dislikeActiveDeactive = currentVote === "dislike" ? 0 : 1;
        if (currentVote === "like") {
          likeActiveDeactive = 0; // əgər like varsa onu ləğv et
        }
      }

      // API çağırışları
      if (likeActiveDeactive !== null) {
        await axios.post(`http://localhost:7176/api/Novelty/like/${newsId}/${likeActiveDeactive}`);
      }
      if (dislikeActiveDeactive !== null) {
        await axios.post(
          `http://localhost:7176/api/Novelty/dislike/${newsId}/${dislikeActiveDeactive}`
        );
      }

      // Frontend state update
      const updatedNews = { ...news };

      if (type === "like") {
        if (currentVote === "like") updatedNews.likes -= 1;
        else {
          updatedNews.likes += 1;
          if (currentVote === "dislike") updatedNews.dislikes -= 1;
        }
      } else if (type === "dislike") {
        if (currentVote === "dislike") updatedNews.dislikes -= 1;
        else {
          updatedNews.dislikes += 1;
          if (currentVote === "like") updatedNews.likes -= 1;
        }
      }

      setNews(updatedNews);

      // localStorage update
      const updatedVotes = { ...userVotes };
      if (currentVote === type) delete updatedVotes[newsId];
      else updatedVotes[newsId] = type;

      setUserVotes(updatedVotes);
      localStorage.setItem("userVotes", JSON.stringify(updatedVotes));
    } catch (err) {
      console.error("Vote API error:", err);
    }
  };

  // Most viewed elanlar
  const mostViewed = [...allNews]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <div className="w-full">
      {/* Cover */}
      <div
        className="relative h-[200px] sm:h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${CoverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Breadcrumb */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 text-xs sm:text-md text-gray-300 z-10">
          <Link to="/" className="hover:underline w-[60px] sm:w-full ">
            Ana səhifə
          </Link>
          <span>→</span>
          <Link to="/news" className="hover:underline">
            Yeniliklər
          </Link>
          <span>→</span>
          <span className="hover:underline">Elan</span>
          <span>→</span>
          <span className="font-semibold w-[90px] sm:w-full line-clamp-2 ">
            {news.title}
          </span>
        </div>

        <h1 className="relative z-10 text-white text-2xl sm:text-5xl font-bold px-4 text-center">
          {news.title}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {/* Sol Sütun */}
        <div className="sm:col-span-2 space-y-6">
          <div className="w-full h-[200px] sm:h-[400px] rounded-2xl overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between text-gray-500 text-sm">
            <span>{news.date}</span>
            <span>{news.views} baxış</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">{news.title}</h2>

          {/* Like / Dislike */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-gray-700">
            <div className="flex items-center space-x-2">
              <button onClick={() => handleVote(news.id, "like")}>
                <FontAwesomeIcon
                  icon={userVotes[news.id] === "like" ? faThumbsUpSolid : faThumbsUpRegular}
                />
              </button>
              <span>{news.likes}</span>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => handleVote(news.id, "dislike")}>
                <FontAwesomeIcon
                  icon={userVotes[news.id] === "dislike" ? faThumbsDownSolid : faThumbsDownRegular}
                />
              </button>
              <span>{news.dislikes}</span>
            </div>
          </div>

          <p className="text-gray-700">{news.content}</p>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2">
            {news.hashtags?.map((tag, idx) => (
              <Link
                key={idx}
                to={`/news/hashtag/${tag}`}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300 transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Sağ Sütun */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">Ən çox baxılanlar</h3>
          {mostViewed.map((item) => (
            <Link
              key={item.id}
              to={`/elanlar/${item.id}`}
              className="flex items-center space-x-2 sm:space-x-3 hover:bg-gray-100 rounded p-2 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold text-gray-700">{item.title}</span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {item.date} · {item.views} baxış
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

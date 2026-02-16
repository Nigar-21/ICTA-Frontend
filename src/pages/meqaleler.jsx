import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoverImage from "../assets/ITPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpRegular, faThumbsDown as faThumbsDownRegular } from "@fortawesome/free-regular-svg-icons";

export default function Meqaleler() {
  const [newsList, setNewsList] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    fetchNews();
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/Novelty/getall");
      const data = await res.json();
      const mappedData = data.map(item => ({
        id: item.id,
        title: item.title,
        content: item.content,
        image: item.coverPhoto || CoverImage,
        date: item.date || new Date().toISOString(),
        views: item.views || 0,
        likes: item.likes || 0,
        dislikes: item.dislikes || 0
      }));
      setNewsList(mappedData);
    } catch (err) {
      console.error("Xəbərləri yükləmək alınmadı:", err);
    }
  };

  const handleVote = async (id, type) => {
    const currentVote = userVotes[id];

    let apiUrl = "";
    if (type === "like") {
      apiUrl = `/api/Novelty/like/${id}/${currentVote === "like" ? 0 : 1}`;
    } else {
      apiUrl = `/api/Novelty/dislike/${id}/${currentVote === "dislike" ? 0 : 1}`;
    }

    try {
      await fetch(apiUrl, { method: "POST" });

      const updatedVotes = { ...userVotes };
      if (currentVote === type) delete updatedVotes[id];
      else updatedVotes[id] = type;

      setUserVotes(updatedVotes);
      localStorage.setItem("userVotes", JSON.stringify(updatedVotes));

      fetchNews(); // Yenidən yüklə ki like/dislike sayı güncəllənsin
    } catch (err) {
      console.error("Səs vermək alınmadı:", err);
    }
  };

  const formatDate = (dateString) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const newsDate = new Date(dateString);
    if (newsDate.toDateString() === today.toDateString()) return "Bugün";
    if (newsDate.toDateString() === yesterday.toDateString()) return "Dünən";

    return newsDate.toLocaleDateString('az-AZ', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="w-full">
      {/* Cover */}
      <div
        className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${CoverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 text-xs sm:text-sm text-gray-300 z-10">
          <Link to="/" className="hover:underline w-[56px] sm:w-full ">Ana səhifə</Link>
          <span>→</span>
          <Link to="/news" className="hover:underline">Yeniliklər</Link>
          <span>→</span>
          <span className="text-white font-semibold">Məqalələr</span>
        </div>
        <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Məqalələr
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {newsList.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col overflow-hidden">
            <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>

            <div className="p-3 sm:p-4 flex flex-col flex-1">
              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
                <span>{formatDate(item.date)}</span>
                <span>{item.views} baxış</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#1E3A8A] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.content}</p>

              <div className="mt-auto flex justify-between items-center">
                <div className="flex space-x-4 items-center text-gray-700">
                  <div className="flex items-center space-x-1">
                    <button onClick={() => handleVote(item.id, "like")}>
                      <FontAwesomeIcon
                        icon={userVotes[item.id] === "like" ? faThumbsUpSolid : faThumbsUpRegular}
                      />
                    </button>
                    <span>{item.likes}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button onClick={() => handleVote(item.id, "dislike")}>
                      <FontAwesomeIcon
                        icon={userVotes[item.id] === "dislike" ? faThumbsDownSolid : faThumbsDownRegular}
                      />
                    </button>
                    <span>{item.dislikes}</span>
                  </div>
                </div>

                <Link
                  to={`/meqaleler/${item.id}`}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E3A8A] text-white text-sm rounded-full hover:bg-[#17275B] transition"
                >
                  Tam bax
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

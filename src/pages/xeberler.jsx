import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CoverImage from "../assets/ITPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpRegular, faThumbsDown as faThumbsDownRegular } from "@fortawesome/free-regular-svg-icons";

export default function Xeberler() {
  const [newsList, setNewsList] = useState([]);
  const [userVotes, setUserVotes] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:7176/api/Novelty/getall");
        setNewsList(res.data);
        setLoading(false);
      } catch (err) {
        console.error("News API error:", err);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  const handleVote = async (id, type) => {
    try {
      const currentVote = userVotes[id];

      let likeActiveDeactive = 0;
      let dislikeActiveDeactive = 0;

      if (type === "like") {
        likeActiveDeactive = currentVote === "like" ? 0 : 1;
        if (currentVote === "dislike") dislikeActiveDeactive = 0;
      } else {
        dislikeActiveDeactive = currentVote === "dislike" ? 0 : 1;
        if (currentVote === "like") likeActiveDeactive = 0;
      }

      if (likeActiveDeactive !== null) {
        await axios.post(`http://localhost:7176/api/Novelty/like/${id}/${likeActiveDeactive}`);
      }
      if (dislikeActiveDeactive !== null) {
        await axios.post(`http://localhost:7176/api/Novelty/dislike/${id}/${dislikeActiveDeactive}`);
      }

    
      const updatedNews = newsList.map(item => {
        if (item.id === id) {
          let newLikes = item.likes;
          let newDislikes = item.dislikes;

          if (type === "like") {
            if (currentVote === "like") newLikes--;
            else {
              newLikes++;
              if (currentVote === "dislike") newDislikes--;
            }
          } else {
            if (currentVote === "dislike") newDislikes--;
            else {
              newDislikes++;
              if (currentVote === "like") newLikes--;
            }
          }

          return { ...item, likes: newLikes, dislikes: newDislikes };
        }
        return item;
      });

      setNewsList(updatedNews);

      const updatedVotes = { ...userVotes };
      if (currentVote === type) delete updatedVotes[id];
      else updatedVotes[id] = type;

      setUserVotes(updatedVotes);
      localStorage.setItem("userVotes", JSON.stringify(updatedVotes));
    } catch (err) {
      console.error("Vote API error:", err);
    }
  };

  const formatDate = (dateString) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const [year, month, day] = dateString.split("-").map(Number);
    const newsDate = new Date(year, month - 1, day);

    if (newsDate.toDateString() === today.toDateString()) return "Bugün";
    if (newsDate.toDateString() === yesterday.toDateString()) return "Dünən";

    return newsDate.toLocaleDateString('az-AZ', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (loading) return <div className="text-center py-20">Yüklənir...</div>;
  if (!newsList.length) return <div className="text-center py-20">Xəbər tapılmadı</div>;

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[240px] sm:h-[300px] md:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${CoverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-300 z-10">
          <Link to="/" className="hover:underline w-[56px] sm:w-full ">Ana səhifə</Link>
          <span>→</span>
          <Link to="/news" className="hover:underline">Yeniliklər</Link>
          <span>→</span>
          <span className="text-white font-semibold">Xəbərlər</span>
        </div>

        <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4">
          Xəbərlər
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

        {newsList.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col overflow-hidden">
            <div className="w-full h-[180px] sm:h-[220px] md:h-[250px] bg-cover bg-center"
                 style={{ backgroundImage: `url(${item.image || CoverImage})` }}></div>

            <div className="p-3 sm:p-4 flex flex-col flex-1">

              <div className="flex justify-between text-xs sm:text-sm text-gray-500 mb-2">
                <span>{formatDate(item.date)}</span>
                <span>{item.views} baxış</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-[#1E3A8A] mb-2 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.content}</p>

              <div className="mt-auto flex justify-between items-center">

                <div className="flex space-x-3 sm:space-x-4 items-center text-gray-700 text-sm">
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
                  to={`/xeberler/${item.id}`}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E3A8A] text-white rounded-full 
                             hover:bg-[#17275B] transition text-xs sm:text-sm md:text-base"
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

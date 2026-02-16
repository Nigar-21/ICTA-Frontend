import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
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

export default function XeberDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [allNews, setAllNews] = useState([]);
  const [userVotes, setUserVotes] = useState({});
  const [loading, setLoading] = useState(true);

  // Seçilmiş xəbər
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

  // Bütün xəbərlər (most viewed)
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:7176/api/Novelty/getall");
        setAllNews(res.data);
      } catch (err) {
        console.error("All news API error:", err);
      }
    };
    fetchAll();
  }, []);

  // localStorage
  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  if (loading) return <div className="text-center py-20">Yüklənir...</div>;
  if (!news) return <div className="text-center py-20">Xəbər tapılmadı</div>;

  const handleVote = async (newsId, type) => {
    try {
      const currentVote = userVotes[newsId];

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
        await axios.post(`http://localhost:7176/api/Novelty/like/${newsId}/${likeActiveDeactive}`);
      }
      if (dislikeActiveDeactive !== null) {
        await axios.post(`http://localhost:7176/api/Novelty/dislike/${newsId}/${dislikeActiveDeactive}`);
      }

    
      let newLikes = news.likes;
      let newDislikes = news.dislikes;

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

      setNews({ ...news, likes: newLikes, dislikes: newDislikes });

      const updatedVotes = { ...userVotes };
      if (currentVote === type) delete updatedVotes[newsId];
      else updatedVotes[newsId] = type;

      setUserVotes(updatedVotes);
      localStorage.setItem("userVotes", JSON.stringify(updatedVotes));
    } catch (err) {
      console.error("Vote API error:", err);
    }
  };

  const mostViewed = [...allNews].sort((a,b) => b.views - a.views).slice(0,5);

  return (
    <div className="w-full">
      {/* Cover */}
      <div
        className="relative h-[250px] sm:h-[400px] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${CoverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 z-10 text-xs sm:text-md flex space-x-1 sm:space-x-2">
          <Link to="/" className="hover:underline">Ana səhifə</Link>
          <span>→</span>
          <Link to="/news" className="hover:underline">Yeniliklər</Link>
          <span>→</span>
          <span className="hover:underline">Xəbər</span>
        </div>
        <h1 className="relative z-10 text-white text-2xl sm:text-5xl font-bold px-4">{news.title}</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Sol */}
        <div className="sm:col-span-2 space-y-6">
          <div className="w-full h-[200px] sm:h-[400px] rounded-2xl overflow-hidden">
            <img src={news.image || CoverImage} alt={news.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between text-gray-500 text-xs sm:text-sm">
            <span>{news.date}</span>
            <span>{news.views} baxış</span>
          </div>

          <h2 className="text-xl sm:text-3xl font-bold text-[#1E3A8A]">{news.title}</h2>

          {/* Like / Dislike */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-gray-700">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button onClick={() => handleVote(news.id, "like")}>
                <FontAwesomeIcon icon={userVotes[news.id] === "like" ? faThumbsUpSolid : faThumbsUpRegular} />
              </button>
              <span>{news.likes}</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button onClick={() => handleVote(news.id, "dislike")}>
                <FontAwesomeIcon icon={userVotes[news.id] === "dislike" ? faThumbsDownSolid : faThumbsDownRegular} />
              </button>
              <span>{news.dislikes}</span>
            </div>
          </div>

          <p className="text-gray-700 text-sm sm:text-base">{news.content}</p>

          <div className="flex flex-wrap gap-2">
            {news.hashtags?.map((tag, idx) => (
              <Link key={idx} to={`/news/hashtag/${tag}`} className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm hover:bg-gray-300 transition">#{tag}</Link>
            ))}
          </div>
        </div>

        {/* Sağ */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1E3A8A]">Ən çox baxılanlar</h3>

          {mostViewed.map(item => (
            <Link key={item.id} to={`/xeberler/${item.id}`} className="flex items-center space-x-3 hover:bg-gray-100 rounded p-2 transition">
              <img src={item.image || CoverImage} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-gray-700">{item.title}</span>
                <span className="text-[10px] sm:text-xs text-gray-500">{item.date} · {item.views} baxış</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

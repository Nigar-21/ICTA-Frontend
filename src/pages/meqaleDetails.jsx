import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CoverImage from "../assets/ITPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpRegular, faThumbsDown as faThumbsDownRegular } from "@fortawesome/free-regular-svg-icons";

export default function MeqaleDetails() {
  const { id } = useParams();

  const newsList = [
    {
      id: 1,
      title: "Yeni IT qaydaları tətbiq edildi",
      date: "05.10.2025",
      image: CoverImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet orci non metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      views: 120,
      likes: 15,
      dislikes: 2,
      hashtags: ["IT", "Qaydalar", "Yenilik"]
    },
    {
      id: 2,
      title: "Sistem yeniləndi",
      date: "03.10.2025",
      image: CoverImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet orci non metus.",
      views: 85,
      likes: 10,
      dislikes: 1,
      hashtags: ["Sistem", "Yenilənmə"]
    },
    {
      id: 3,
      title: "İclas keçirildi",
      date: "01.10.2025",
      image: CoverImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt, sapien ac laoreet.",
      views: 63,
      likes: 8,
      dislikes: 0,
      hashtags: ["İclas", "Planlama"]
    },
  ];

  const [newsState, setNewsState] = useState(newsList);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  const news = newsState.find(n => n.id === parseInt(id));
  if (!news) return <div className="text-center py-20">Məqalə tapılmadı</div>;

  const handleVote = (newsId, type) => {
    const currentVote = userVotes[newsId];

    const updatedNews = newsState.map(item => {
      if (item.id === newsId) {
        let newLikes = item.likes;
        let newDislikes = item.dislikes;

        // Əgər eyni düyməyə təkrar basılıbsa, səs ləğv olunur
        if (currentVote === type) {
          if (type === "like" && newLikes > 0) newLikes -= 1;
          if (type === "dislike" && newDislikes > 0) newDislikes -= 1;
          return { ...item, likes: newLikes, dislikes: newDislikes };
        }

        // Əvvəlki səsi ləğv et
        if (currentVote === "like" && newLikes > 0) newLikes -= 1;
        if (currentVote === "dislike" && newDislikes > 0) newDislikes -= 1;

        // Yeni səs əlavə et
        if (type === "like") newLikes += 1;
        if (type === "dislike") newDislikes += 1;

        return { ...item, likes: newLikes, dislikes: newDislikes };
      }
      return item;
    });

    const updatedVotes = { ...userVotes };
    if (currentVote === type) delete updatedVotes[newsId];
    else updatedVotes[newsId] = type;

    setNewsState(updatedNews);
    setUserVotes(updatedVotes);
    localStorage.setItem("userVotes", JSON.stringify(updatedVotes));
  };

  const mostViewed = [...newsState].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
  <div className="w-full">
  {/* Ümumi Cover */}
  <div
    className="relative h-[250px] sm:h-[400px] flex items-center justify-center text-center"
    style={{
      backgroundImage: `url(${CoverImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Breadcrumb */}
    <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 
      flex space-x-1 sm:space-x-2 text-[10px] sm:text-md text-gray-300 z-10 px-2">
      <Link to="/" className="hover:underline whitespace-nowrap">Ana səhifə</Link>
      <span>→</span>
      <Link to="/news" className="hover:underline whitespace-nowrap">Yeniliklər</Link>
      <span>→</span>
      <span className="hover:underline whitespace-nowrap">Məqalə</span>
      <span>→</span>
      <span className="font-semibold whitespace-nowrap max-w-[120px] sm:max-w-none truncate">
        {news.title}
      </span>
    </div>

    <h1 className="relative z-10 text-white text-2xl sm:text-5xl font-bold px-4">
      {news.title}
    </h1>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
    
    {/* Sol Sütun */}
    <div className="sm:col-span-2 space-y-6">
      <div className="w-full h-[200px] sm:h-[400px] rounded-2xl overflow-hidden">
        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between text-gray-500 text-xs sm:text-sm">
        <span>{news.date}</span>
        <span>{news.views} baxış</span>
      </div>

      <h2 className="text-xl sm:text-3xl font-bold text-[#1E3A8A]">{news.title}</h2>

      {/* Like / Dislike */}
      <div className="flex items-center space-x-6 text-gray-700 text-sm">
        <div className="flex items-center space-x-2">
          <button onClick={() => handleVote(news.id, "like")}>
            <FontAwesomeIcon icon={userVotes[news.id] === "like" ? faThumbsUpSolid : faThumbsUpRegular} />
          </button>
          <span>{news.likes}</span>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={() => handleVote(news.id, "dislike")}>
            <FontAwesomeIcon icon={userVotes[news.id] === "dislike" ? faThumbsDownSolid : faThumbsDownRegular} />
          </button>
          <span>{news.dislikes}</span>
        </div>
      </div>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{news.content}</p>

      {/* Hashtags */}
      <div className="flex flex-wrap gap-2">
        {news.hashtags.map((tag, idx) => (
          <Link
            key={idx}
            to={`/news/hashtag/${tag}`}
            className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm hover:bg-gray-300 transition"
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
          to={`/meqaleler/${item.id}`}
          className="flex items-center space-x-3 hover:bg-gray-100 rounded p-2 transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold text-gray-700 line-clamp-2">
              {item.title}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500">
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

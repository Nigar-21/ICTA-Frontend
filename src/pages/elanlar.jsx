import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoverImage from "../assets/ITPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as faThumbsUpRegular, faThumbsDown as faThumbsDownRegular } from "@fortawesome/free-regular-svg-icons";

export default function Elanlar() {
  const initialNewsList = [
    { id: 1, title: "Yeni IT qaydaları tətbiq edildi", date: "2025-10-05", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: CoverImage, views: 120, likes: 15, dislikes: 2 },
    { id: 2, title: "Sistem yeniləndi", date: "2025-10-03", content: "Sistemdə yeni funksiyalar əlavə edildi və performans artırıldı.", image: CoverImage, views: 85, likes: 10, dislikes: 1 },
    { id: 3, title: "İclas keçirildi", date: "2025-10-01", content: "Əsas mövzular, qərarlar və gələcək planlar iclasda müzakirə olundu.", image: CoverImage, views: 63, likes: 8, dislikes: 0 },
     { id: 4, title: "Yeni IT qaydaları tətbiq edildi", date: "2025-10-05", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: CoverImage, views: 120, likes: 15, dislikes: 2 },
    { id: 5, title: "Sistem yeniləndi", date: "2025-10-03", content: "Sistemdə yeni funksiyalar əlavə edildi və performans artırıldı.", image: CoverImage, views: 85, likes: 10, dislikes: 1 },
    { id: 6, title: "İclas keçirildi", date: "2025-10-01", content: "Əsas mövzular, qərarlar və gələcək planlar iclasda müzakirə olundu.", image: CoverImage, views: 63, likes: 8, dislikes: 0 },
  ];

  const [newsList, setNewsList] = useState(initialNewsList);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("userVotes")) || {};
    setUserVotes(storedVotes);
  }, []);

  const handleVote = (id, type) => {
    const currentVote = userVotes[id];

    const updatedNews = newsList.map(item => {
      if (item.id === id) {
        let newLikes = item.likes;
        let newDislikes = item.dislikes;

       if (currentVote === type) {
  if (type === "like" && newLikes > 0) newLikes -= 1;
  if (type === "dislike" && newDislikes > 0) newDislikes -= 1;
  return { ...item, likes: newLikes, dislikes: newDislikes };
}


       if (currentVote === "like" && newLikes > 0) newLikes -= 1;
if (currentVote === "dislike" && newDislikes > 0) newDislikes -= 1;


        if (type === "like") newLikes += 1;
        if (type === "dislike") newDislikes += 1;

        return { ...item, likes: newLikes, dislikes: newDislikes };
      }
      return item;
    });

    const updatedVotes = { ...userVotes };
    if (currentVote === type) delete updatedVotes[id];
    else updatedVotes[id] = type;

    setNewsList(updatedNews);
    setUserVotes(updatedVotes);
    localStorage.setItem("userVotes", JSON.stringify(updatedVotes));
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
        className="relative w-full h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${CoverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 text-sm text-gray-300 z-10">
          <Link to="/" className="hover:underline">Ana səhifə</Link>
          <span>→</span>
          <Link to="/news" className="hover:underline">Yeniliklər</Link>
          <span>→</span>
          <span className="text-white font-semibold">Elanlar</span>
        </div>
        <h1 className="relative z-10 text-white text-5xl font-bold text-center px-4">
          Elanlar
        </h1>
      </div>

      {/* Content Cards */}
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsList.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition flex flex-col overflow-hidden">
            <div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{formatDate(item.date)}</span>
                <span>{item.views} baxış</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">{item.title}</h3>
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
                <Link to={`/elanlar/${item.id}`} className="px-4 py-2 bg-[#1E3A8A] text-white rounded-full hover:bg-[#17275B] transition">
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

import React from "react";
import { Routes, Route } from "react-router-dom";

import UserDashboard from "./sections/UserDashboard";
import MyVideos from "./sections/MyVideos";
import MyQuizzes from "./sections/MyQuizzes";
import MyMeetings from "./sections/MyMeetings";
import MyPdf from "./sections/MyPdf";


export default function UserContent() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/videos" element={<MyVideos />} />
        <Route path="/quizzes" element={<MyQuizzes />} />
        <Route path="/meetings" element={<MyMeetings />} />
        <Route path="/pdf" element={<MyPdf />} />
       
      </Routes>
    </div>
  );
}

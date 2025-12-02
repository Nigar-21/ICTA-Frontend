import React from "react";

export default function UserDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 shadow rounded-lg">
          <h3 className="font-medium text-gray-700">My Videos</h3>
          <p className="text-gray-500 mt-2 text-sm">0 Videos</p>
        </div>

        <div className="bg-white p-5 shadow rounded-lg">
          <h3 className="font-medium text-gray-700">My Quizzes</h3>
          <p className="text-gray-500 mt-2 text-sm">0 Quizzes</p>
        </div>

        <div className="bg-white p-5 shadow rounded-lg">
          <h3 className="font-medium text-gray-700">My PDF Files</h3>
          <p className="text-gray-500 mt-2 text-sm">0 Files</p>
        </div>
      </div>
    </div>
  );
}

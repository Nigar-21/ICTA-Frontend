import React from "react";

export default function MyVideos() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">My Videos</h1>

      <div className="bg-white p-5 shadow rounded-lg">
        <p className="text-gray-600">You don't have any videos yet.</p>
      </div>
    </div>
  );
}

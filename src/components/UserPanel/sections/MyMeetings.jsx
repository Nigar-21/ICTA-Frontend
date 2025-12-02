import React from "react";

export default function MyMeetings() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">My Meetings</h1>

      <div className="bg-white p-5 shadow rounded-lg">
        <p className="text-gray-600">No meetings scheduled.</p>
      </div>
    </div>
  );
}

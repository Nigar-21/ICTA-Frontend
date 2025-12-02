import React from "react";

export default function MyQuizzes() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">My Quizzes</h1>

      <div className="bg-white p-5 shadow rounded-lg">
        <p className="text-gray-600">You haven't taken any quizzes yet.</p>
      </div>
    </div>
  );
}

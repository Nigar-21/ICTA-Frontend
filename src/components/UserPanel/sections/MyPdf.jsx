import React from "react";

export default function MyPdf() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">My PDF Files</h1>

      <div className="bg-white p-5 shadow rounded-lg">
        <p className="text-gray-600">You haven’t uploaded any PDF files yet.</p>
      </div>
    </div>
  );
}

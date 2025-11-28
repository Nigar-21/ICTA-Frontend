// src/components/ProfileEditModal.jsx
import React, { useState } from "react";

export default function ProfileEditModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Profili redaktə et</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-600">Tam ad</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Telefon</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Vəzifə</label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-600">Departament</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Ləğv et
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
          >
            Yadda saxla
          </button>
        </div>
      </div>
    </div>
  );
}

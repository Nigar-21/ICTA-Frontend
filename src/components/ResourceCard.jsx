// src/components/Shared/ResourceCard.jsx
import { Link } from "react-router-dom";

export default function ResourceCard({ title, description, icon, link }) {
  return (
    <Link
      to={link}
      className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div className="text-primary text-4xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

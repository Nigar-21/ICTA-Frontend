// src/pages/Instructions.jsx
import ResourceCard from "../components/ResourceCard";
import { FileText } from "lucide-react";
import Cover from "../assets/ITPhoto.png";
const pdfs = [
  {
    id: 1,
    title: "HTML Tam Dərs PDF",
    description: "Başlanğıcdan HTML öyrənmək üçün PDF.",
    link: "/pdf/1"
  },
  {
    id: 2,
    title: "CSS Guide (Advanced)",
    description: "Professional CSS qaydaları.",
    link: "/pdf/2"
  },
];

export default function Instructions() {
  return (
      <div className="bg-white min-h-screen">
              {/* Şöbə cover */}
              <div
                     className="relative w-full h-[400px] flex flex-col items-center justify-center"
                     style={{
                       backgroundImage: `url(${Cover})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                     }}
                   >
                     <div className="absolute inset-0 bg-black/40"></div>
                 
                     <h1 className="relative z-10 text-white text-5xl font-bold text-center px-4">
                    Təlimatlar
                     </h1>
                   </div>
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* <h1 className="text-3xl font-bold mb-8"> PDF Təlimatlar</h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs.map((item) => (
          <ResourceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={<FileText />}
            link={item.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

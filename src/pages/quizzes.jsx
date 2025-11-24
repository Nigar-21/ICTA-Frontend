// src/pages/Quizzes.jsx
import ResourceCard from "../components/ResourceCard";
import { HelpCircle } from "lucide-react";
import Cover from "../assets/ITPhoto.png";
const quizzes = [
  {
    id: 1,
    title: "HTML Quiz – Basic",
    description: "10 suallıq başlanğıc səviyyəsi.",
    link: "/quiz/1"
  },
  {
    id: 2,
    title: "JavaScript Quiz – ES6",
    description: "Orta səviyyə bilik yoxlaması.",
    link: "/quiz/2"
  },
];

export default function Quizzes() {
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
                    Quizlər
                     </h1>
                   </div>
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* <h1 className="text-3xl font-bold mb-8">Quiz-lər</h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((item) => (
          <ResourceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={<HelpCircle />}
            link={item.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

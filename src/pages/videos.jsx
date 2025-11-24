import ResourceCard from "../components/ResourceCard";
import { PlayCircle } from "lucide-react";
import Cover from "../assets/ITPhoto.png";
const videos = [
  {
    id: 1,
    title: "React Componentlərə giriş",
    description: "Başlanğıc üçün React strukturunun izahı.",
    link: "/videos/1"
  },
  {
    id: 2,
    title: "State və Props dərsi",
    description: "Dinamik UI necə yaradılır?",
    link: "/videos/2"
  },
   {
    id: 3,
    title: "React Componentlərə giriş",
    description: "Başlanğıc üçün React strukturunun izahı.",
    link: "/videos/1"
  },
  {
    id: 4,
    title: "State və Props dərsi",
    description: "Dinamik UI necə yaradılır?",
    link: "/videos/2"
  },
];

export default function Videos() {
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
                Video Təlimatlar
                 </h1>
               </div>
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* <h1 className="text-3xl font-bold mb-8">Video Təlimatlar</h1> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((item) => (
          <ResourceCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={<PlayCircle />}
            link={item.link}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

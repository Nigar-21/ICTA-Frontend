import { useState } from "react";
import { Search, FileText, Download, ChevronDown } from "lucide-react";
import Cover from "../assets/ITPhoto.png";

export default function Rules() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const categories = [
    "Hamısı",
    "Müraciət Qaydaları",
    "Daxili Qaydalar",
    "Etik Davranış",
    "İT Qaydaları",
  ];

  const rules = [
    {
      id: 1,
      title: "Müraciətlərin qəbulu və cavablandırılması qaydaları",
      category: "Müraciət Qaydaları",
      date: "12.03.2025",
      file: "/rules/muraciet-qaydalari.pdf",
      description:
        "Vətəndaş müraciətlərinin qəbulu, yönləndirilməsi, cavablandırılması və müddətlərin qorunması ilə bağlı bütün tələbləri özündə birləşdirir.",
    },
    {
      id: 2,
      title: "İşçilərin daxili davranış və intizam qaydaları",
      category: "Daxili Qaydalar",
      date: "05.02.2025",
      file: "/rules/daxili-intizam.pdf",
      description:
        "Bu sənəd əməkdaşların iş zamanı davranış normalarını, intizam tələblərini və məsuliyyətləri müəyyən edir.",
    },
    {
      id: 3,
      title: "Etik davranış kodeksi",
      category: "Etik Davranış",
      date: "01.01.2025",
      file: "/rules/etik-kodeks.pdf",
      description:
        "Şirkət daxilində əməkdaşların etik, peşəkar və nümunəvi davranış etməsi üçün əsas prinsipləri müəyyən edir.",
    },
    {
      id: 4,
      title: "İT avadanlıqlarından istifadə qaydaları",
      category: "İT Qaydaları",
      date: "22.02.2025",
      file: "/rules/it-istifade.pdf",
      description:
        "İş kompüterlərində təhlükəsizlik, şəbəkə istifadəsi, məlumatların qorunması və cihazlardan düzgün istifadə qaydaları.",
    },
  ];

  const filteredRules = rules.filter(
    (item) =>
      (selectedCategory === "Hamısı" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

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
                    Qaydalar
                     </h1>
                   </div>
    <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto px-6 py-12">

      {/* Sol Panel — Kateqoriyalar */}
      <div className="col-span-3 bg-white p-6 rounded-2xl shadow-md h-fit border border-gray-200">
        <h2 className="text-xl font-semibold mb-4"> Kateqoriyalar</h2>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition 
                ${
                  selectedCategory === cat
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Sağ — Qaydaların siyahısı */}
      <div className="col-span-9">

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Qaydalarda axtarış..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-300 
            focus:outline-none focus:border-primary"
          />
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {filteredRules.length === 0 && (
            <p className="text-gray-500 italic">Nəticə tapılmadı.</p>
          )}

          {filteredRules.map((rule) => (
            <div
              key={rule.id}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => setOpenItem(openItem === rule.id ? null : rule.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-gray-500">{rule.date} • {rule.category}</p>
                </div>

                <ChevronDown
                  size={22}
                  className={`transition ${openItem === rule.id ? "rotate-180" : ""}`}
                />
              </button>

              {openItem === rule.id && (
                <div className="mt-4 border-t pt-4">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {rule.description}
                  </p>

                  <a
                    href={rule.file}
                    download
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-800 transition w-fit"
                  >
                    <Download size={18} />
                    PDF Yüklə
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
</div>
    </div>
  );
}

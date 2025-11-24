import { useState } from "react";
import { Search, FileText, Download, ChevronDown } from "lucide-react";
import Cover from "../assets/ITPhoto.png";
export default function Policies() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const categories = [
    "Hamısı",
    "İnsan Resursları",
    "Təhlükəsizlik",
    "Məlumatların qorunması",
    "İT siyasətləri",
    "Maliyyə və Hesabatlıq",
  ];

  const documents = [
    {
      id: 1,
      title: "Məlumatların məxfiliyi və qorunması siyasəti",
      category: "Məlumatların qorunması",
      date: "12.01.2025",
      file: "/docs/mezfiliyyet.pdf",
      description:
        "Bu sənəd təşkilat daxilində şəxsi məlumatların necə qorunduğunu, saxlanıldığını və emal olunduğunu izah edir.",
    },
    {
      id: 2,
      title: "İnformasiya Texnologiyaları Təhlükəsizlik Siyasəti",
      category: "İT siyasətləri",
      date: "24.02.2025",
      file: "/docs/it-tehlukesizlik.pdf",
      description:
        "Siyasət informasiya sistemlərində təhlükəsizlik qaydalarını və istifadəçi məsuliyyətlərini müəyyən edir.",
    },
    {
      id: 3,
      title: "İnsan Resursları İş Prinsipləri",
      category: "İnsan Resursları",
      date: "10.03.2024",
      file: "/docs/hr-prinsipler.pdf",
      description:
        "Bu siyasət əməkdaşların iş qaydalarını, etik davranış normalarını və daxili prosedurları əhatə edir.",
    },
  ];

  const filteredDocs = documents.filter(
    (doc) =>
      (selectedCategory === "Hamısı" || doc.category === selectedCategory) &&
      doc.title.toLowerCase().includes(search.toLowerCase())
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
                    Siyasətlər
                     </h1>
                   </div>
    <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto px-6 py-12">

      {/* Sol Filter Paneli */}
      <div className="col-span-3 bg-white p-6 rounded-2xl shadow-md h-fit border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">📁 Kateqoriyalar</h2>
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

      {/* Sağ Siyasətlərin siyahısı */}
      <div className="col-span-9">

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Siyasətdə axtarış..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-300 
            focus:outline-none focus:border-primary"
          />
        </div>

        {/* Document Cards */}
        <div className="space-y-4">
          {filteredDocs.length === 0 && (
            <p className="text-gray-500 italic">Nəticə tapılmadı.</p>
          )}

          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => setOpenItem(openItem === doc.id ? null : doc.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500">{doc.date} • {doc.category}</p>
                </div>

                <ChevronDown
                  size={22}
                  className={`transition ${openItem === doc.id ? "rotate-180" : ""}`}
                />
              </button>

              {openItem === doc.id && (
                <div className="mt-4 border-t pt-4">
                  <p className="text-gray-600 leading-relaxed mb-4">{doc.description}</p>

                  <a
                    href={doc.file}
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

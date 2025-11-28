import { useState } from "react";
import { Search, Download, ChevronDown } from "lucide-react";
import Cover from "../assets/ITPhoto.png";

export default function ItRules() {
  const [search, setSearch] = useState("");
  const [openItem, setOpenItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");

  const categories = [
    "Hamısı",
    "Təhlükəsizlik",
    "Şəbəkə",
    "Parol siyasəti",
    "Avadanlıq istifadəsi",
    "Email siyasəti",
    "İcazələr və giriş",
    "Backup siyasəti",
  ];

  const rules = [
    {
      id: 1,
      title: "Kompüter və avadanlıqların təhlükəsiz istifadəsi qaydaları",
      category: "Avadanlıq istifadəsi",
      level: "Medium",
      date: "15.10.2025",
      file: "/docs/avadanliq-istifade.pdf",
      description:
        "İşçilərin kompüter, printer, server və digər avadanlıqlardan təhlükəsiz istifadə qaydaları, cihazlara müdaxilə və düzgün baxım prinsipləri.",
    },
    {
      id: 2,
      title: "Şirkət daxili Wi-Fi və şəbəkə istifadəsi qaydaları",
      category: "Şəbəkə",
      level: "High",
      date: "10.10.2025",
      file: "/docs/wifi-policy.pdf",
      description:
        "Wi-Fi şifrələnməsi, VPN istifadəsi, şəbəkə resurslarına çıxış icazələri və təhlükəsizlik səviyyələri haqqında qaydalar.",
    },
    {
      id: 3,
      title: "Parol siyasəti və giriş təhlükəsizliyi",
      category: "Parol siyasəti",
      level: "High",
      date: "02.09.2025",
      file: "/docs/password-policy.pdf",
      description:
        "Şirkət sistemlərinə giriş üçün minimal parol tələbləri, iki mərhələli doğrulama, parolun dəyişmə müddəti və təhlükəsizlik tədbirləri.",
    },
    {
      id: 4,
      title: "Email və korporativ mesajlaşma qaydaları",
      category: "Email siyasəti",
      level: "Medium",
      date: "22.08.2025",
      file: "/docs/email-policy.pdf",
      description:
        "Email istifadə qaydaları, phishing hücumlarından qorunma, daxili məlumatların email ilə göndərilməsi üçün tələblər.",
    },
    {
      id: 5,
      title: "Backup və məlumatların bərpası siyasəti",
      category: "Backup siyasəti",
      level: "High",
      date: "05.07.2025",
      file: "/docs/backup-policy.pdf",
      description:
        "Server və işçi kompüterlərində məlumatların müntəzəm backup olunması, itki zamanı bərpa prosesləri və səlahiyyətlər.",
    },
  ];

  const filtered = rules.filter(
    (rule) =>
      (selectedCategory === "Hamısı" || rule.category === selectedCategory) &&
      rule.title.toLowerCase().includes(search.toLowerCase())
  );

  const badgeColor = (level) => {
    switch (level) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Şöbə cover */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${Cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-3xl sm:text-5xl text-white font-bold text-center px-4">
          Prosedurlar
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Sol Panel */}
        <div className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200 h-fit">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4"> Kateqoriyalar</h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base transition
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

        {/* Sağ Panel */}
        <div className="lg:col-span-9">
          {/* Search */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute top-3 left-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Qaydalarda axtarış..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2.5 sm:py-3 pl-10 pr-4 rounded-xl border border-gray-300 focus:outline-none focus:border-primary text-sm sm:text-base"
            />
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {filtered.length === 0 && <p className="text-gray-500 italic">Nəticə tapılmadı.</p>}

            {filtered.map((rule) => (
              <div
                key={rule.id}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-200"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenItem(openItem === rule.id ? null : rule.id)}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">{rule.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {rule.category} • {rule.date}
                    </p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition ${openItem === rule.id ? "rotate-180" : ""}`}
                  />
                </button>

                {openItem === rule.id && (
                  <div className="pt-3 sm:pt-4 border-t mt-3 sm:mt-4">
                    <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">{rule.description}</p>

                    <span
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${badgeColor(rule.level)}`}
                    >
                      Təhlükəsizlik səviyyəsi: {rule.level}
                    </span>

                    <div className="mt-3 sm:mt-4">
                      <a
                        href={rule.file}
                        download
                        className="flex items-center gap-2 bg-primary text-white px-3 sm:px-4 py-2 rounded-xl hover:bg-blue-800 transition w-fit text-sm sm:text-base"
                      >
                        <Download size={16} />
                        PDF Yüklə
                      </a>
                    </div>
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

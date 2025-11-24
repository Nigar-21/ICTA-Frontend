import React, { useState } from "react";

export default function Elaqe() {
const employees = [
  { name: "Nail Mərdanov", number: "100", status: "Aktiv", department: "İdarə heyəti", position: "Sədr" },
  { name: "Ceyhun Hüseynzadə", number: "102", status: "Aktiv", department: "İdarə heyəti", position: "Sədr müavini" },
  { name: "Tural Zərbəliyev", number: "200", status: "Aktiv", department: "Tənzimləmə Departamenti", position: "Departament Direktoru" },

  { name: "Murad Quliyev", number: "201", status: "Aktiv", department: "Elektron kommunikasiya şöbəsi", position: "Şöbə müdiri" },
  { name: "Aydın Əliyev", number: "202", status: "Aktiv", department: "Elektron kommunikasiya şöbəsi", position: "Baş mütəxəssis" },
  { name: "Aydın Əliyev", number: "203", status: "Aktiv", department: "Elektron kommunikasiya şöbəsi", position: "Baş mütəxəssis" },
  { name: "Röya Quliyeva", number: "510", status: "Aktiv", department: "Elektron kommunikasiya şöbəsi", position: "Mütəxəssis" },

  { name: "Rahib Ağababayev", number: "213", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Baş mütəxəssis" },
  { name: "Kamran Kərimli", number: "Naməlum", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "İmran Ağayev", number: "214", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Vüsal Rəhimli", number: "215", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Səkinə Hüseynova", number: "216", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Lalə Məhərrəmova", number: "217", status: "Deaktiv", department: "Texniki tənzimləmə şöbəsi", position: "Mütəxəssis" },
  { name: "Aytac Ağayeva", number: "218", status: "Aktiv", department: "Texniki tənzimləmə şöbəsi", position: "Mütəxəssis" },

  { name: "Vüqar Səmədov", number: "221", status: "Aktiv", department: "Poçt rabitəsi şöbəsi", position: "Şöbə müdiri" },
  { name: "Şəhla Nəsibova", number: "223", status: "Aktiv", department: "Poçt rabitəsi şöbəsi", position: "Aparıcı mütəxəssis" },

  { name: "Səbinə Həmidova", number: "232", status: "Aktiv", department: "Şəbəkə təhlükəsizliyi və dayanıqlığı şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Taleh Nəsirov", number: "233", status: "Aktiv", department: "Şəbəkə təhlükəsizliyi və dayanıqlığı şöbəsi", position: "Mütəxəssis" },

  { name: "Zaur Zeynalov", number: "241", status: "Aktiv", department: "Strateji araşdırma və inkişaf şöbəsi", position: "Şöbə müdiri" },
  { name: "Kənan Babayev", number: "243", status: "Aktiv", department: "Strateji araşdırma və inkişaf şöbəsi", position: "Aparıcı mütəxəssis" },

  { name: "Vüsal Süleymanov", number: "300", status: "Aktiv", department: "Radiospektr idarəçiliyi departamenti", position: "Departament direktoru" },
  { name: "Elvin Muradzadə", number: "301", status: "Aktiv", department: "Radiospektr idarəçiliyi departamenti", position: "Baş mütəxəssis" },
  { name: "Salman Hüseynov", number: "303", status: "Aktiv", department: "Radiospektr idarəçiliyi departamenti", position: "Aparıcı mütəxəssis" },

  { name: "Nail İsmayilov", number: "401", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Şöbə müdiri" },
  { name: "Samir Həsənov", number: "402", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Baş mütəxəssis" },
  { name: "Nigar Yusifova", number: "403", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Baş mütəxəssis" },
  { name: "Xəyalə Məcidova", number: "405", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Nəriman Atazadə", number: "406", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Fariz Qurbanov", number: "407", status: "Aktiv", department: "Xidmət bazarlarına nəzarət şöbəsi", position: "Mütəxəssis" },

  { name: "Anar Allahverdiyev", number: "412", status: "Aktiv", department: "İstehlakçı hüquqları şöbəsi", position: "Aparıcı mütəxəssis - hüquqşünas" },
  { name: "Nərmin Xanpəriyeva", number: "415", status: "Deaktiv", department: "İstehlakçı hüquqları şöbəsi", position: "Mütəxəssis" },
  { name: "Nailə Maqsudova", number: "416", status: "Aktiv", department: "İstehlakçı hüquqları şöbəsi", position: "Mütəxəssis" },

  { name: "İlqar İsmayılov", number: "421", status: "Aktiv", department: "İqtisadi təhlil şöbəsi", position: "Şöbə müdiri" },
  { name: "Rəşad Həsanov", number: "422", status: "Aktiv", department: "İqtisadi təhlil şöbəsi", position: "Baş mütəxəssis" },
  { name: "Nicat Məmmədov", number: "426", status: "Aktiv", department: "İqtisadi təhlil şöbəsi", position: "Mütəxəssis" },

  { name: "Samir Orucov", number: "431", status: "Aktiv", department: "Statistika şöbəsi", position: "Şöbə müdiri" },

  { name: "İslam Bağırzadə", number: "500", status: "Aktiv", department: "İnformasiya texnologiyaları departamenti", position: "Departament direktoru" },

  { name: "Emin Şıxəliyev", number: "502", status: "Aktiv", department: "Rəqəmsal təminat və inkişaf şöbəsi", position: "Baş proqramçı" },
  { name: "Eşqin Cəfərli", number: "503", status: "Aktiv", department: "Rəqəmsal təminat və inkişaf şöbəsi", position: "Aparıcı proqramçı" },
  { name: "Məhəmməd Həzərxanlı", number: "504", status: "Aktiv", department: "Rəqəmsal təminat və inkişaf şöbəsi", position: "Aparıcı proqramçı" },
  { name: "Cavid Şıxıyev", number: "505", status: "Aktiv", department: "Rəqəmsal təminat və inkişaf şöbəsi", position: "Aparıcı proqramçı" },
  { name: "Toğrul Quluzadə", number: "506", status: "Aktiv", department: "Rəqəmsal təminat və inkişaf şöbəsi", position: "Proqramçı" },

  { name: "Vüsal Əkbərli", number: "511", status: "Aktiv", department: "Şəbəkə inzibatçılığı və texniki dəstək şöbəsi", position: "Şöbə müdiri" },
  { name: "Ehtiram Mustafayev", number: "513", status: "Aktiv", department: "Şəbəkə inzibatçılığı və texniki dəstək şöbəsi", position: "Şəbəkə inzibatçısı" },
  { name: "Cavid Həsənli", number: "515", status: "Aktiv", department: "Şəbəkə inzibatçılığı və texniki dəstək şöbəsi", position: "IT üzrə mütəxəssis" },

  { name: "Şahmar Bayramlı", number: "522", status: "Aktiv", department: "İnformasiya sistemləri və ehtiyyatlarının idarə edilməsi şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Kənan Ələkbərli", number: "523", status: "Aktiv", department: "İnformasiya sistemləri və ehtiyyatlarının idarə edilməsi şöbəsi", position: "Mütəxəssis" },

  { name: "Cavid İsmayıl", number: "531", status: "Aktiv", department: "Analitik təhlil və məlumatların emalı şöbəsi", position: "Şöbə müdiri" },
  { name: "Elsevər Abbasov", number: "532", status: "Aktiv", department: "Analitik təhlil və məlumatların emalı şöbəsi", position: "Baş analitik" },
  { name: "Ayaz Əliyev", number: "533", status: "Aktiv", department: "Analitik təhlil və məlumatların emalı şöbəsi", position: "Aparıcı analitik" },

  { name: "Oktay Məhərrəmov", number: "600", status: "Aktiv", department: "Hüquq və Sənədlərlə iş Departamenti", position: "Departament Direktoru" },
  { name: "Aysel Qarayeva", number: "601", status: "Aktiv", department: "Hüquq Şöbəsi", position: "Şöbə müdiri" },
  { name: "Günel Əhmədli", number: "605", status: "Aktiv", department: "Hüquq Şöbəsi", position: "Aparıcı hüquqşünas" },
  { name: "Emil Əbilov", number: "607", status: "Aktiv", department: "Hüquq Şöbəsi", position: "Hüquqşünas" },
  { name: "Nəzrin Əliyeva", number: "608", status: "Aktiv", department: "Hüquq Şöbəsi", position: "Hüquqşünas" },

  { name: "Elman Qədirov", number: "611", status: "Aktiv", department: "Sənədlərlə iş şöbəsi", position: "Şöbə müdiri" },
  { name: "Elvir Əliyev", number: "613", status: "Deaktiv", department: "Sənədlərlə iş şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Günel Əlizadə", number: "614", status: "Aktiv", department: "Sənədlərlə iş şöbəsi", position: "Aparıcı mütəxəssis" },

  { name: "Ravil İsgəndərov", number: "701", status: "Aktiv", department: "Beynəlxalq əməkdaşlıq şöbəsi", position: "Şöbə müdiri" },
  { name: "Xumar Kərimova", number: "701", status: "Aktiv", department: "Layihələrin idarə edilməsi şöbəsi", position: "Şöbə müdiri" },
  { name: "Elgün Məhərrəmli", number: "712", status: "Deaktiv", department: "Layihələrin idarə edilməsi şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Güllər Məhərrəmova", number: "713", status: "Aktiv", department: "Layihələrin idarə edilməsi şöbəsi", position: "Mütəxəssis" },

  { name: "Cahangir Atakişiyev", number: "721", status: "Deaktiv", department: "İctimaiyyətlə əlaqələr şöbəsi", position: "Şöbə müdiri" },
  { name: "Tural İbadlı", number: "722", status: "Aktiv", department: "İctimaiyyətlə əlaqələr şöbəsi", position: "Baş mütəxəssis" },
  { name: "Nərgiz Əzizova", number: "723", status: "Aktiv", department: "İctimaiyyətlə əlaqələr şöbəsi", position: "Mütəxəssis" },

  { name: "Güllər Qədimova", number: "731", status: "Aktiv", department: "İnsan resursları şöbəsi", position: "Şöbə müdiri" },
  { name: "Sarvan Cəbrayılzadə", number: "411", status: "Aktiv", department: "İnsan resursları şöbəsi", position: "Baş mütəxəssis" },
  { name: "Solmaz Məmmədova", number: "734", status: "Aktiv", department: "İnsan resursları şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Fəridə Bayramova", number: "735", status: "Aktiv", department: "İnsan resursları şöbəsi", position: "Aparıcı mütəxəssis" },

  { name: "Emin Bayramzadə", number: "741", status: "Aktiv", department: "Maliyyə şöbəsi", position: "Şöbə müdiri - Baş mühasib" },
  { name: "Günel Məmmədova", number: "743", status: "Aktiv", department: "Maliyyə şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Ülvi Əsgərov", number: "744", status: "Aktiv", department: "Maliyyə şöbəsi", position: "Mütəxəssis" },

  { name: "Asim Məmmədov", number: "752", status: "Aktiv", department: "Satınalma və təsərrüfat şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Elman Ənvərli", number: "751", status: "Aktiv", department: "Satınalma və təsərrüfat şöbəsi", position: "Aparıcı mütəxəssis" },
  { name: "Solmaz Rüstəmova", number: "756", status: "Aktiv", department: "Satınalma və təsərrüfat şöbəsi", position: "Xadimə" },
];

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("Hamısı");
  const [position, setPosition] = useState("Hamısı");
  const [status, setStatus] = useState("Hamısı");

  // 🔹 Dropdown-lar üçün unikal dəyərlər
  const departments = ["Hamısı", ...new Set(employees.map(e => e.department))];
  const positions = ["Hamısı", ...new Set(employees.map(e => e.position))];
  const statuses = ["Hamısı", ...new Set(employees.map(e => e.status))];

  // 🔹 Filtrləmə və axtarış
  const filtered = employees
    .filter(emp => {
      const matchesSearch =
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.number.toLowerCase().includes(search.toLowerCase()) ||
        (emp.status && emp.status.toLowerCase().includes(search.toLowerCase())) ||
        emp.department.toLowerCase().includes(search.toLowerCase()) ||
        emp.position.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment = department === "Hamısı" || emp.department === department;
      const matchesPosition = position === "Hamısı" || emp.position === position;
      const matchesStatus = status === "Hamısı" || emp.status === status;

      return matchesSearch && matchesDepartment && matchesPosition && matchesStatus;
    })
    // 🔹 Adlara görə alfabetik sırala
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-700 mb-10">ŞƏBƏKƏ İNZİBATÇILIĞI VƏ TEXNİKİ DƏSTƏK ŞÖBƏSİ</h1>

      {/* 🔍 Axtarış və filterlər */}
      <div className="flex gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Axtarış..."
          className="border px-4 py-2 rounded-lg w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border px-4 py-2 rounded-lg" value={department} onChange={(e) => setDepartment(e.target.value)}>
          {departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
        </select>

        <select className="border px-4 py-2 rounded-lg" value={position} onChange={(e) => setPosition(e.target.value)}>
          {positions.map((p, i) => <option key={i} value={p}>{p}</option>)}
        </select>

        <select className="border px-4 py-2 rounded-lg" value={status} onChange={(e) => setStatus(e.target.value)}>
          {statuses.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
      </div>

      {/* 🔹 Dinamik cədvəl */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-950 text-white">
            <th className="p-3 border">Ad Soyad</th>
            <th className="p-3 border">Telefon</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Şöbə</th>
            <th className="p-3 border">Vəzifə</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length > 0 ? (
            filtered.map((emp, idx) => (
              <tr key={idx} className="text-center hover:bg-gray-100">
                <td className="p-3 border">{emp.name}</td>
                <td className="p-3 border">{emp.number || "-"}</td>
                <td className="p-3 border">{emp.status || "-"}</td>
                <td className="p-3 border">{emp.department || "-"}</td>
                <td className="p-3 border">{emp.position || "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-4 text-center border" colSpan={5}>
                Heç bir nəticə tapılmadı
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/Main';
import Home from './pages/home/main' 
import News from "./pages/news";
import Xeberler from "./pages/xeberler";
import Elanlar from "./pages/elanlar";
import Məqalələr from "./pages/meqaleler";
import XeberDetails from "./pages/xeberDetails";
import ElanDetails from "./pages/elanDetails";
import MəqaləDetails from "./pages/meqaleDetails";
import Haqqimizda from "./pages/about";
import FAQ from "./pages/faq";
import Kalendar from "./pages/calendar";

function App() {
  return (
   <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/news" element={<News />} />
        <Route path="/xeberler" element={<Xeberler />} />
         <Route path="/xeberler/:id" element={<XeberDetails />} />
         <Route path="/elanlar" element={<Elanlar />} />
          <Route path="/elanlar/:id" element={<ElanDetails />} />
           <Route path="/meqaleler" element={<Məqalələr />} />
            <Route path="/meqaleler/:id" element={<MəqaləDetails />} />
          <Route path="/about" element={<Haqqimizda />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Kalendar />} />
      </Routes>
   </MainLayout>
  );
}

export default App;

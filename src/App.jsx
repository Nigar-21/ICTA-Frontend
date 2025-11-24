import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/Main';
import Home from './pages/home/main';
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
import Elaqe from "./pages/contact";
import Videos from "./pages/videos";
import Instructions from "./pages/instructions";
import Quizzes from "./pages/quizzes";
import Policies from "./pages/policies";
import ItRules from './pages/itRules';
import Auth from './pages/auth';
import Rules from './pages/rules';
import Profile from './pages/profile';
function App() {
  return (
    <Routes>
      {/* Auth səhifəsi - layout olmadan */}
      <Route path="/auth" element={<Auth />} />

      {/* Digər səhifələr - layout ilə */}
      <Route path="/*" element={
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
            <Route path="/contact" element={<Elaqe />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/itrules" element={<ItRules />} />
            
            <Route path="/rules" element={<Rules />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </MainLayout>
      }/>
    </Routes>
  );
}

export default App;

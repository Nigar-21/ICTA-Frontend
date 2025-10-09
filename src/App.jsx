import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/Main';
import Home from './pages/home/main' 

function App() {
  return (
   <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
   </MainLayout>
  );
}

export default App;

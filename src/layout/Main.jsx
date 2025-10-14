import React from 'react';
import Header from '../components/Header';
import '../index.css'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
 <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
 <Footer />
 </div>
    </>
  );
};

export default MainLayout;

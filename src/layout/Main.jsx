import React from 'react';
import Header from '../components/Header';
import '../index.css'


const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
       <main>{children}</main>
 
    </>
  );
};

export default MainLayout;

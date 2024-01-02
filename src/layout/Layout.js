import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

export default function Layout() {
  return (
    <div className='space-y-5'>
      <Header />
      <Outlet />
      <Footer />
      {/* outlet: route con cua route cha (Home, DetailPage) */}
    </div>
  );
}

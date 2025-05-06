
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

const Layout = () => {
  // Sample points data - in a real app this would come from an API
  const points = 1200000;
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar points={points} />
      <TopNav points={points} />
      
      <main className="md:ml-64 pt-4 px-4 md:px-8 md:pt-8">
        <Outlet />
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Layout;

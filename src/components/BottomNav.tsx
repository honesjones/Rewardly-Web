
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gift, Compass, FileBarChart, Video, Award, Share2 } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2 z-10">
      <NavItem to="/offers" icon={<Gift />} text="Offers" active={isActive('/offers')} />
      <NavItem to="/explore" icon={<Compass />} text="Explore" active={isActive('/explore')} />
      <NavItem to="/surveys" icon={<FileBarChart />} text="Surveys" active={isActive('/surveys')} />
      <NavItem to="/videos" icon={<Video />} text="Videos" active={isActive('/videos')} />
      <NavItem to="/redeem" icon={<Award />} text="Redeem" active={isActive('/redeem')} />
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const NavItem = ({ to, icon, text, active }: NavItemProps) => {
  return (
    <Link to={to} className="flex flex-col items-center justify-center px-2">
      <div className={`p-1 ${active ? 'text-rewardly-primary' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`text-xs ${active ? 'text-rewardly-primary font-medium' : 'text-gray-500'}`}>
        {text}
      </span>
    </Link>
  );
};

export default BottomNav;

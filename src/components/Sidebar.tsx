
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Gift, Compass, FileBarChart, Video, Share2, Award, 
} from 'lucide-react';

const Sidebar = ({ points = 0 }: { points?: number }) => {
  return (
    <div className="hidden md:flex flex-col h-screen bg-rewardly-primary text-white w-64 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white">
          <span className="flex items-center gap-2">
            <Award className="h-8 w-8" />
            Rewardly
          </span>
        </h1>
      </div>
      
      <div className="mt-2 mx-4 bg-rewardly-secondary rounded-lg p-4">
        <div className="text-sm opacity-80">Points</div>
        <div className="text-2xl font-bold">{points.toLocaleString()}</div>
      </div>
      
      <nav className="flex-1 mt-6">
        <SidebarLink to="/offers" icon={<Gift />} text="Offers" active />
        <SidebarLink to="/explore" icon={<Compass />} text="Explore" />
        <SidebarLink to="/surveys" icon={<FileBarChart />} text="Surveys" />
        <SidebarLink to="/videos" icon={<Video />} text="Videos" />
        <SidebarLink to="/invite" icon={<Share2 />} text="Invite" />
        <SidebarLink to="/redeem" icon={<Award />} text="Redeem" />
      </nav>
      
      <div className="p-4 mt-auto">
        <div className="flex items-center gap-3">
          <div className="bg-white text-rewardly-primary rounded-full h-10 w-10 flex items-center justify-center font-bold">
            S
          </div>
          <div>
            <div className="font-medium">Sandro Greec</div>
            <div className="text-sm opacity-80">Your Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarLink = ({ to, icon, text, active }: SidebarLinkProps) => {
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-4 py-3 text-lg ${
        active 
        ? "bg-white bg-opacity-20 font-medium" 
        : "hover:bg-white hover:bg-opacity-10"
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Sidebar;

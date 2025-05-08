
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Activity, Award, Settings, HelpCircle, LogOut } from 'lucide-react';

const UserPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 p-4 mt-auto w-full hover:bg-rewardly-secondary transition-colors">
          <div className="bg-white text-rewardly-primary rounded-full h-10 w-10 flex items-center justify-center font-bold">
            S
          </div>
          <div>
            <div className="font-medium">Sandro Greec</div>
            <div className="text-sm opacity-80">Your Account</div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start" sideOffset={0}>
        <div className="py-2">
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-rewardly-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                S
              </div>
              <div>
                <div className="font-medium">Sandro Greec</div>
                <div className="text-sm text-gray-500">sandro.greec@gmail.com</div>
              </div>
            </div>
          </div>
          
          <div className="py-1">
            <MenuItem icon={<Activity className="w-5 h-5" />} label="Activity" />
            <MenuItem icon={<Award className="w-5 h-5" />} label="Rewards" />
            <MenuItem icon={<Settings className="w-5 h-5" />} label="Settings" />
          </div>
          
          <div className="py-1 border-t border-gray-100">
            <MenuItem 
              icon={<HelpCircle className="w-5 h-5" />} 
              label="Get Help"
              subLabel="Go to Help Center →"
            />
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <div className="mb-2 font-medium">Refer & Earn</div>
            <p className="text-sm text-gray-500 mb-3">
              Share your referral link with friends to earn <span className="font-semibold">10%</span> of their earnings for life.
            </p>
            <div className="flex">
              <input 
                readOnly
                type="text" 
                value="earnably.com/join/312" 
                className="flex-1 px-3 py-2 border border-r-0 border-gray-200 text-sm rounded-l-md"
              />
              <button className="bg-rewardly-primary text-white px-4 py-2 text-sm font-medium rounded-r-md">
                Copy
              </button>
            </div>
          </div>
          
          <div className="py-1 border-t border-gray-100">
            <MenuItem 
              icon={<LogOut className="w-5 h-5" />} 
              label="Sign Out"
              subLabel="sandro.greec@gmail.com"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const MenuItem = ({ icon, label, subLabel }) => {
  return (
    <button className="w-full px-4 py-2 flex items-center gap-3 text-left hover:bg-gray-50">
      <div className="text-gray-600">{icon}</div>
      <div>
        <div>{label}</div>
        {subLabel && <div className="text-xs text-gray-500">{subLabel}</div>}
      </div>
    </button>
  );
};

export default UserPopover;

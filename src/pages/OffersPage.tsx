
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Monitor, Smartphone, Laptop } from 'lucide-react';
import OfferCard from '@/components/OfferCard';

const OFFERS = [
  {
    id: 1,
    title: 'Magnet Miner',
    description: 'Dig in the deepest mine possible and reach for the treasures hidden below!',
    image: 'https://placehold.co/400x200/9b87f5/ffffff?text=Magnet+Miner',
    points: 2600000,
    platform: 'ios'
  },
  {
    id: 2,
    title: 'Magnet Miner',
    description: 'Dig in the deepest mine possible and reach for the treasures hidden below!',
    image: 'https://placehold.co/400x200/9b87f5/ffffff?text=Magnet+Miner',
    points: 3800000,
    platform: 'android'
  },
  {
    id: 3,
    title: 'Treehouse Fishing',
    description: 'Ever wondered what\'s hiding up in the trees? Climb into your treehouse and fish for surprises!',
    image: 'https://placehold.co/400x200/7e69ab/ffffff?text=Treehouse+Fishing',
    points: 4500000,
    platform: 'ios'
  },
  {
    id: 4,
    title: 'Magnet Miner Winter Edition',
    description: 'Dig in the deepest mine possible and reach for the treasures hidden below the snow!',
    image: 'https://placehold.co/400x200/9b87f5/ffffff?text=Magnet+Miner+Winter',
    points: 3200000,
    platform: 'android'
  },
  {
    id: 5,
    title: 'Wishing Well',
    description: 'UPGRADE Your Bucket\'s Capacity and Lengthen Your Wishes!',
    image: 'https://placehold.co/400x200/d6bcfa/ffffff?text=Wishing+Well',
    points: 3500000,
    platform: 'web'
  },
  {
    id: 6,
    title: 'Forest Cleaner',
    description: 'Aid a heroic bin on an eco-mission to purify woods! Tackle trash and restore nature.',
    image: 'https://placehold.co/400x200/7e69ab/ffffff?text=Forest+Cleaner',
    points: 2500000,
    platform: 'ios'
  },
];

type Platform = 'all' | 'web' | 'ios' | 'android';

const OffersPage = () => {
  const [platform, setPlatform] = useState<Platform>('all');
  
  const filteredOffers = platform === 'all' 
    ? OFFERS 
    : OFFERS.filter(offer => offer.platform === platform);
  
  return (
    <div className="pb-20 md:pb-0">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Offers</h1>
        <p className="text-gray-600 mt-1">Earn points by completing offers and tasks.</p>
      </div>
      
      <div className="mb-6">
        <Tabs defaultValue="all" onValueChange={(value) => setPlatform(value as Platform)}>
          <TabsList className="grid grid-cols-4 w-full max-w-md bg-rewardly-light">
            <TabsTrigger value="all" className="data-[state=active]:bg-white">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-5 h-5">
                  <span className="text-lg">#</span>
                </span>
                <span>All</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="web" className="data-[state=active]:bg-white">
              <div className="flex items-center gap-2">
                <Laptop size={18} />
                <span>Web</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="ios" className="data-[state=active]:bg-white">
              <div className="flex items-center gap-2">
                <Smartphone size={18} />
                <span>iOS</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="android" className="data-[state=active]:bg-white">
              <div className="flex items-center gap-2">
                <Monitor size={18} />
                <span>Android</span>
              </div>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            id={offer.id}
            title={offer.title}
            description={offer.description}
            image={offer.image}
            points={offer.points}
            platform={offer.platform}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersPage;

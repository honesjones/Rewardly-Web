
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import OfferDialog from './OfferDialog';

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  points: number;
  platform?: string;
  id: number;
}

const OfferCard = ({ id, title, description, image, points, platform }: OfferCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={handleCardClick}
      >
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-40 object-cover"
          />
          {platform && (
            <Badge 
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white"
            >
              {platform}
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        </div>
        <div className="px-4 py-3 bg-rewardly-light border-t border-gray-100">
          <button className="w-full bg-rewardly-primary hover:bg-rewardly-secondary text-white py-2 rounded-md font-medium transition-colors">
            +{points.toLocaleString()} Points
          </button>
        </div>
      </div>

      <OfferDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        offer={{
          id,
          title,
          description,
          image,
          points,
          platform,
          provider: "Torox", // This would come from your data in a real app
        }}
      />
    </>
  );
};

export default OfferCard;

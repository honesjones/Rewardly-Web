
import React from 'react';
import { Badge } from '@/components/ui/badge';

const OfferCard = ({ title, description, image, points, platform }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
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
  );
};

export default OfferCard;

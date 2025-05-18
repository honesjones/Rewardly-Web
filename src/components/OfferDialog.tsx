
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface OfferDialogProps {
  isOpen: boolean;
  onClose: () => void;
  offer: {
    id: number;
    title: string;
    description: string;
    image: string;
    points: number;
    platform?: string;
    provider?: string;
    requirements?: string;
  };
}

const OfferDialog = ({ isOpen, onClose, offer }: OfferDialogProps) => {
  const handleStartOffer = () => {
    // In a real app, this would initiate the offer
    console.log('Starting offer:', offer.title);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <DialogTitle>{offer.title}</DialogTitle>
              {offer.platform && (
                <Badge variant="outline" className="mt-1">
                  {offer.platform}
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{offer.description}</p>
          
          <div className="bg-gray-50 rounded-md p-4">
            <h3 className="text-sm font-medium mb-2">Requirements</h3>
            <p className="text-xs text-gray-500">
              {offer.requirements || "This offer rewards within 24 hours. New users only."}
            </p>
            
            {offer.provider && (
              <div className="mt-3 text-xs text-gray-400 flex items-center">
                Provided by <span className="font-medium ml-1">{offer.provider}</span>
              </div>
            )}
          </div>
          
          <div className="bg-rewardly-light rounded-md p-3 flex items-center justify-between">
            <div className="font-medium">+{offer.points.toLocaleString()} Points</div>
          </div>
          
          <Button 
            onClick={handleStartOffer} 
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            <Play className="mr-2 h-4 w-4" /> Start Offer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OfferDialog;

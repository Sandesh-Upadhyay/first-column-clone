
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type DeleteAccountDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeleteAccountDialog: React.FC<DeleteAccountDialogProps> = ({ open, onOpenChange }) => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const reasons = [
    'Missing features I need',
    'Too expensive / Cost concerns',
    'Switching to another platform',
    'Not useful for my business',
    'Other reason'
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-6 bg-white sm:max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium text-gray-800">We're sorry to see you go!</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={() => onOpenChange(false)}
          >
            <X size={20} />
          </Button>
        </div>
        
        <p className="text-gray-500 mb-6">
          Before we proceed with your account deletion request, 
          please let us know why you're leaving. Your feedback 
          helps us improve!
        </p>
        
        <div className="space-y-3 mb-6">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center">
              <input
                type="radio"
                id={reason}
                name="reason"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
              />
              <label htmlFor={reason} className="ml-2 text-sm text-gray-700">
                {reason}
              </label>
            </div>
          ))}
        </div>
        
        <textarea
          placeholder="Anything else you'd like to share? (Optional)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6 h-24 resize-none"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        
        <Button 
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
        >
          Confirm
        </Button>
        
        <div className="mt-4 text-center">
          <Button 
            variant="ghost"
            className="text-gray-600"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountDialog;

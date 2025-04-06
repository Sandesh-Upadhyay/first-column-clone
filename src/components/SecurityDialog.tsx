
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Info, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import VerifyPasswordDialog from './VerifyPasswordDialog';
import DeleteAccountDialog from './DeleteAccountDialog';

type SecurityDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SecurityDialog: React.FC<SecurityDialogProps> = ({ open, onOpenChange }) => {
  const [showVerifyDialog, setShowVerifyDialog] = useState(false);
  const [showDeleteAccountDialog, setShowDeleteAccountDialog] = useState(false);

  const handleRequestDelete = () => {
    onOpenChange(false);
    setShowVerifyDialog(true);
  };

  const handleVerifySuccess = () => {
    setShowVerifyDialog(false);
    setShowDeleteAccountDialog(true);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="p-0 bg-white sm:max-w-md w-full">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-medium text-gray-800">Security</DialogTitle>
              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => onOpenChange(false)}>
                <X size={20} />
              </Button>
            </div>
          </DialogHeader>
          <div className="px-6 py-4">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-medium text-gray-700">Password</h3>
                <Button variant="outline" className="text-blue-600 hover:text-blue-700 border-blue-600 hover:border-blue-700 hover:bg-blue-50">
                  Change
                </Button>
              </div>
              <p className="text-sm text-gray-500">Last changed: 03 Mar, 2025 [02:00pm]</p>
            </div>
            
            <div className="border-b py-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-medium text-gray-700">Two factor verification</h3>
                <Switch />
              </div>
              <p className="text-sm text-gray-500">Turned on on: 03 Mar, 2025 [02:00pm]</p>
            </div>
            
            <div className="py-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium text-gray-700 mr-2">Request to delete account</h3>
                  <Info size={18} className="text-blue-500" />
                </div>
                <Button 
                  variant="outline" 
                  className="text-white bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
                  onClick={handleRequestDelete}
                >
                  Request delete
                </Button>
              </div>
              <div className="bg-gray-200 p-2 rounded-md mt-2">
                <p className="text-sm text-gray-700">A request to 'update email' will be send to Super Admin</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <VerifyPasswordDialog 
        open={showVerifyDialog} 
        onOpenChange={setShowVerifyDialog}
        onSuccess={handleVerifySuccess}
      />

      <DeleteAccountDialog 
        open={showDeleteAccountDialog} 
        onOpenChange={setShowDeleteAccountDialog}
      />
    </>
  );
};

export default SecurityDialog;

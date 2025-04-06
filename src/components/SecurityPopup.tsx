
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  FileWarning, 
  Shield, 
  ShieldCheck, 
  Info 
} from 'lucide-react';
import { Badge } from './ui/badge';

type SecurityPopupProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const SecurityPopup: React.FC<SecurityPopupProps> = ({ 
  open, 
  onOpenChange 
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 border-status-red text-status-red hover:bg-status-red/10">
          <AlertTriangle size={16} />
          <span>Security</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-md w-full shadow-lg bg-white rounded-md">
        <div className="bg-status-red p-4 text-white rounded-t-md">
          <div className="flex items-center gap-2">
            <Shield size={18} />
            <h3 className="font-semibold">Security Alert</h3>
          </div>
          <p className="text-sm mt-1">Multiple vulnerabilities detected</p>
        </div>
        
        <div className="p-4 bg-white rounded-b-md">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FileWarning size={16} className="text-status-red mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">Critical Vulnerability</h4>
                <p className="text-xs text-slate-500 mt-1">
                  SSL certificate expired 3 days ago
                </p>
                <div className="mt-2">
                  <Badge className="bg-status-red text-white text-xs">Critical</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <FileWarning size={16} className="text-status-yellow mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">Warning</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Outdated authentication protocol in use
                </p>
                <div className="mt-2">
                  <Badge className="bg-status-yellow text-slate-800 text-xs">Medium</Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Info size={16} className="text-status-blue mt-0.5" />
              <div>
                <h4 className="text-sm font-medium">Information</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Security audit scheduled for next week
                </p>
                <div className="mt-2">
                  <Badge className="bg-slate-200 text-slate-800 text-xs">Info</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t">
            <Button className="w-full" size="sm">
              <ShieldCheck size={16} className="mr-1" />
              View Security Center
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityPopup;

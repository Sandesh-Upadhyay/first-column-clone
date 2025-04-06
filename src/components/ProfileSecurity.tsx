
import React, { useState } from 'react';
import SecurityTable, { SecurityItem } from './SecurityTable';
import { Button } from './ui/button';
import { PlusCircle, Filter, Download, MoreHorizontal } from 'lucide-react';
import { Input } from './ui/input';

type ProfileSecurityProps = {
  securityItems: SecurityItem[];
};

const ProfileSecurity: React.FC<ProfileSecurityProps> = ({ securityItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = securityItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col w-full">
      <div className="bg-header-yellow py-3 px-6">
        <h1 className="text-xl font-bold">Profile - security</h1>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Search security items..."
              className="w-80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={16} />
              <span>Filters</span>
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Download size={16} />
              <span>Export</span>
            </Button>
            <Button size="sm" className="flex items-center gap-1">
              <PlusCircle size={16} />
              <span>Add New</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        </div>
        
        <SecurityTable data={filteredItems} />
      </div>
    </div>
  );
};

export default ProfileSecurity;

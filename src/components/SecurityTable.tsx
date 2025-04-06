
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type SecurityItem = {
  id: string;
  name: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'closed' | 'in-progress' | 'resolved';
  owner: string;
  dateCreated: string;
  lastUpdated: string;
};

type SecurityTableProps = {
  data: SecurityItem[];
};

const getPriorityColor = (priority: SecurityItem['priority']) => {
  switch (priority) {
    case 'high':
      return 'bg-status-red text-white';
    case 'medium':
      return 'bg-status-yellow text-slate-800';
    case 'low':
      return 'bg-status-green text-white';
    default:
      return 'bg-slate-200 text-slate-800';
  }
};

const getStatusColor = (status: SecurityItem['status']) => {
  switch (status) {
    case 'open':
      return 'bg-status-red text-white';
    case 'in-progress':
      return 'bg-status-blue text-white';
    case 'resolved':
      return 'bg-status-green text-white';
    case 'closed':
      return 'bg-slate-500 text-white';
    default:
      return 'bg-slate-200 text-slate-800';
  }
};

const SecurityTable: React.FC<SecurityTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-auto border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            <TableHead className="w-10 text-center">
              <Checkbox id="select-all" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-slate-50">
              <TableCell className="text-center">
                <Checkbox id={`select-${item.id}`} />
              </TableCell>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <Badge className={cn("font-normal", getPriorityColor(item.priority))}>
                  {item.priority}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge className={cn("font-normal", getStatusColor(item.status))}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell className="text-slate-500 text-sm">{item.dateCreated}</TableCell>
              <TableCell className="text-slate-500 text-sm">{item.lastUpdated}</TableCell>
              <TableCell>
                <button className="text-slate-500 hover:text-slate-700 text-sm">View</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SecurityTable;


import { SecurityItem } from '../components/SecurityTable';

export const securityItems: SecurityItem[] = [
  {
    id: '001',
    name: 'Suspicious Login Attempt',
    type: 'Authentication',
    priority: 'high',
    status: 'open',
    owner: 'Sarah Johnson',
    dateCreated: '2025-04-05',
    lastUpdated: '2025-04-06',
  },
  {
    id: '002',
    name: 'Expired SSL Certificate',
    type: 'Infrastructure',
    priority: 'high',
    status: 'in-progress',
    owner: 'Mike Chen',
    dateCreated: '2025-04-04',
    lastUpdated: '2025-04-06',
  },
  {
    id: '003',
    name: 'Outdated Dependencies',
    type: 'Software',
    priority: 'medium',
    status: 'in-progress',
    owner: 'Alex Wong',
    dateCreated: '2025-04-03',
    lastUpdated: '2025-04-05',
  },
  {
    id: '004',
    name: 'Firewall Configuration Issue',
    type: 'Network',
    priority: 'high',
    status: 'open',
    owner: 'Jamie Smith',
    dateCreated: '2025-04-02',
    lastUpdated: '2025-04-04',
  },
  {
    id: '005',
    name: 'User Permissions Review',
    type: 'Access Control',
    priority: 'low',
    status: 'open',
    owner: 'Taylor Brown',
    dateCreated: '2025-04-01',
    lastUpdated: '2025-04-03',
  },
  {
    id: '006',
    name: 'Password Policy Update',
    type: 'Policy',
    priority: 'medium',
    status: 'resolved',
    owner: 'Jordan Lee',
    dateCreated: '2025-03-30',
    lastUpdated: '2025-04-02',
  },
  {
    id: '007',
    name: 'Vulnerability Scan Finding',
    type: 'Assessment',
    priority: 'high',
    status: 'open',
    owner: 'Casey Martinez',
    dateCreated: '2025-03-29',
    lastUpdated: '2025-04-01',
  },
  {
    id: '008',
    name: 'Data Backup Verification',
    type: 'Disaster Recovery',
    priority: 'low',
    status: 'closed',
    owner: 'Morgan Wilson',
    dateCreated: '2025-03-28',
    lastUpdated: '2025-03-31',
  },
];

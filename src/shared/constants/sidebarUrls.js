import {
  FaUsers,
  FaCog,
  FaClipboard,
  FaFolderOpen,
  FaDatabase,
  FaFileAlt,
  FaRegFileAlt,
  FaBoxes,
  FaUserAlt,
  FaChartBar,
  FaRegNewspaper,
} from 'react-icons/fa';

// Sidebar items data
export const sidebar_url = [
  {
    name: 'Clients',
    icon: FaUsers,
    sub: [
      { name: 'Clients Management', url: '/clients' },
      { name: 'Members Management', url: '/members-management' },
      // { name: 'Deactivated Members Management', url: 'Deactivated' },
      { name: 'Members History', url: 'members-history' },
      // { name: 'Policy Management', url: 'Policy' },
      // { name: 'TOB Viewer', url: 'Viewer' },
      // { name: 'TOB Builder', url: 'Builder' },
    ],
  },
  {
    name: 'Providers',
    icon: FaClipboard,
    sub: [
      { name: 'Providers Management', url: '/providers/provider-management' },
      { name: 'Providers Locations', url: '/providers/locations' },
      // { name: 'Providers Finance Report', url: '/providers/finance-report' },
      { name: 'Pricelists Management', url: '/providers/pricelists' },
      // {
      //   name: 'Archived Pricelists Management',
      //   url: '/providers/pricelists/archived',
      // },
      { name: 'Master CPT Management', url: '/providers/CPT-management' },
      // { name: 'Not Found Acts Management', url: '/providers/not-found-acts' },
      // { name: 'CDT Acts Management', url: '/providers/cdt-acts' },
      // { name: 'Files Checker', url: '/providers/files-checker' },
    ],
  },
  {
    name: 'Service Request (SR)',
    icon: FaFolderOpen,
    sub: [],
  },
  {
    name: 'Approvals',
    icon: FaDatabase,
    sub: [
      { name: 'Approvals Management', url: '/approvals' },
      // { name: 'Canceled Approval Management', url: '' },
      {
        name: 'Portals Approvals Requests',
        url: 'approvals/portal-approval',
      },
      // { name: 'Rejected Requests', url: '' },
    ],
  },
  {
    name: 'Chronic Approval',
    icon: FaDatabase,
    sub: [
      // { name: 'New Approval', url: 'chronic-approvals/chronic-approvals' },
      {
        name: 'Monthly Chronic Approvals',
        url: 'chronic-approvals/monthly-chronic',
      },
      // { name: 'Chronic Dashboard', url: 'chronic-approvals/monthly-chronic1' },
      // {
      //   name: 'Monthly Chronic Review',
      //   url: 'chronic-approvals/monthly-chronic2',
      // },
      // { name: 'Portal Approvals', url: 'chronic-approvals/monthly-chronic3' },
    ],
  },
  {
    name: 'Batch',
    icon: FaBoxes,
    sub: [
      { name: 'Batch Received', url: 'batch/received' },
      // { name: 'Batch Received Dashboard', url: 'batch/received-dashboard' },
      // { name: 'Batch Progress Dashboard', url: 'batch/progress-dashboard' },
      // { name: 'Batch Report Per Member', url: 'batch/report-per-member' },
      // { name: 'Claim Report Per Client', url: 'batch/claim-report-per-client' },
      // { name: 'Batch Client Report', url: 'batch/client-report' },
      { name: 'Batch Scan', url: 'batch/scan' },
      { name: 'Claim Books Handle', url: 'batch/claim-books-handle' },
      // { name: 'Inpatient Claims', url: 'batch/inpatient-claims' },
    ],
  },
  {
    name: 'Reimbursement',
    url: 'sss',
    icon: FaFileAlt,
    sub: [],
  },
  {
    name: 'Medicines',
    url: 'sss',
    icon: FaRegFileAlt,
    sub: [],
  },
  {
    name: 'Account Manager',
    url: 'sss',
    icon: FaUserAlt,
    sub: [],
  },
  {
    name: 'Data Mapping',
    url: 'sss',
    icon: FaChartBar,
    sub: [],
  },
  {
    name: 'Data Analysis',
    url: 'sss',
    icon: FaChartBar,
    sub: [],
  },
  {
    name: 'Administrator',
    url: 'sss',
    icon: FaCog,
    sub: [],
  },
  {
    name: 'Reports',
    url: 'sss',
    icon: FaRegNewspaper,
    sub: [],
  },
];

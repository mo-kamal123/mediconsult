// Description: This file contains the styles for the status in the table.
export const statusStyles = {
  Approved: 'bg-green-100 text-green-800',
  Rejected: 'bg-red-100 text-red-800',
  Deactivated: 'bg-red-100 text-red-800',
  Activated: 'bg-green-100 text-green-800',
  Active: 'bg-green-100 text-green-800',
  Received: 'bg-[#E0F1FF] text-gray-800',
  Hold: 'bg-blue-100 text-blue-800',
  Pending: 'bg-yellow-100 text-yellow-800',
};

export const statusIdMap = {
  1: 'Activated',
  2: 'Deactivated',
  3: 'Hold',
  4: 'Pending',
};

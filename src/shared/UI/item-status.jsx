import { statusIdMap, statusStyles } from '../constants/statusStyles';

const ItemStatus = ({ status }) => {
  // If status is a number, convert it to the Name
  const statusName = typeof status === 'number' ? statusIdMap[status] : status;

  // Fallback if unknown
  const displayName = statusName || 'Unknown';

  // Get styles using the Name
  const classes = statusStyles[displayName] || 'bg-gray-100 text-gray-800';

  return (
    <span className={`px-2 py-1 rounded-lg text-sm font-medium ${classes}`}>
      {displayName}
    </span>
  );
};

export default ItemStatus;

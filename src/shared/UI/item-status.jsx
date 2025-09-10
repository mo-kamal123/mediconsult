import { statusStyles } from '../constants/statusStyles';

const ItemStatus = ({ status }) => {
  const classes = statusStyles[status] || 'bg-gray-100 text-gray-800';
  return (
    <span className={`px-2 py-1 rounded-lg text-sm font-medium ${classes}`}>
      {status}
    </span>
  );
};

export default ItemStatus;

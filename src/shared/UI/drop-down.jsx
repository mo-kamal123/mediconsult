import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FiFilter } from 'react-icons/fi';

const DropDown = ({
  data,
  label,
  type = '',
  className = '',
  placeholder = 'Select an option...',
  onValueChange,
  value,
  ...props
}) => {
  return (
    <div className="w-full mt-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 mt-1 block">
          {label}
        </label>
      )}

      {/* Select Component */}
      <Select
        className={''}
        onValueChange={onValueChange}
        value={value}
        {...props}
      >
  <SelectTrigger className={`w-full flex justify-between items-center ${className}`}>
    <SelectValue placeholder={placeholder} />
    {/* Replace this with your own icon */}
    <FiFilter className="ml-2 h-4 w-4 opacity-50 text-muted-foreground" />
  </SelectTrigger>
        <SelectContent>
          {/* Add "All" option for search type */}
          {type === 'search' && <SelectItem value="all">All</SelectItem>}

          {/* Map through data options */}
          {data?.map((item, index) => (
            <SelectItem key={index} value={item.value || item}>
              {item.label || item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;

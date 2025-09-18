import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DropDown = ({ data, label, type = '', className = '', placeholder = "Select an option...", onValueChange, ...props }) => {
  return (
    <div className="w-full mt-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 mt-1 block">{label}</label>
      )}
      
      {/* Select Component */}
      <Select onValueChange={onValueChange} {...props}>
        <SelectTrigger className={`w-full ${className}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {/* Add "All" option for search type */}
          {type === 'search' && (
            <SelectItem value="all">All</SelectItem>
          )}
          
          {/* Map through data options */}
          {data?.map((item, index) => (
            <SelectItem 
              key={index} 
              value={item.value || item}
            >
              {item.label || item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DropDown;
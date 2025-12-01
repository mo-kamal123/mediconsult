import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Dropdown({
  data = [],
  label,
  type = '',
  className = '',
  placeholder = 'Select an option...',
  value = null,
  onValueChange = () => {},
  isInvalid = false,
  usePortal = false,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const dropdownRef = useRef(null);

  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const isObjectData =
    data.length > 0 &&
    typeof data[0] === 'object' &&
    (data[0].label || data[0].title);

  const [selected, setSelected] = useState(value);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const getDisplayText = () => {
    if (!selected) return placeholder;

    if (isObjectData) {
      const matched = data.find((d) => d.value === selected);
      console.log(matched);
      return matched
        ? matched.value || matched.label || placeholder
        : placeholder;
    }

    return typeof selected === 'object' ? placeholder : selected;
  };
  

  const handleSelect = (item) => {
    const val = isObjectData ? item.value : item;
    setSelected(val);
    setIsOpen(false);
    onValueChange(val);
  };

  const isSelected = (item) => {
    const val = isObjectData ? item.value : item;
    return selected === val;
  };

  // Close when clicking outside
  useEffect(() => {
    const close = (e) => {
      if (
        dropdownRef.current &&
        wrapperRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const toggleOpen = () => {
    if (!isOpen && wrapperRef.current && usePortal) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
    setIsOpen((prev) => !prev);
  };

  // ---------- DROPDOWN UI (reused for portal + normal modes) ----------
  const DropdownList = (
    <ul
      ref={dropdownRef}
      style={
        usePortal
          ? {
              position: 'absolute',
              top: position.top,
              left: position.left,
              width: position.width,
            }
          : {}
      }
      className={`bg-white border border-gray-200 rounded-xl shadow-lg z-[9999] overflow-hidden max-h-60 min-w-52 overflow-y-auto ${
        !usePortal ? 'absolute left-0 mt-2 w-full' : ''
      }`}
    >
      {/* Search "All" option */}
      {type === 'search' && (
        <li
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            selected === 'All' ? 'bg-main text-white hover:bg-main' : ''
          }`}
          onClick={() => handleSelect('All')}
        >
          All
        </li>
      )}

      {/* Data items */}
      {data.length > 0 ? (
        data.map((item, index) => (
          <li
            key={index}
            onClick={() => handleSelect(item)}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              isSelected(item) ? 'bg-main text-white hover:bg-main' : ''
            }`}
          >
            {isObjectData ? item.label || item.value : item}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-400 text-sm">
          No options available
        </li>
      )}
    </ul>
  );

  return (
    <div className="w-full mt-2">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700 mt-1 block">
          {label}
        </label>
      )}

      <div ref={wrapperRef} className="relative w-full">
        {/* Button */}
        <button
          type="button"
          onClick={toggleOpen}
          className={`flex justify-between items-center w-full px-4 py-3 border rounded-xl bg-white text-xs md:text-sm hover:shadow-md transition-all duration-200 ${
            isInvalid
              ? 'border-red-500'
              : isOpen
              ? 'border-main/50'
              : 'border-[#C2C2C2]'
          } ${className}`}
          {...props}
        >
          <span className={selected ? 'text-gray-700' : 'text-gray-400'}>
            {getDisplayText()}
          </span>

          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Rendering */}
        {isOpen &&
          (usePortal
            ? createPortal(DropdownList, document.body)
            : DropdownList)}
      </div>
    </div>
  );
}

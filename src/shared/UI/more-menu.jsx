import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiMenuFold4Fill } from 'react-icons/ri';

export default function MoreMenu({ actions = [] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current &&
        btnRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleMenu = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 5,
        left: rect.right + window.scrollX - 160,
      });
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* Trigger */}
      <button
        ref={btnRef}
        onClick={toggleMenu}
        className="p-2 rounded flex items-center gap-2 border border-borders hover:bg-gray-50"
      >
        <RiMenuFold4Fill className="text-blue-500 text-lg" />
        More
        <MdKeyboardArrowDown className="text-xl" />
      </button>

      {/* Dropdown */}
      {open &&
        createPortal(
          <div
            ref={menuRef}
            style={{ top: position.top, left: position.left }}
            className="absolute bg-white border shadow-xl rounded-md py-1 z-[9999]"
          >
            {actions.map((action, i) => (
              <button
                key={i}
                onClick={() => {
                  action.onClick?.(); // execute action
                  setOpen(false); // ✅ CLOSE MENU
                  console.log(action);
                }}
                disabled={action.disabled}
                className="block w-full text-left text-sm px-4 py-2 hover:bg-gray-50"
              >
                {action.label}
              </button>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}

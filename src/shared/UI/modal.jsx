import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import TableBtn from './table-Btn';

const Modal = ({ isOpen, onClose, children, submitLabel, title, onSubmit }) => {
  const modalRef = useRef();
  const [show, setShow] = useState(false); // control animation state

  // Handle click outside to close
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  // Control fade-in animation
  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      setShow(false);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Animate out before closing
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 200); // matches transition duration
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-200 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-lg shadow-lg p-6 lg:max-w-[60%] w-[90%] max-h-[90svh] transform transition-all duration-200 overflow-auto ${
          show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#1F4ED6]">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
        <div className="flex items-center justify-end gap-3 mt-4">
          <TableBtn type="clearFilter" label="Cancel" handleClick={onClose} />
          <TableBtn
            type="AddColumn"
            label={submitLabel}
            handleClick={(e) => {
              e.preventDefault();
              onSubmit(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

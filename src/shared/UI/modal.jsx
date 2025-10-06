import { useEffect, useRef, useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
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
        className={`bg-white rounded-lg shadow-lg p-6 max-w-[60%] w-full transform transition-all duration-200 ${
          show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

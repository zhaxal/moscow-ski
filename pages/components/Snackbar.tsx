import React, { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  type?: 'success' | 'error' | 'info' | 'warning' | 'purple';
  duration?: number | null;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  isOpen,
  onClose,
  type = 'info',
  duration = null,
}) => {
  useEffect(() => {
    if (isOpen && duration !== null) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    purple: 'bg-purple-500',
  }[type];

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg 
        flex items-center justify-between min-w-[300px] max-w-[90vw] max-h-[80vh]`}
      >
        <div className="flex-1 max-h-[60vh] overflow-y-auto pr-4">
          <p className="text-[16px] sm:text-[20px] leading-[20px] whitespace-pre-line">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none flex-shrink-0"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
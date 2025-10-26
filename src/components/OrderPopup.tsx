import { X, Mail } from 'lucide-react';
import { useEffect } from 'react';

interface OrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderPopup({ isOpen, onClose }: OrderPopupProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mx-4 max-w-md w-full animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="mb-4">
            <img 
              src="/circular_logo.png" 
              alt="Nature-Se Logo" 
              className="w-16 h-16 mx-auto rounded-full object-cover"
            />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Order Coming Soon!
          </h3>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-amber-800 text-sm sm:text-base">
              <strong>Amazon link coming soon</strong>
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-2">
              <Mail className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold text-sm sm:text-base">
                For Large Orders
              </span>
            </div>
            <p className="text-green-700 text-sm sm:text-base">
              Email us at:
            </p>
            <a 
              href="mailto:the.laxmidhar@gmail.com"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors break-all"
            >
              the.laxmidhar@gmail.com
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}

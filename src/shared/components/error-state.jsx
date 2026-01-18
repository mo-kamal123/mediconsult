import { AlertCircle } from 'lucide-react';

// Standardized error state component - used across project for consistent error UI
const ErrorState = ({ 
  title = 'Error Loading Data',
  message = 'Failed to load data. Please try again later.',
  showRetry = true,
  onRetry,
  className = ''
}) => {
  // Retry handler - uses custom onRetry or reloads page
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center py-20 ${className}`}>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-3 mb-3">
          <AlertCircle className="h-6 w-6 text-red-600" />
          <h3 className="text-lg font-semibold text-red-800">
            {title}
          </h3>
        </div>
        <p className="text-red-600 mb-4">
          {message}
        </p>
        {showRetry && (
          <button
            onClick={handleRetry}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;


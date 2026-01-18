import Spinner from '../layout/spinner';

// Standardized loading component - used across project for consistent loading states
const Loading = ({ fullScreen = false, message }) => {
  if (fullScreen) {
    return <Spinner />;
  }

  return (
    <div className="flex justify-center items-center py-20">
      <Spinner />
      {message && (
        <p className="ml-4 text-gray-600 text-sm">{message}</p>
      )}
    </div>
  );
};

export default Loading;


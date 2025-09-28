import { useRouteError, useNavigate } from 'react-router-dom';

const RouteErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">👿</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Somthing went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error?.message ||
            'Sorry, the page you are looking for does not exist.'}
        </p>
        <button
          onClick={handleGoHome}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default RouteErrorPage;

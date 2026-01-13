import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'sonner';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

/**
 * Main App Component
 * Sets up the application's core providers and routing
 *
 * - QueryClientProvider: Enables React Query for server state management
 * - Redux Provider: Provides global state management via Redux store
 * - RouterProvider: Handles application routing and navigation
 * - Toaster: Displays toast notifications (success, error, info messages)
 */
function App() {
  // Create a new QueryClient instance for React Query
  // This manages caching, refetching, and server state synchronization
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        {/* Toast notification component - displays at bottom-right of screen */}
        <Toaster position="bottom-right" richColors closeButton />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

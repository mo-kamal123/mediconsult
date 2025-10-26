import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'sonner';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" richColors closeButton />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

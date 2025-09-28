import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Toaster } from 'sonner';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors closeButton />
    </Provider>
  );
}

export default App;

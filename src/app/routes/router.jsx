import { createBrowserRouter } from 'react-router-dom';
import Home from '../../features/main/pages/home';
import RootLayout from '../layouts/root-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

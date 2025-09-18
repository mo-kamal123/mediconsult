import { createBrowserRouter } from 'react-router-dom';
import Home from '../../features/main/pages/home';
import RootLayout from '../layouts/root-layout';
import { approvalsRoutes } from '../../features/approvals/routes/routes.jsx';
import Authlayout from '../layouts/auth-layout.jsx';
import { authRoutes } from '../../features/auth/routes/routes.jsx';
import { clientsRoutes } from '../../features/clients/client-management/routes/routes.jsx';
import { memberRoutes } from '../../features/clients/members/routes/routes.jsx';
// import { memberRoutes } from '../../features/clients/members/routes/memberRoutes.jsx';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Authlayout loggedIn={false} />,
    children: [...authRoutes],
  },
  {
    path: '/',
    element: <RootLayout loggedIn={false} />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      ...approvalsRoutes,
      ...clientsRoutes,
      ...memberRoutes,
    ],
  },
]);

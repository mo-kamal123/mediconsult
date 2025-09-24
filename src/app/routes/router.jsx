import { createBrowserRouter } from 'react-router-dom';
import Home from '../../features/main/pages/home';
import RootLayout from '../layouts/root-layout';
import { approvalsRoutes } from '../../features/approvals/routes/routes.jsx';
import Authlayout from '../layouts/auth-layout.jsx';
import { authRoutes } from '../../features/auth/routes/routes.jsx';
import { clientsRoutes } from '../../features/clients/client-management/routes/routes.jsx';
import { memberRoutes } from '../../features/clients/members/routes/routes.jsx';
import RouteErrorPage from '../components/route-error-page.jsx';
import { providersRoutes } from '../../features/providers/providers-management/routes/routes.jsx';
// import { memberRoutes } from '../../features/clients/members/routes/memberRoutes.jsx';

// this is where we define our routes for the application
export const router = createBrowserRouter([
  // Auth routes
  {
    path: '/auth',
    element: <Authlayout />,
    errorElement: <RouteErrorPage />,
    children: [...authRoutes],
  },
  // Main app routes
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
          </>
        ),
      },
      // features routes
      ...approvalsRoutes,
      ...clientsRoutes,
      ...memberRoutes,
      ...providersRoutes,
    ]}
  ])
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../features/main/pages/home';
import RootLayout from '../layouts/root-layout';
import Authlayout from '../layouts/auth-layout.jsx';
import RouteErrorPage from '../components/route-error-page.jsx';

// Feature route imports
import { authRoutes } from '../../features/auth/routes/routes.jsx';
import { clientsRoutes } from '../../features/clients/client-management/routes/routes.jsx';
import { memberRoutes } from '../../features/clients/members/routes/routes.jsx';
import { providersRoutes } from '../../features/providers/providers-management/routes/routes.jsx';
import { approvalsRoutes } from '../../features/approvals/approvals-management/routes/routes.jsx';
import { ChronicApprovalRoutes } from '../../features/chronic-approvals/routes/routes.jsx';
import { batchRoutes } from '../../features/batch/routes/routes.jsx';
import { policyRoutes } from '../../features/clients/policy-management/routes/routes.jsx';

// Main router configuration - defines all app routes
export const router = createBrowserRouter([
  // Auth routes - login, password reset, verification pages
  {
    path: '/auth',
    element: <Authlayout />,
    errorElement: <RouteErrorPage />,
    children: [...authRoutes],
  },

  // Protected routes - require authentication, uses RootLayout with sidebar/navbar
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      // Home page
      {
        index: true,
        element: <Home />,
      },
      // Feature routes
      ...approvalsRoutes,
      ...clientsRoutes,
      ...memberRoutes,
      ...policyRoutes,
      ...providersRoutes,
      ...ChronicApprovalRoutes,
      ...batchRoutes,
    ],
  },
]);

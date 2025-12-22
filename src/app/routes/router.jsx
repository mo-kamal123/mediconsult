import { createBrowserRouter } from 'react-router-dom';
import Home from '../../features/main/pages/home';
import RootLayout from '../layouts/root-layout';
import Authlayout from '../layouts/auth-layout.jsx';
import RouteErrorPage from '../components/route-error-page.jsx';

// Route imports - Feature-specific route configurations
import { authRoutes } from '../../features/auth/routes/routes.jsx';
import { clientsRoutes } from '../../features/clients/client-management/routes/routes.jsx';
import { memberRoutes } from '../../features/clients/members/routes/routes.jsx';
import { providersRoutes } from '../../features/providers/providers-management/routes/routes.jsx';
import { approvalsRoutes } from '../../features/approvals/approvals-management/routes/routes.jsx';
import { ChronicApprovalRoutes } from '../../features/chronic-approvals/routes/routes.jsx';
import { batchRoutes } from '../../features/batch/routes/routes.jsx';

/**
 * Main application router configuration
 * Defines all routes for the application using React Router v6
 */
export const router = createBrowserRouter([
  /**
   * Authentication routes
   * Handles login, password reset, and verification pages
   * Uses AuthLayout wrapper for authentication pages
   */
  {
    path: '/auth',
    element: <Authlayout />,
    errorElement: <RouteErrorPage />,
    children: [...authRoutes],
  },

  /**
   * Main application routes
   * Protected routes that require authentication
   * Uses RootLayout wrapper with sidebar and navbar
   */
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      // Home page - dashboard/landing page for authenticated users
      {
        index: true,
        element: <Home />,
      },

      // Feature-specific routes
      // Approvals Management - handles approval requests and workflows
      ...approvalsRoutes,
      // Clients Management - manages client data, branches, contacts, and contracts
      ...clientsRoutes,
      // Members Management - handles member information and history
      ...memberRoutes,
      // Providers Management - manages healthcare providers, locations, and pricelists
      ...providersRoutes,
      // Chronic Approvals - handles recurring/chronic condition approvals
      ...ChronicApprovalRoutes,
      // Batch Processing - handles batch claims, scanning, and processing
      ...batchRoutes,
    ],
  },
]);

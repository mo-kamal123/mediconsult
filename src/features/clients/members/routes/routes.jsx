/**
 * Members Routes Configuration
 * Defines all routes related to member management functionality
 *
 * Routes Structure:
 * - /clients/:clientId/members/:memberId/* - Member data within a client context
 * - /members-management - Standalone members management page
 * - /member-management/:memberId/* - Member data without client context
 * - /members-history - Members history page
 * - /members/new - Create new member page
 */

import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';

// Lazy-loaded components
const MemberData = lazy(() => import('../layouts/member-data'));
const NewMember = lazy(() => import('../views/new-member'));
const Members = lazy(() => import('../pages/members-management'));

const MemberInfo = lazy(() => import('../views/member-info'));
const FamilyMembers = lazy(() => import('../views/family-members'));
const MemberHistory = lazy(() => import('../../members/pages/members-history'));
const Utilizations = lazy(() => import('../views/utilizations'));

/**
 * Member Routes
 *
 * Route structure:
 * 1. Client-scoped member routes - members within a specific client context
 * 2. Standalone members management - list all members across all clients
 * 3. Direct member management - access member data directly by member ID
 * 4. Members history - historical member data view
 * 5. New member creation - form to create a new member
 */
export const memberRoutes = [
  // Member routes within a client context
  {
    path: 'clients/:clientId/members',
    children: [
      {
        path: ':memberId',
        element: withSuspense(MemberData),
        children: [
          { path: 'member-info', element: withSuspense(MemberInfo) },
          { path: 'family-members', element: withSuspense(FamilyMembers) },
          { path: 'member-history', element: withSuspense(MemberHistory) },
        ],
      },
    ],
  },

  // Standalone members management page - list all members
  {
    path: 'members-management',
    element: withSuspense(Members),
  },

  // Direct member management - access member by ID without client context
  {
    path: 'member-management',
    children: [
      {
        path: ':memberId',
        element: withSuspense(MemberData),
        children: [
          { path: 'member-info', element: withSuspense(MemberInfo) },
          { path: 'family-members', element: withSuspense(FamilyMembers) },
          { path: 'member-history', element: withSuspense(MemberHistory) },
        ],
      },
    ],
  },

  // Members history page - view historical member data
  { path: 'members-history', element: withSuspense(MemberHistory) },

  // New member creation page
  { path: 'members/new', element: withSuspense(NewMember) },
];

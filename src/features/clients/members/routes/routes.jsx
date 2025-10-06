// src/features/clients/members/routes/memberRoutes.jsx

import { lazy } from 'react';
import withSuspense from '@/app/components/with-suspense';

// Lazy-loaded components
const MemberManagement = lazy(() => import('../pages/member-management'));
const MemberData = lazy(() => import('../layouts/member-data'));
const NewMember = lazy(() => import('../views/new-member'));
const Members = lazy(() => import('../pages/members-management'));

const MemberInfo = lazy(() => import('../views/member-info'));
const FamilyMembers = lazy(() => import('../views/family-members'));
const MemberHistory = lazy(() => import('../../members/pages/members-history'));
const Utilizations = lazy(() => import('../views/utilizations'));

export const memberRoutes = [
  {
    path: 'clients/:clientId/members',
    children: [
      // Uncomment if you need this route:
      // {
      //   index: true,
      //   element: withSuspense(MemberManagement),
      // },
      {
        path: ':memberId',
        element: withSuspense(MemberData),
        children: [
          { path: 'member-info', element: withSuspense(MemberInfo) },
          { path: 'family-members', element: withSuspense(FamilyMembers) },
          { path: 'member-history', element: withSuspense(MemberHistory) },
          { path: 'utilizations', element: withSuspense(Utilizations) },
        ],
      },
    ],
  },
  { path: 'members-management', element: withSuspense(Members) },
  { path: 'members-history', element: withSuspense(MemberHistory) },
  { path: 'members/new', element: withSuspense(NewMember) },
];

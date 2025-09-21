import MemberManagement from '../pages/member-management';
import MemberData from '../layouts/member-data';
import MemberInfo from '../views/member-info';
import FamilyMembers from '../views/family-members';
import MemberHistory from '../views/member-history';
import Utilizations from '../views/utilizations';

// Members Routes
export const memberRoutes = [
  {
    path: 'clients/:clientId/members', // relative path
    children: [
      {
        index: true,
        element: <MemberManagement />,
      },
      {
        path: ':memberId',
        element: <MemberData />,
        children: [
          { index: true, element: <MemberInfo /> },
          { path: 'family-members', element: <FamilyMembers /> },
          { path: 'member-history', element: <MemberHistory /> },
          { path: 'utilizations', element: <Utilizations /> },
        ],
      },
    ],
  },
];

import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import Tabs from '../../../../shared/UI/tabs';

/**
 * MemberData Layout Component
 * Layout wrapper for viewing/editing member data
 *
 * Features:
 * - Tabbed navigation between different member data sections
 * - Displays member information, family members, history, and utilizations
 * - Works in both client-scoped and standalone contexts
 */

// Tab configuration for member data sections
const membersTabs = [
  { label: 'Member Info', path: 'member-info' },
  { label: 'Family Members', path: 'family-members' },
  { label: 'Member History', path: 'member-history' },
  { label: "Utilization's", path: 'utilizations' },
];

const MemberData = () => {
  // Get client ID and member ID from URL parameters
  // clientId may be undefined if accessed via standalone route
  const { clientId, memberId } = useParams();

  return (
    <section className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>Member Data</MainHeader>
      {/* Tab navigation for different member data sections */}
      <Tabs
        tabsData={membersTabs}
        route={clientId ? `clients/${clientId}/members` : 'member-management'}
        id={memberId}
      />
      <div>
        {/* Renders child route components (MemberInfo, FamilyMembers, etc.) */}
        <Outlet />
      </div>
    </section>
  );
};

export default MemberData;

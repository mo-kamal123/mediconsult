import { Outlet, useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import Tabs from '../../../../shared/UI/tabs';
const membersTabs = [
  { label: 'Member Info', path: '' },
  { label: 'Family Members', path: 'family-members' },
  { label: 'Member History', path: 'member-history' },
  { label: "Utilization's", path: 'utilizations' },
];
const MemberData = () => {
  const { clientId, memberId } = useParams(); // assuming route like /clients/:id/...
  return (
    <section className="md:w-[95%] w-[95%] mx-auto flex flex-col gap-10">
      <MainHeader>Member Data</MainHeader>
      <Tabs
        tabsData={membersTabs}
        route={`clients/${clientId}/members`}
        id={memberId}
      />
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default MemberData;

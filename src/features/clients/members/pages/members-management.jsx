import MainHeader from '../../../../shared/UI/main-header';
import Members from '../../client-management/views/members';
import MemberManagement from './member-management';

const MembersManagement = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col">
      <MainHeader>Members Management</MainHeader>
      <Members />
    </div>
  );
};

export default MembersManagement;

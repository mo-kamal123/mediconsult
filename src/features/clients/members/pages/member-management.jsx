import MainHeader from '../../../../shared/UI/main-header';
import MembersInfo from '../../client-management/views/members';

const MemberManagement = () => {
  return (
    <section className="w-[90%] m-auto">
      <MainHeader>Members Management</MainHeader>
      <MembersInfo />
    </section>
  );
};

export default MemberManagement;

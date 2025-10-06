import MainHeader from '../../../../shared/UI/main-header';
import MemberHistory from '../views/member-history';

const MembersHistory = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      <MainHeader>Members History</MainHeader>
      <MemberHistory />
    </div>
  );
};

export default MembersHistory;

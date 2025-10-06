import MainHeader from '../../../../shared/UI/main-header';
import MemberInfo from './member-info';

const NewMember = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      <MainHeader>New Member</MainHeader>
      <MemberInfo />
    </div>
  );
};

export default NewMember;

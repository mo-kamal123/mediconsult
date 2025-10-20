import MainHeader from '../../../../shared/UI/main-header';
import useCreateMember from '../hooks/useCreateMember';
import MemberForm from './member-form';

const NewMember = () => {
  const { mutate: createMember, isPending } = useCreateMember();
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      <MainHeader>New Member</MainHeader>
      <MemberForm memberSubmit={createMember} />
    </div>
  );
};

export default NewMember;

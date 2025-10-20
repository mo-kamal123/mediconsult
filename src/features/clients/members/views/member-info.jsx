import { useParams } from 'react-router-dom';
import useMemberById from '../hooks/useMemberById';
import MemberForm from './member-form';
import useUpdateClient from '../../client-management/hooks/useUpdateClient';
import Spinner from '../../../../shared/layout/spinner';

const MemberInfo = () => {
  const { memberId } = useParams();
  //TODO: handle response when api ready
  const { data: member, isPending } = useMemberById(memberId);
  const { mutate: updateMember, isPending: pendingUpdate } =
    useUpdateClient(memberId);
  if (isPending || pendingUpdate) return <Spinner />;
  return (
    <div>
      <MemberForm member={member} memberSubmit={updateMember} />
    </div>
  );
};

export default MemberInfo;

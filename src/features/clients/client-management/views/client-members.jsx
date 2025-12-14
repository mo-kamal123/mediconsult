import { FaUserPlus } from 'react-icons/fa';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { GrDocumentUser } from 'react-icons/gr';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { useState } from 'react';
import Members from '../components/members';
import useClientMembers from '../hooks/useClientMembers';

const ClientMembers = () => {
  const [page, setPage] = useState(1); // current page state
  const navigate = useNavigate();
  const rows = useSelector((state) => state.members);
  const { clientId } = useParams(); // assuming route like /clients/:clientId/members
  const {
    data: members,
    isLoading,
    isError,
  } = useClientMembers(clientId, page);
  // Actions for the table
  const actions = [
    {
      type: 'clearFilter',
      Icon: MdFilterAltOff,
      label: 'Clear Filter',
    },
    {
      type: 'delete',
      Icon: MdDelete,
      label: 'Delete',
    },
    {
      type: 'export',
      Icon: RiFileExcel2Fill,
      label: 'Export',
    },
    {
      type: 'AssignProgram',
      Icon: GrDocumentUser,
      label: 'Assign Program',
    },
    {
      type: 'NewMember',
      Icon: FaUserPlus,
      label: 'New Member',
      onClick: () => navigate('/members/new'),
    },
  ];
  console.log('Members response:', members);
  return (
    <div className="">
      <Members
        actions={actions}
        clientId={clientId}
        data={members?.Data || []}
        error={isError}
        loading={isLoading}
        page={page}
        setPage={setPage}
        rows={rows}
      />
    </div>
  );
};

export default ClientMembers;

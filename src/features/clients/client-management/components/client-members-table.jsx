import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import Table from '../../../../shared/UI/table';
import { RiUserVoiceFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const ClientMembersTable = ({ colskey, headers, members, type = 'update' }) => {
  const navigate = useNavigate();
  const clientId = 1; // remove if you already have it from props or context

  // Only include leadingData if type === "update"
  const leadingData =
    type === 'update'
      ? [
          {
            col: '',
            render: (row) => (
              <p
                onClick={() =>
                  navigate(`/clients/${clientId}/members/${row.id}/member-info`)
                }
                className="text-blue-500 text-xl cursor-pointer"
              >
                <SiGoogledocs />
              </p>
            ),
          },
        ]
      : null;

  // Only include trailingData if type === "update"
  const trailingData =
    type === 'update'
      ? [
          {
            col: 'Change Status',
            render: (row) => (
              <div className="flex items-center justify-between gap-2">
                <button
                  className="text-[#388E3C] text-2xl  cursor-pointer"
                  onClick={() => alert(`activate ${row.Name}`)}
                >
                  <FaUserCheck />
                </button>

                <button
                  className="text-[#DC0600] text-2xl  cursor-pointer"
                  onClick={() => alert(`deactivate ${row.Name}`)}
                >
                  <FaUserTimes />
                </button>

                <button
                  className="text-[#FFCC00] text-2xl  cursor-pointer"
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <RiUserVoiceFill />
                </button>

                <button
                  className="text-[#4285F4] text-2xl cursor-pointer"
                  onClick={() => alert(`pending ${row.Name}`)}
                >
                  <FaUserClock />
                </button>
              </div>
            ),
          },
          {
            col: 'Consumptions',
            render: (row) => (
              <button
                className="text-blue-500 underline  cursor-pointer"
                onClick={() =>
                  navigate(
                    `/clients/${row.id}/members/${row.id}/member-history`
                  )
                }
              >
                Consumptions
              </button>
            ),
          },
        ]
      : [];

  return (
    <div>
      <Table
        colkey={colskey}
        cols={headers}
        data={members}
        checkbox={false}
        leadingData={leadingData}
        trailingData={trailingData}
      />
    </div>
  );
};

export default ClientMembersTable;

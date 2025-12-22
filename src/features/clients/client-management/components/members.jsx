import { FaUserCheck, FaUserClock, FaUserTimes } from 'react-icons/fa';
import { SiGoogledocs } from 'react-icons/si';
import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { RiUserVoiceFill } from 'react-icons/ri';
import TablePagination from '../../../../shared/UI/table-pagiation';
import MoreMenu from '../../../../shared/UI/more-menu';
import { useNavigate } from 'react-router-dom';
import useChangeMemberStatus from '../../members/hooks/useChangeMemberStatus';
import { useState } from 'react';
import useActivateBulkMembers from '../../members/hooks/useActivateBulkMembers';
import useDeactivateBulkMembers from '../../members/hooks/useDeactivateBulkMembers';
import Spinner from '../../../../shared/layout/spinner';
import Modal from '../../../../shared/UI/modal';
import DragAndDrop from '../../../../shared/UI/drag&drop';
import useDownloadExcel from '../../../../shared/hooks/useDownloadExcel';
import {
  getExcelSchema,
  updateBulkMembers,
  uploadBulkImgs,
} from '../../members/api/membersApi';
import { toast } from 'sonner';

// Table headers
const tableHeaders = [
  'ID',
  'Name',
  'BirthDate',
  'Age',
  'Client',
  'Branch',
  'Program',
  'Status',
  'Mobile',
];
const colkey = [
  'Id',
  'MemberName',
  'BirthDate',
  'Age',
  'ClientName',
  'BranchName',
  'ProgramName',
  'StatusName',
  'Mobile',
];

const Members = ({
  page,
  data,
  loading,
  error,
  clientId,
  setPage,
  rows,
  actions,
  search,
  setSearch,
  selectedRowsIds,
  setSelectedRowsIds,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('update'); // "update" or "imgs"
  const [submitLoading, setSubmitLoading] = useState(false);
  const { mutate: changeStatus, isLoading: statusLoading } =
    useChangeMemberStatus();
  const { mutate: activateMembers, isLoading } = useActivateBulkMembers();
  const { mutate: deactivateMembers } = useDeactivateBulkMembers();
  const { downloadExcel } = useDownloadExcel();
  const navigatationRoute = (row) =>
    clientId
      ? `/clients/${clientId}/members/${row.Id}/member-info`
      : `/member-management/${row.Id}/member-info`;

  console.log(selectedRowsIds);

  const handleSubmit = async (e, files) => {
    e.preventDefault();

    if (!files.length) {
      toast.error('No files selected');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append(modalType === 'update' ? 'File' : 'files', file);
    });

    try {
      setSubmitLoading(true);

      if (modalType === 'update') {
        await updateBulkMembers(formData);
        toast.success('Members updated successfully');
      } else {
        await uploadBulkImgs(formData);
        toast.success('Images uploaded successfully');
      }

      setIsModalOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setSubmitLoading(false);
    }
  };

  const showError = () => {
    toast.error('Please select at least one member');
  };
  const requireSelection = (cb) => {
    if (selectedRowsIds.length <= 0) {
      showError();
      return;
    }
    cb();
  };

  // Show loading state
  if (loading) {
    return (
      <div className="w-full">
        <TableActions
          actions={actions}
          tableheaders={tableHeaders}
          search={search}
          setSearch={setSearch}
        >
          <MoreMenu
            actions={[
              {
                label: 'Activate Selected Members',
                onClick: () => activateMembers({ MemberIds: selectedRowsIds }),
              },
              {
                label: 'Deactivate Selected Members',
                onClick: () =>
                  deactivateMembers({ MemberIds: selectedRowsIds }),
              },
              {
                label: 'Bulk update Members',
                onClick: () => setIsModalOpen(true),
              },
              {
                label: 'Bulk upload Image',
                onClick: () => setIsModalOpen(true),
              },
            ]}
          />
        </TableActions>
        <div className="flex justify-center items-center py-20">
          <Spinner />
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full">
        <TableActions
          actions={actions}
          tableheaders={tableHeaders}
          search={search}
          setSearch={setSearch}
        >
          <MoreMenu
            actions={[
              {
                label: 'Activate Selected Members',
                onClick: () => activateMembers({ MemberIds: selectedRowsIds }),
                disabled: selectedRowsIds.length <= 0,
              },
              {
                label: 'Deactivate Selected Members',
                onClick: () =>
                  deactivateMembers({ MemberIds: selectedRowsIds }),
                disabled: selectedRowsIds.length <= 0,
              },
              {
                label: 'Bulk update Members',
                onClick: () => setIsModalOpen(true),
              },
              {
                label: 'Bulk upload Image',
                onClick: () => setIsModalOpen(true),
                disabled: selectedRowsIds.length <= 0,
              },
            ]}
          />
        </TableActions>
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Error Loading Members
            </h3>
            <p className="text-red-600">
              Failed to load members data. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <TableActions
        actions={actions}
        tableheaders={tableHeaders}
        search={search}
        setSearch={setSearch}
      >
        <MoreMenu
          actions={[
            {
              label: 'Activate Selected Members',
              onClick: () =>
                requireSelection(() =>
                  activateMembers({ MemberIds: selectedRowsIds })
                ),
            },
            {
              label: 'Deactivate Selected Members',
              onClick: () =>
                requireSelection(() =>
                  deactivateMembers({ MemberIds: selectedRowsIds })
                ),
            },
            {
              label: 'Bulk update Members',
              onClick: async () => {
                setIsModalOpen(true);
                const file = await getExcelSchema();
                downloadExcel(file, 'members-table-schema.xlsx');
              },
            },
            {
              label: 'Bulk upload Image',
              onClick: () => {
                setModalType('imgs');
                requireSelection(() => setIsModalOpen(true));
              },
            },
          ]}
        />
      </TableActions>
      <Table
        colkey={colkey}
        cols={tableHeaders}
        data={data?.Data}
        checkbox={true}
        getRowId={setSelectedRowsIds}
        // handle leading data rendering
        leadingData={{
          col: '',
          render: (row) => (
            <p
              onClick={() => navigate(navigatationRoute(row))}
              className="text-blue-500 text-xl"
            >
              <SiGoogledocs />
            </p>
          ),
        }}
        // handle trailing data rendering
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center gap-2">
                <button
                  className="text-[#388E3C] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 1 } })
                  }
                  title="Activate"
                >
                  <FaUserCheck />
                </button>
                <button
                  className="text-[#DC0600] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 2 } })
                  }
                  title="Deactivate"
                >
                  <FaUserTimes />
                </button>
                <button
                  className="text-[#FFCC00] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 4 } })
                  }
                  title="Pending"
                >
                  <RiUserVoiceFill />
                </button>
                <button
                  className="text-[#4285F4] text-2xl"
                  disabled={statusLoading}
                  onClick={() =>
                    changeStatus({ id: row.Id, body: { StatusId: 3 } })
                  }
                  title="Hold"
                >
                  <FaUserClock />
                </button>
              </div>
            ),
          },
        ]}
      />

      <TablePagination
        page={page}
        setPage={setPage}
        totalPage={data?.TotalPages}
        totalItem={data?.TotalMembers}
      />

      {/* ---------------------- MODAL ---------------------- */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !submitLoading && setIsModalOpen(false)}
      >
        <div className="mb-6">
          {modalType === 'update' ? (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Bulk Update Members
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Excel template has been downloaded successfully.
                <br />
                Please add the{' '}
                <span className="font-medium text-gray-800">
                  Member IDs
                </span>{' '}
                and the fields you want to update, then upload the file below.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Bulk Upload Member Images
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Upload member images in bulk.
                <br />
                Make sure each image file name exactly matches the corresponding
                <span className="font-medium text-gray-800"> Member ID</span>.
              </p>
            </>
          )}
        </div>

        <div className="border-t pt-4">
          <DragAndDrop
            handleSubmit={handleSubmit}
            loading={submitLoading}
          />{' '}
        </div>
      </Modal>
    </div>
  );
};

export default Members;

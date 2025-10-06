import Table from '../../../../shared/UI/table';
import TableActions from '../../../../shared/UI/table-actions';
import { useSelector } from 'react-redux';
import { MdDelete, MdFilterAltOff } from 'react-icons/md';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { ImAttachment } from 'react-icons/im';
import TablePagiation from '../../../../shared/UI/table-pagiation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DragAndDrop from '../../../../shared/UI/drag&drop';
import Modal from '../../../../shared/UI/modal';

const PricelistTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pricelistData = useSelector((state) => state.providersPricelists);
  const navigate = useNavigate();
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
      type: 'AddColumn',
      Icon: FaFileInvoiceDollar,
      label: 'Copy Pricelist',
      onClick: () => navigate('copy'),
    },
    {
      type: 'AddColumn',
      Icon: FaFileInvoiceDollar,
      label: 'New Pricelist',
      onClick: () => navigate('new'),
    },
  ];

  const tableHeaders = ['ID', 'Name', 'From Date', 'To Date', 'Provider Name'];
  return (
    <div>
      <TableActions actions={actions} tableheaders={tableHeaders} />
      <Table
        cols={tableHeaders}
        data={pricelistData}
        leadingData={{
          col: 'view',
          render: (row) => (
            <p
              className="text-blue-500 underline cursor-pointer"
              onClick={() => navigate(`${row.ID}`)}
            >
              view
            </p>
          ),
        }}
        trailingData={[
          {
            col: 'De-Attach',
            render: () => (
              <p className="text-gray-500 text-xl w-fit m-auto cursor-pointer">
                <ImAttachment />
              </p>
            ),
          },
          {
            col: 'Attachment',
            render: () => (
              <p
                className="text-blue-500 text-xl w-fit m-auto cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <ImAttachment />
              </p>
            ),
          },
        ]}
      />

      <TablePagiation />

      {/* Attachment Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DragAndDrop />
      </Modal>
    </div>
  );
};

export default PricelistTable;

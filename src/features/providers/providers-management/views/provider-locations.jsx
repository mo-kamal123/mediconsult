import { BsFillPlusSquareFill } from 'react-icons/bs';
import TableActions from '../../../../shared/UI/table-actions';
import { CiImport } from 'react-icons/ci';
import Table from '../../../../shared/UI/table';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../../../../shared/UI/modal';
import NewLocationForm from '../components/new-location-form';

const ProviderLocations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const tableheaders = [
    'Government',
    'City',
    'EN Area',
    'AR Area',
    'EN Address',
    'AR Address',
  ];
  const actions = [
    {
      type: 'newClient',
      Icon: BsFillPlusSquareFill,
      label: 'Add New',
      onClick: () => {
        setSelectedLocation(null); // Clear form
        setIsModalOpen(true);
      },
    },
    {
      type: 'newClient',
      Icon: CiImport,
      label: 'Import Locations',
    },
  ];
  const rows = [
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
    {
      Government: 'Government 1',
      City: 'City 1',
      'EN Area': 'Area 1',
      'AR Area': 'منطقة 1',
      'EN Address': 'Address 1',
      'AR Address': 'عنوان 1',
    },
  ];

  return (
    <div>
      <TableActions tableheaders={tableheaders} actions={actions} />
      <Table
        cols={tableheaders}
        data={rows}
        checkbox={false}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center justify-center gap-2">
                <button
                  className="text-red-600 text-2xl"
                  onClick={() => alert(`delete ${row['EN Address']}`)}
                >
                  <MdDeleteForever />
                </button>
                <button
                  className="text-blue-500 text-2xl"
                  onClick={() => {
                    setSelectedLocation(row); // Pass row to form
                    setIsModalOpen(true);
                  }}
                >
                  <FaEdit />
                </button>
              </div>
            ),
          },
        ]}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewLocationForm
          data={selectedLocation}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default ProviderLocations;

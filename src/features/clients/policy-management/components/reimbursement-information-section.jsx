import { useState } from 'react';
import { Plus } from 'lucide-react';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';

const ReimbursementInformationSection = ({
  reimbursements,
  onReimbursementsChange,
  onSave,
  reimbursementTypeOptions = [],
  programOptions = [],
  pricelistOptions = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    reimbursementTypeId: '',
    applyOn: '',
    programId: '',
    pricelistId: '',
    price: '',
  });

  const reimbursementHeaders = [
    'ID',
    'Reimbursement Type',
    'Apply On',
    'Program',
    'Price List',
    'Apply By',
    'Max Value',
    'Reimbursement Percentage',
    'Notes',
  ];
  const colkey = [
    'Id',
    'ReimbursementTypeId',
    'ApplyOn',
    'ProgramId',
    'PricelistId',
    'ApplyBy',
    'MaxValue',
    'ReimbursementPercentage',
    'Notes',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReimbursement = () => {
    if (!formData.reimbursementTypeId) {
      alert('Please fill in Reimbursement Type');
      return;
    }
    const newReimbursement = {
      ID: reimbursements.length + 1,
      'Reimbursement Type': formData.reimbursementTypeId,
      'Apply on': formData.applyOn,
      Program: formData.programId,
      'Price List': formData.pricelistId,
      Price: formData.price,
    };
    onReimbursementsChange([...reimbursements, newReimbursement]);
    setFormData({
      reimbursementTypeId: '',
      applyOn: '',
      programId: '',
      pricelistId: '',
      price: '',
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this reimbursement?')) {
      onReimbursementsChange(reimbursements.filter((r) => r.ID !== id));
    }
  };

  return (
    <div className="bg-white border border-borders rounded-2xl p-6 flex flex-col gap-6">
      <h3 className="font-semibold text-lg text-[#1F4ED6]">
        Reimbursement Information
      </h3>

      <div className="flex justify-end">
        <TableBtn
          type="AddColumn"
          label="Add New"
          Icon={Plus}
          handleClick={() => setIsModalOpen(true)}
        />
      </div>

      <Table
        cols={reimbursementHeaders}
        colkey={colkey}
        data={reimbursements}
        checkbox={false}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <button
                className="text-[#DC0600] cursor-pointer"
                onClick={() => handleDelete(row.ID)}
              >
                Delete
              </button>
            ),
          },
        ]}
      />

      <div className="flex justify-end gap-4">
        <TableBtn
          type="clearFilter"
          label="Cancel"
          handleClick={() => console.log('Cancel clicked')}
        />
        <TableBtn type="AddColumn" label="Save" handleClick={onSave} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReimbursement}
        title="Add New Reimbursement"
        submitLabel="Add"
      >
        <DropDown
          label="Reimbursement Type"
          data={reimbursementTypeOptions}
          value={formData.reimbursementTypeId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, reimbursementTypeId: value }))
          }
          placeholder="Select Reimbursement Type"
        />
        <Input
          type="text"
          name="applyOn"
          label="Apply on"
          value={formData.applyOn}
          onChange={handleInputChange}
        />
        <DropDown
          label="Program"
          data={programOptions}
          value={formData.programId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, programId: value }))
          }
          placeholder="Select Program"
        />
        <DropDown
          label="Price List"
          data={pricelistOptions}
          value={formData.pricelistId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, pricelistId: value }))
          }
          placeholder="Select Price List"
        />
        <Input
          type="text"
          name="price"
          label="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default ReimbursementInformationSection;

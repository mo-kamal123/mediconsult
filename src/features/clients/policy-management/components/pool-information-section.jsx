import { useState } from 'react';
import { Plus } from 'lucide-react';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';

const PoolInformationSection = ({
  pools,
  onPoolsChange,
  onSave,
  poolTypeOptions = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    poolTypeIds: [],
    applyOn: '',
    poolLimit: '',
    memberPercent: '',
    membersCount: '',
  });

  const poolHeaders = [
    'ID',
    'Pool',
    'Apply on',
    'Pool Limit',
    'Members (%)',
    'Members count',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPool = () => {
    if (
      !formData.poolTypeIds ||
      formData.poolTypeIds.length === 0 ||
      !formData.poolLimit
    ) {
      alert('Please fill in Pool and Pool Limit');
      return;
    }
    const newPool = {
      ID: pools.length + 1,
      Pool: Array.isArray(formData.poolTypeIds)
        ? formData.poolTypeIds.join(', ')
        : formData.poolTypeIds,
      'Apply on': formData.applyOn,
      'Pool Limit': formData.poolLimit,
      'Members (%)': formData.memberPercent,
      'Members count': formData.membersCount,
    };
    onPoolsChange([...pools, newPool]);
    setFormData({
      poolTypeIds: [],
      applyOn: '',
      poolLimit: '',
      memberPercent: '',
      membersCount: '',
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this pool?')) {
      onPoolsChange(pools.filter((p) => p.ID !== id));
    }
  };

  return (
    <div className="bg-white border border-borders rounded-2xl p-6 flex flex-col gap-6">
      <h3 className="font-semibold text-lg text-[#1F4ED6]">Pool Information</h3>

      <div className="flex justify-end">
        <TableBtn
          type="AddColumn"
          label="Add New"
          Icon={Plus}
          handleClick={() => setIsModalOpen(true)}
        />
      </div>

      <Table
        cols={poolHeaders}
        data={pools}
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
        onSubmit={handleAddPool}
        title="Add New Pool"
        submitLabel="Add"
      >
        <DropDown
          label="Pool Type"
          data={poolTypeOptions}
          value={
            Array.isArray(formData.poolTypeIds)
              ? formData.poolTypeIds[0]
              : formData.poolTypeIds
          }
          onValueChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              poolTypeIds: Array.isArray(prev.poolTypeIds)
                ? [...prev.poolTypeIds, value]
                : [value],
            }))
          }
          placeholder="Select Pool Type"
        />
        <Input
          type="text"
          name="applyOn"
          label="Apply on"
          value={formData.applyOn}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="poolLimit"
          label="Pool Limit"
          value={formData.poolLimit}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="memberPercent"
          label="Members (%)"
          value={formData.memberPercent}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="membersCount"
          label="Members count"
          value={formData.membersCount}
          onChange={handleInputChange}
        />
      </Modal>
    </div>
  );
};

export default PoolInformationSection;

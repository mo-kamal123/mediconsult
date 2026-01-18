import { useState } from 'react';
import { Plus } from 'lucide-react';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';

const ClassInformationSection = ({
  classes,
  onClassesChange,
  onSave,
  title = 'Class Information',
  serviceClassOptions = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    serviceClassId: '',
    serviceLimitType: '',
    poolId: '',
    serviceLimit: '',
  });
  const classHeaders = [
    'Id',
    'Service Class Id',
    'Service Limit Type',
    'Pool Index',
    'Pool Id',
    'Service Limit',
    'Member Count',
    'Member Percentage',
    'Apply To',
    'Copayment',
    'Notes',
    'Only Refund',
  ];

  const colkey = [
    'Id',
    'ServiceClassId',
    'ServiceLimitType',
    'PoolIndex',
    'PoolId',
    'ServiceLimit',
    'MemberCount',
    'MemberPercentage',
    'ApplyTo',
    'Copayment',
    'Notes',
    'OnlyRefund',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddClass = () => {
    if (!formData.serviceClassId || !formData.serviceLimit) {
      alert('Please fill in Service Classes and Service Limit');
      return;
    }
    const newClass = {
      ID: classes.length + 1,
      'Service Classes': formData.serviceClassId,
      'Service Limit Type': formData.serviceLimitType,
      'Pool ID': formData.poolId,
      'Service Limit': formData.serviceLimit,
    };
    onClassesChange([...classes, newClass]);
    setFormData({
      serviceClassId: '',
      serviceLimitType: '',
      poolId: '',
      serviceLimit: '',
    });
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      onClassesChange(classes.filter((c) => c.ID !== id));
    }
  };

  return (
    <div className="bg-white border border-borders rounded-2xl p-6 flex flex-col gap-6">
      <h3 className="font-semibold text-lg text-[#1F4ED6]">{title}</h3>

      <div className="flex justify-end">
        <TableBtn
          type="AddColumn"
          label="Add New"
          Icon={Plus}
          handleClick={() => setIsModalOpen(true)}
        />
      </div>

      <Table
        cols={classHeaders}
        colkey={colkey}
        data={classes.ListOfServiceClasses}
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
          handleClick={() => {}}
        />
        <TableBtn type="AddColumn" label="Save" handleClick={onSave} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddClass}
        title="Add New Class"
        submitLabel="Add"
      >
        <DropDown
          label="Service Classes"
          data={serviceClassOptions}
          value={formData.serviceClassId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, serviceClassId: value }))
          }
          placeholder="Select Service Classes"
        />
        <Input
          type="text"
          name="serviceLimitType"
          label="Service Limit Type"
          value={formData.serviceLimitType}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="poolId"
          label="Pool ID"
          value={formData.poolId}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          name="serviceLimit"
          label="Service Limit"
          value={formData.serviceLimit}
          onChange={handleInputChange}
          required
        />
      </Modal>
    </div>
  );
};

export default ClassInformationSection;

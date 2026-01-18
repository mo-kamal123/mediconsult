import { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import Table from '../../../../shared/UI/table';
import TableBtn from '../../../../shared/UI/table-Btn';
import Modal from '../../../../shared/UI/modal';
import Input from '../../../../shared/UI/input';
import DropDown from '../../../../shared/UI/drop-down';

const ProgramsSection = ({
  programs,
  onProgramsChange,
  onProgramClick,
  showViewDetails = false,
  programNameOptions = [],
  roomTypeOptions = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    ProgramNameId: '',
    Limit: '',
    RoomTypeId: '',
    Note: '',
  });

  const programHeaders = ['ID', 'Program Name', 'Limit', 'Room Class', 'Note'];
  const colkey = ['Id', 'Id', 'Limit', 'RoomTypeId', 'Note'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddProgram = () => {
    if (!formData.programNameId || !formData.limit) {
      alert('Please fill in Program Name and Limit');
      return;
    }
    if (editingId) {
      // Edit existing
      const updatedPrograms = programs.map((p) =>
        p.ID === editingId
          ? {
              ...p,
              'Program Name': formData.programNameId,
              Limit: formData.limit,
              'Room Class': formData.roomTypeId,
              Note: formData.note,
            }
          : p
      );
      onProgramsChange(updatedPrograms);
      setEditingId(null);
    } else {
      // Add new
      const newProgram = {
        ID: programs.length + 1,
        'Program Name': formData.programNameId,
        Limit: formData.limit,
        'Room Class': formData.roomTypeId,
        Note: formData.note,
      };
      onProgramsChange([...programs, newProgram]);
    }
    setFormData({ programNameId: '', limit: '', roomTypeId: '', note: '' });
    setIsModalOpen(false);
  };

  const handleEdit = (program) => {
    setEditingId(program.ID);
    setFormData({
      programNameId: program['Program Name'] || program.programNameId,
      limit: program.Limit,
      roomTypeId: program['Room Class'] || program.roomTypeId,
      note: program.Note,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      onProgramsChange(programs.filter((p) => p.ID !== id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({ programNameId: '', limit: '', roomTypeId: '', note: '' });
  };

  return (
    <>
      <div className="flex justify-end">
        <TableBtn
          type="AddColumn"
          label="Add New"
          Icon={Plus}
          handleClick={() => {
            setEditingId(null);
            setFormData({
              programNameId: '',
              limit: '',
              roomTypeId: '',
              note: '',
            });
            setIsModalOpen(true);
          }}
        />
      </div>

      <Table
        cols={programHeaders}
        colkey={colkey}
        data={programs}
        checkbox={false}
        trailingData={[
          {
            col: 'Actions',
            render: (row) => (
              <div className="flex items-center gap-2">
                <Trash2
                  className="text-[#DC0600] cursor-pointer w-5 h-5 hover:text-red-700"
                  onClick={() => handleDelete(row.ID)}
                />
                <Edit2
                  className="text-[#1F4ED6] cursor-pointer w-5 h-5 hover:text-blue-700"
                  onClick={() => handleEdit(row)}
                />
                {showViewDetails && onProgramClick && (
                  <span
                    className="text-[#1F4ED6] cursor-pointer hover:text-blue-700 text-sm"
                    onClick={() => onProgramClick(row)}
                  >
                    View Details
                  </span>
                )}
              </div>
            ),
          },
        ]}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddProgram}
        title={editingId ? 'Edit Program' : 'Add New Program'}
        submitLabel={editingId ? 'Save' : 'Add'}
      >
        <DropDown
          label="Program Name"
          name='ProgramNameId'
          data={programNameOptions}
          value={formData.ProgramNameId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, programNameId: value }))
          }
          placeholder="Select Program Name"
        />
        <Input
          type="number"
          name="Limit"
          label="Limit"
          value={formData.Limit}
          onChange={handleInputChange}
          required
        />
        <DropDown
          label="Room Type"
          name='RoomTypeId'
          data={roomTypeOptions}
          value={formData.RoomTypeId}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, roomTypeId: value }))
          }
          placeholder="Select Room Type"
        />
        <Input
          type="text"
          name="Note"
          label="Note"
          value={formData.Note}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  );
};

export default ProgramsSection;

import { FaRegPlusSquare } from "react-icons/fa";
import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';
import { useState } from "react";
import Modal from "../../../../shared/UI/modal";
import Form from "../../../../shared/UI/from";
import NewBranchForm from "../components/new-branch-form";

const BranchInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // Table headers
  const headers = ['ID', 'Branch Name', 'Members Count', 'Branch Status'];
  return (
    <div>
      <div className="flex justify-end">
        <Btn onClick={() => setIsModalOpen(true)} className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800">
          <FaRegPlusSquare  />
           Add New
        </Btn>
      </div>
      <Table cols={headers} data={[]} checkbox={false}></Table>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>~
        <NewBranchForm  onClose={() => setIsModalOpen(false)}/>
      </Modal>
    </div>
  );
};

export default BranchInfo;

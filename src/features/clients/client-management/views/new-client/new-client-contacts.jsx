import { useState } from "react";
import Btn from "../../../../../shared/UI/Btn";
import Modal from "../../../../../shared/UI/modal";
import ClientContactsTable from "../../components/client-contacts-table";

const NewClientContacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = ['Name', 'Job Title', 'Email', 'Mobile', 'Address', 'Note'];

  return (
    <div>
      <div className="flex justify-end">
        <Btn
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          <span className="bg-white text-[#1F4ED6] px-2 mr-1 rounded">+</span>
          Add New
        </Btn>
      </div>

      <ClientContactsTable headers={headers}  data={[]} type="create" />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* <NewClientContactForm onClose={() => setIsModalOpen(false)} /> */}
      </Modal>
    </div>
  );
};

export default NewClientContacts;

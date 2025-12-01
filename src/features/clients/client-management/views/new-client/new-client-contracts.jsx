import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../../../../../shared/UI/Btn";
import { FaRegPlusSquare } from "react-icons/fa";
import Modal from "../../../../../shared/UI/modal";
import ClientContractsTable from "../../components/client-contracts-table";
import NewContractForm from "../../components/new-contract-form";
import FormBtn from "../../../../../shared/UI/form-Btn";
import { useDispatch, useSelector } from "react-redux";
import { addContract } from "../../store/client-data-slice";

const NewClientContracts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const clientData = useSelector((state) => state.clientData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headers = [
    'Start Date',
    'Expire Date',
    'Total Amount',
    'Total Members',
    'Insurance Company',
  ];
  const colskey = [
    'startDate',
    'expireDate',
    'totalAmount',
    'totalMembers',
    'insuranceCompanyId',
  ];
  console.log(clientData);

  const handleSaveContract = (contract) => {
    dispatch(addContract(contract));
  };

  const handleNext = () => {
    navigate('/clients/new-client/members');
  };

  const handlePrevious = () => {
    navigate('/clients/new-client/branch-info');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <Btn
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800"
        >
          <FaRegPlusSquare />
          Add New
        </Btn>
      </div>

      <ClientContractsTable colskey={colskey} headers={headers} data={clientData.contracts} type={'create'} />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <NewContractForm 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveContract}
        />
      </Modal>

      {/* Navigation Buttons */}
      <div className="flex gap-4 justify-end mt-5">
        <FormBtn role={'delete'} type="button" onClick={handlePrevious}>
          Previous
        </FormBtn>
        <FormBtn role={'save'} type="button" onClick={handleNext}>
          Next
        </FormBtn>
      </div>
    </div>
  );
};

export default NewClientContracts;

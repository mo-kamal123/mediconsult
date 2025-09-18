import Btn from "../../../../shared/UI/Btn";
import Table from "../../../../shared/UI/table";


const ContactInfo = () => {
    const headers = ["Name", "Job Title", "Email", "Mobile", "Address", "Note"];
  return (
    <div>
      <div className="flex justify-end">
        <Btn className="w-fit text-sm !bg-[#1F4ED6]"><span className="bg-white text-[#1F4ED6] px-1 mr-1">+</span> Add New</Btn>

      </div>
        <Table cols={headers} data={[]} ></Table>
        <div className="flex justify-end gap-5">
          <Btn className="!bg-[#1F4ED6] px-5 !py-[1px]">Save</Btn>
          <Btn className="!bg-white border border-red-400 !text-red-400">cancel</Btn>
        </div>
    </div>
  )
}

export default ContactInfo
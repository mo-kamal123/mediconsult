import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';

const ContactInfo = () => {
  // Table headers
  const headers = ['Name', 'Job Title', 'Email', 'Mobile', 'Address', 'Note'];
  return (
    <div>
      <div className="flex justify-end">
        <Btn className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800">
          <span className="bg-white text-[#1F4ED6] px-2 mr-1 rounded">+</span>{' '}
          Add New
        </Btn>
      </div>
      <Table cols={headers} data={[]}></Table>
      <div className="flex items-center justify-end gap-5">
        <Btn className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800">
          Save
        </Btn>
        <Btn className="flex items-center justify-center gap-2 w-fit px-7 py-3 !bg-white border border-red-400 !text-red-400">
          cancel
        </Btn>
      </div>
    </div>
  );
};

export default ContactInfo;

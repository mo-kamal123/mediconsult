import Btn from "../../../../shared/UI/Btn";
import Table from "../../../../shared/UI/table";

const ClientBranchTable = ({headers, data, type}) => {
  return (
    <div>
      <Table cols={headers} data={data} checkbox={type === 'update'}></Table>
      <div className="flex items-center justify-end gap-5">
        <Btn className="flex items-center justify-center gap-2 w-fit bg-[#1F4ED6] px-7 py-3 hover:bg-blue-800">
          {type === 'update' ? 'Save' : 'Next'}
        </Btn>
        <Btn className="flex items-center justify-center gap-2 w-fit px-7 py-3 !bg-white border border-red-400 !text-red-400">
          cancel
        </Btn>
      </div>
    </div>
  );
};
export default ClientBranchTable;

import Btn from "../../../../shared/UI/Btn";
import Table from "../../../../shared/UI/table";

const ClientBranchTable = ({colskey, headers, data, type}) => {
  return (
    <div>
      <Table colkey={colskey} cols={headers} data={data} checkbox={type === 'update'}></Table>
    </div>
  );
};
export default ClientBranchTable;

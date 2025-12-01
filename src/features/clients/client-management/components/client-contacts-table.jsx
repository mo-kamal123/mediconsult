import Btn from "../../../../shared/UI/Btn";
import Table from "../../../../shared/UI/table";

const ClientContactsTable = ({colskey, headers, data, type = 'update' }) => {

  return (
    <>
      <Table colkey={colskey} cols={headers} data={data} checkbox={type === 'update'}></Table>
    </>
  );
};

export default ClientContactsTable;

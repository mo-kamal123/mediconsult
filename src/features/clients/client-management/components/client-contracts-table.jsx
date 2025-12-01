import Btn from '../../../../shared/UI/Btn';
import Table from '../../../../shared/UI/table';

const ClientContractsTable = ({ colskey, headers, data, type = 'update' }) => {
  return (
    <div>
      <Table colkey={colskey} cols={headers} data={data} checkbox={type === 'update'}></Table>
    </div>
  );
};

export default ClientContractsTable;

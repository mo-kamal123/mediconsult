import AddService from '../components/add-service';
import PricelistDatabase from '../components/pricelist-database';
import PricelistForm from '../components/pricelist-form';

const PricelistInfo = () => {
  return (
    <div>
      <PricelistForm />
      <AddService />
      <PricelistDatabase />
    </div>
  );
};

export default PricelistInfo;

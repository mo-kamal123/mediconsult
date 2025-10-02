import AddService from '../components/add-service';
import PricelistDatabase from '../components/pricelist-database';
import PricelistForm from '../components/pricelist-form';

const PricelistInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <PricelistForm />
      <AddService />
      <PricelistDatabase />
    </div>
  );
};

export default PricelistInfo;

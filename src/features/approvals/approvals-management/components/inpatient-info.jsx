import DropDown from '../../../../shared/UI/drop-down';
import Input from '../../../../shared/UI/input';

const InpatientInfo = () => {
  return (
    <div>
      <div className="bg-white border border-borders p-4 rounded-2xl shadow-sm">
        <h2 className="font-semibold text-[#1F4ED6] text-lg">
          Inpatient Information
        </h2>
        <div className="flex flex-col items-center md:flex-row justify-between gap-10 ">
          <Input
            label={'Inpatient Duration'}
            name={'inpatientDuration'}
            type="text"
          />
          <DropDown
            label={'Duration Type'}
            data={['hour', 'day', 'week']}
            className="p-6 mt-1"
            onValueChange={(val) => console.log(val)} // Optional
          />
        </div>
      </div>
    </div>
  );
};

export default InpatientInfo;

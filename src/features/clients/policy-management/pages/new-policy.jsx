import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import MainHeader from '../../../../shared/UI/main-header';
import PolicyInformationSection from '../components/policy-information-section';
import ProgramsSection from '../components/programs-section';
import PoolInformationSection from '../components/pool-information-section';
import ClassInformationSection from '../components/class-information-section';
import ReimbursementInformationSection from '../components/reimbursement-information-section';
import TableBtn from '../../../../shared/UI/table-Btn';
import Form from '../../../../shared/UI/from';
import { policyInfoSchema } from '../validation/policy-validation';

const NewPolicy = () => {
  // React Hook Form setup with validation
  const methods = useForm({
    resolver: zodResolver(policyInfoSchema),
    defaultValues: {
      policyTypeId: '',
      carrierCompanyId: '',
      startDate: '',
      expireDate: '',
      clientId: '',
      totalAmount: '',
      warningOnPercent: '',
      membersAddedAfter6Month: false,
      calculateUpperLimit: false,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  // Tables data
  const [programs, setPrograms] = useState([]);
  const [pools, setPools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [reimbursements, setReimbursements] = useState([]);

  // Mock data for dropdowns - TODO: Replace with API calls
  const policyTypeOptions = [
    { value: '1', label: 'Type 1' },
    { value: '2', label: 'Type 2' },
    { value: '3', label: 'Type 3' },
  ];
  const carrierCompanyOptions = [
    { value: '1', label: 'Company 1' },
    { value: '2', label: 'Company 2' },
    { value: '3', label: 'Company 3' },
  ];
  const clientOptions = [
    { value: '1', label: 'Client 1' },
    { value: '2', label: 'Client 2' },
    { value: '3', label: 'Client 3' },
  ];
  const programNameOptions = [
    { value: '1', label: 'Program 1' },
    { value: '2', label: 'Program 2' },
  ];
  const roomTypeOptions = [
    { value: '1', label: 'Single' },
    { value: '2', label: 'Double' },
    { value: '3', label: 'Suite' },
  ];
  const serviceClassOptions = [
    { value: '1', label: 'Service Class 1' },
    { value: '2', label: 'Service Class 2' },
  ];
  const poolTypeOptions = [
    { value: '1', label: 'Pool Type 1' },
    { value: '2', label: 'Pool Type 2' },
  ];
  const reimbursementTypeOptions = [
    { value: '1', label: 'Reimbursement Type 1' },
    { value: '2', label: 'Reimbursement Type 2' },
  ];
  const programOptions = [
    { value: '1', label: 'Program 1' },
    { value: '2', label: 'Program 2' },
  ];
  const pricelistOptions = [
    { value: '1', label: 'Pricelist 1' },
    { value: '2', label: 'Pricelist 2' },
  ];

  // Form submission handler
  const onSubmit = (data) => {
    console.log('✅ Policy Information Submitted:', data);
    console.log('Programs:', programs);
    console.log('Pools:', pools);
    console.log('Classes:', classes);
    console.log('Reimbursements:', reimbursements);

    // TODO: Replace with actual API call
    // await createPolicy({ ...data, programs, pools, classes, reimbursements });

    toast.success('Policy created successfully!', {
      description: 'The policy has been saved.',
    });
  };

  const handleCancel = () => {
    reset();
    toast.info('Form has been reset', {
      description: 'All fields have been cleared.',
    });
  };

  const handleSavePool = () => {
    console.log('Saving Pool Information:', pools);
    alert('Pool Information saved successfully!');
  };

  const handleSaveClass = () => {
    console.log('Saving Class Information:', classes);
    alert('Class Information saved successfully!');
  };

  const handleSaveReimbursement = () => {
    console.log('Saving Reimbursement Information:', reimbursements);
    alert('Reimbursement Information saved successfully!');
  };

  return (
    <FormProvider {...methods}>
      <div className="w-[95%] m-auto flex flex-col gap-6">
        <MainHeader>Policy Data</MainHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Policy Information Section */}
          <PolicyInformationSection
            policyTypeOptions={policyTypeOptions}
            carrierCompanyOptions={carrierCompanyOptions}
            clientOptions={clientOptions}
            showTotalAmount={true}
            showWarningOnPercent={true}
          />

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2"></h4>
            <ProgramsSection
              programs={programs}
              onProgramsChange={setPrograms}
              programNameOptions={programNameOptions}
              roomTypeOptions={roomTypeOptions}
            />
          </div>

          <div className="flex justify-end gap-4">
            <TableBtn
              type="clearFilter"
              label="Cancel"
              handleClick={handleCancel}
            />
            <TableBtn
              type="AddColumn"
              label="Save"
              handleClick={handleSubmit(onSubmit)}
            />
          </div>
        </Form>

        {/* Pool Information Section */}
        <PoolInformationSection
          pools={pools}
          onPoolsChange={setPools}
          onSave={handleSavePool}
          poolTypeOptions={poolTypeOptions}
        />

        {/* Class Information Section */}
        <ClassInformationSection
          classes={classes}
          onClassesChange={setClasses}
          onSave={handleSaveClass}
          serviceClassOptions={serviceClassOptions}
        />

        {/* Reimbursement Information Section */}
        <ReimbursementInformationSection
          reimbursements={reimbursements}
          onReimbursementsChange={setReimbursements}
          onSave={handleSaveReimbursement}
          reimbursementTypeOptions={reimbursementTypeOptions}
          programOptions={programOptions}
          pricelistOptions={pricelistOptions}
        />
      </div>
    </FormProvider>
  );
};

export default NewPolicy;

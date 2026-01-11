import { useState, useMemo } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MainHeader from '../../../../shared/UI/main-header';
import PolicyInformationSection from '../components/policy-information-section';
import ProgramsSection from '../components/programs-section';
import PoolInformationSection from '../components/pool-information-section';
import ClassInformationSection from '../components/class-information-section';
import ReimbursementInformationSection from '../components/reimbursement-information-section';
import TableBtn from '../../../../shared/UI/table-Btn';
import Form from '../../../../shared/UI/from';
import Spinner from '../../../../shared/layout/spinner';
import useCreatePolicy from '../hooks/useCreatePolicy';
import usePolicyDropDowns from '../hooks/usePolicyDropDowns';
import { policyInfoSchema } from '../validation/policy-validation';

/**
 * NewPolicy Component
 * Create new policy page
 *
 * Features:
 * - Create new policy using react-hook-form
 * - Manages programs, pools, classes, and reimbursements
 * - Uses dropdown data from API
 */
const NewPolicy = () => {
  // React Hook Form setup with validation
  const methods = useForm({
    resolver: zodResolver(policyInfoSchema),
    defaultValues: {
      PolicyTypeId: '',
      CarrierCompanyId: '',
      ClientId: '',
      StartDate: '',
      EndDate: '',
      IsCalculateUpperPeday: false,
      TotalAmount: '',
      WarningOnPercentage: '',
    },
  });

  const { handleSubmit, reset } = methods;

  // Create policy mutation
  const { mutate: createPolicy, isPending: isCreating } = useCreatePolicy();

  // Fetch dropdown data
  const dropdowns = usePolicyDropDowns({});

  // Tables data - managed separately from form
  const [programs, setPrograms] = useState([]);
  const [pools, setPools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [reimbursements, setReimbursements] = useState([]);

  // Convert dropdown data to format expected by components {value, label}
  const dropdownOptions = useMemo(() => {
    const convertToOptions = (data, idKey = 'Id', nameKey = 'Name') => {
      if (!Array.isArray(data)) return [];
      return data.map((item) => ({
        value: String(item[idKey] || item.id || item.Id || ''),
        label:
          item[nameKey] || item.name || item.Name || item.EnglishName || '',
      }));
    };

    return {
      policyTypes: convertToOptions(dropdowns.policyTypes, 'Id', 'Name'),
      carrierCompanies: convertToOptions(
        dropdowns.carrierCompanies,
        'Id',
        'Name'
      ),
      clients: convertToOptions(dropdowns.clients, 'Id', 'EnglishName'),
      programs: convertToOptions(dropdowns.programs, 'Id', 'Name'),
      roomTypes: convertToOptions(dropdowns.roomTypes, 'Id', 'Name'),
      serviceClasses: convertToOptions(dropdowns.serviceClasses, 'Id', 'Name'),
      poolTypes: convertToOptions(dropdowns.poolTypes, 'Id', 'Name'),
      reimbursementTypes: convertToOptions(
        dropdowns.reimbursementTypes,
        'Id',
        'Name'
      ),
      pricelists: convertToOptions(dropdowns.pricelists, 'Id', 'Name'),
    };
  }, [dropdowns]);

  // Form submission handler
  const onSubmit = (data) => {
    // Combine form data with programs, pools, classes, and reimbursements
    const payload = {
      ...data,
      ListOfProgram: programs,
      ListOfPool: pools,
      ListOfReimbursement: reimbursements,
    };

    createPolicy(payload);
  };

  const handleCancel = () => {
    reset();
    setPrograms([]);
    setPools([]);
    setClasses([]);
    setReimbursements([]);
  };

  // Loading state
  if (dropdowns.isLoading) {
    return <Spinner />;
  }

  return (
    <FormProvider {...methods}>
      <div className="w-[95%] m-auto flex flex-col gap-6">
        <MainHeader>Policy Data</MainHeader>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Policy Information Section */}
          <div className="bg-white border border-borders rounded-2xl p-6 flex flex-col gap-6">
            <PolicyInformationSection
              policyTypeOptions={dropdownOptions.policyTypes}
              carrierCompanyOptions={dropdownOptions.carrierCompanies}
              clientOptions={dropdownOptions.clients}
              showTotalAmount={true}
              showWarningOnPercent={true}
            />

            <ProgramsSection
              programs={programs}
              onProgramsChange={setPrograms}
              programNameOptions={dropdownOptions.programs}
              roomTypeOptions={dropdownOptions.roomTypes}
            />
          </div>

          {/* Submit buttons */}
          <div className="flex justify-end gap-4">
            <TableBtn
              type="clearFilter"
              label="Cancel"
              handleClick={handleCancel}
            />
            <TableBtn
              type="AddColumn"
              label={isCreating ? 'Creating...' : 'Save'}
              handleClick={handleSubmit(onSubmit)}
              disabled={isCreating}
            />
          </div>
        </Form>

        {/* Pool Information Section */}
        <PoolInformationSection
          pools={pools}
          onPoolsChange={setPools}
          onSave={() => {
            // Save pools - data is stored in state and will be saved with form submission
          }}
          poolTypeOptions={dropdownOptions.poolTypes}
        />

        {/* Class Information Section */}
        <ClassInformationSection
          classes={classes}
          onClassesChange={setClasses}
          onSave={() => {
            // Save classes - data is stored in state and will be saved with form submission
          }}
          serviceClassOptions={dropdownOptions.serviceClasses}
        />

        {/* Reimbursement Information Section */}
        <ReimbursementInformationSection
          reimbursements={reimbursements}
          onReimbursementsChange={setReimbursements}
          onSave={() => {
            // Save reimbursements - data is stored in state and will be saved with form submission
          }}
          reimbursementTypeOptions={dropdownOptions.reimbursementTypes}
          programOptions={dropdownOptions.programs}
          pricelistOptions={dropdownOptions.pricelists}
        />
      </div>
    </FormProvider>
  );
};

export default NewPolicy;

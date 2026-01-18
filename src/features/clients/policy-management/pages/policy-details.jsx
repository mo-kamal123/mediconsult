import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
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
import Loading from '../../../../shared/components/loading';
import ErrorState from '../../../../shared/components/error-state';
import usePolicyById from '../hooks/usePolicyById';
import useUpdatePolicy from '../hooks/useUpdatePolicy';
import usePolicyDropDowns from '../hooks/usePolicyDropDowns';
import { policyInfoSchema } from '../validation/policy-validation';

// Policy details page - view and edit policy information
const PolicyDetails = () => {
  const { policyId } = useParams();
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Fetch policy data by ID
  const {
    data: policy,
    isLoading: policyLoading,
    isError: policyError,
  } = usePolicyById(policyId);

  // Update policy mutation hook
  const { mutate: updatePolicy, isPending: isUpdating } =
    useUpdatePolicy(policyId);

  // Fetch dropdown data for form selects
  const dropdowns = usePolicyDropDowns({
    clientId: policy?.ClientId,
  });

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
      MembersAddedAfter6Month: false,
    },
  });

  const { handleSubmit, reset } = methods;

  // Tables data - managed separately from form
  const [programs, setPrograms] = useState([]);
  const [pools, setPools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [reimbursements, setReimbursements] = useState([]);

  // Reset form when policy data loads
  useEffect(() => {
    if (policy) {
      // Convert API response to form values
      const policyTypeId = policy?.PolicyTypeId ?? policy?.PolicyTypeId ?? '';
      const carrierCompanyId =
        policy?.CarrierCompanyId ?? policy?.CarrierCompanyId ?? '';
      const clientId = policy?.ClientId ?? '';

      reset({
        PolicyTypeId: policy.PolicyTypeId?.toString() ?? '',
        CarrierCompanyId: policy.CarrierCompanyId?.toString() ?? '',
        ClientId: policy.ClientId?.toString() ?? '',
        StartDate: policy.StartDate ?? '',
        EndDate: policy.EndDate ?? '',
        IsCalculateUpperPeday: policy.IsCalculateUpperPeday ?? false,
        TotalAmount: policy.TotalAmount?.toString() ?? '',
        WarningOnPercentage: policy.WarningOnPercentage?.toString() ?? '',
        MembersAddedAfter6Month: policy.MembersAddedAfter6Month ?? false,
      });

      // // Set programs, pools, classes, and reimbursements from API response
      // if (policy.ListOfProgram) {
      //   setPrograms(Array.isArray(policy.ListOfProgram) ? policy.ListOfProgram : []);
      // }
      if (policy.Pools) {
        setPools(Array.isArray(policy.Pools) ? policy.Pools : []);
      }
      if (policy.Classes) {
        setClasses(Array.isArray(policy.Classes) ? policy.Classes : []);
      }
      if (policy.Reimbursements) {
        setReimbursements(
          Array.isArray(policy.Reimbursements) ? policy.Reimbursements : []
        );
      }
    }
  }, [policy, reset]);

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
    const payload = {
      ...data,
      ListOfProgram: programs,
      ListOfPool: pools,
      ListOfReimbursement: reimbursements,
    };

    updatePolicy(payload);
  };

  // Handle program click
  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  // Loading state
  if (policyLoading || dropdowns.isLoading) {
    return <Loading fullScreen />;
  }

  // Error state
  if (policyError || !policy) {
    return (
      <div className="w-[95%] m-auto">
        <ErrorState title="Error Loading Policy" message="Failed to load policy data. Please try again later." />
      </div>
    );
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
              showPolicyId={true}
              showTotalAmount={true}
              showWarningOnPercent={true}
            />

            <ProgramsSection
              programs={policy.ListOfProgram}
              onProgramsChange={setPrograms}
              onProgramClick={handleProgramClick}
              showViewDetails={true}
              programNameOptions={dropdownOptions.programs}
              roomTypeOptions={dropdownOptions.roomTypes}
            />
          </div>

          {/* Submit buttons */}
          <div className="flex justify-end gap-4">
            <TableBtn
              type="clearFilter"
              label="Cancel"
              handleClick={() => reset()}
            />
            <TableBtn
              type="AddColumn"
              label={isUpdating ? 'Saving...' : 'Save'}
              handleClick={handleSubmit(onSubmit)}
              disabled={isUpdating}
            />
          </div>
        </Form>

        {/* Info for program Section - Dynamic */}
        {selectedProgram && (
          <ClassInformationSection
            classes={selectedProgram}
            onClassesChange={setClasses}
            onSave={() => {
              // Save classes - this could trigger an API call in the future
              // For now, data is stored in state and will be saved with form submission
            }}
            title={`Info for program ${selectedProgram['Program Name'] || selectedProgram.Name || ''}`}
            serviceClassOptions={dropdownOptions.serviceClasses}
          />
        )}

        {/* Pool Information Section */}
        <PoolInformationSection
          pools={policy.ListOfPool}
          onPoolsChange={setPools}
          onSave={() => {
            // Save pools - this could trigger an API call in the future
            // For now, data is stored in state and will be saved with form submission
          }}
          poolTypeOptions={dropdownOptions.poolTypes}
        />

        {/* Reimbursement Information Section */}
        <ReimbursementInformationSection
          reimbursements={policy.ListOfReimbursement}
          onReimbursementsChange={setReimbursements}
          onSave={() => {
            // Save reimbursements - this could trigger an API call in the future
            // For now, data is stored in state and will be saved with form submission
          }}
          reimbursementTypeOptions={dropdownOptions.reimbursementTypes}
          programOptions={dropdownOptions.programs}
          pricelistOptions={dropdownOptions.pricelists}
        />
      </div>
    </FormProvider>
  );
};

export default PolicyDetails;

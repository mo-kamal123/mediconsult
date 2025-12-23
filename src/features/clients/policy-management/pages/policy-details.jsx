import { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../../../shared/UI/main-header';
import PolicyInformationSection from '../components/policy-information-section';
import ProgramsSection from '../components/programs-section';
import PoolInformationSection from '../components/pool-information-section';
import ClassInformationSection from '../components/class-information-section';
import ReimbursementInformationSection from '../components/reimbursement-information-section';

const PolicyDetails = () => {
  const { policyId } = useParams();
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Policy Information state
  const [policyInfo, setPolicyInfo] = useState({
    policyId: policyId || '167',
    policyType: 'HMO',
    carrierCompany: 'Delta',
    startDate: '2031-10-31',
    expireDate: '2031-11-30',
    client: 'Khusm',
    totalAmount: '1000',
    warningOnPercent: '75',
    membersAddedAfter6Month: false,
    calculateUpperLimit: false,
  });

  // Tables data
  const [programs, setPrograms] = useState([
    {
      ID: 1,
      'Program Name': 'Platinum - VIP',
      Limit: '1',
      'Room Class': 'Suit',
      Note: '',
    },
  ]);
  const [pools, setPools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [reimbursements, setReimbursements] = useState([]);

  // Mock data for dropdowns - TODO: Replace with API calls
  const policyTypeOptions = [
    { value: '1', label: 'HMO' },
    { value: '2', label: 'Type 2' },
    { value: '3', label: 'Type 3' },
  ];
  const carrierCompanyOptions = [
    { value: '1', label: 'Delta' },
    { value: '2', label: 'Company 2' },
    { value: '3', label: 'Company 3' },
  ];
  const clientOptions = [
    { value: '1', label: 'Khusm' },
    { value: '2', label: 'Client 2' },
    { value: '3', label: 'Client 3' },
  ];
  const programNameOptions = [
    { value: '1', label: 'Platinum - VIP' },
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

  // Handlers for Policy Information
  const handlePolicyInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPolicyInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  // Save handlers
  const handleSavePolicyInfo = () => {
    console.log('Saving Policy Information:', policyInfo, programs);
    alert('Policy Information saved successfully!');
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
    <div className="w-[95%] m-auto flex flex-col gap-6">
      <MainHeader>Policy Data</MainHeader>

      {/* Policy Information Section */}
      <div className="bg-white border border-borders rounded-2xl p-6 flex flex-col gap-6">
        <PolicyInformationSection
          policyInfo={policyInfo}
          onPolicyInfoChange={handlePolicyInfoChange}
          policyTypeOptions={policyTypeOptions}
          carrierCompanyOptions={carrierCompanyOptions}
          clientOptions={clientOptions}
          showPolicyId={true}
          showTotalAmount={true}
          showWarningOnPercent={true}
          onSave={handleSavePolicyInfo}
        />

        <ProgramsSection
          programs={programs}
          onProgramsChange={setPrograms}
          onProgramClick={handleProgramClick}
          showViewDetails={true}
          programNameOptions={programNameOptions}
          roomTypeOptions={roomTypeOptions}
        />
      </div>

      {/* Info for program Section - Dynamic */}
      {selectedProgram && (
        <ClassInformationSection
          classes={classes}
          onClassesChange={setClasses}
          onSave={handleSaveClass}
          title={`Info for program ${selectedProgram['Program Name']}`}
          serviceClassOptions={serviceClassOptions}
        />
      )}

      {/* Pool Information Section */}
      <PoolInformationSection
        pools={pools}
        onPoolsChange={setPools}
        onSave={handleSavePool}
        poolTypeOptions={poolTypeOptions}
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
  );
};

export default PolicyDetails;

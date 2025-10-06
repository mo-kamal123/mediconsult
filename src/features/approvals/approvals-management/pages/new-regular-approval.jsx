import MainHeader from '../../../../shared/UI/main-header';
import MemberInfoCard from '../../../../shared/components/member-info-card';
import InpatientInfo from '../components/inpatient-info';
import MedicinesInfo from '../components/medicines-info';
import NewApprovalForm from '../components/new-approval-form';

const NewRegularApproval = () => {
  return (
    <div className="flex flex-col gap-10 w-[95%] m-auto">
      <MainHeader>New Regular Approval</MainHeader>
      <NewApprovalForm />
      {/* Member Information Card */}
      <MemberInfoCard />
      <InpatientInfo />
      <MedicinesInfo />
    </div>
  );
};

export default NewRegularApproval;

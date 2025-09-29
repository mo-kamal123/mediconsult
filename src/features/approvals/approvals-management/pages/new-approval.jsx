import NewApprovalForm from '../components/new-approval-form';
import MainHeader from '../../../../shared/UI/main-header';
import MedicinesInfo from '../components/medicines-info';
import MemberInfoCard from '../../../../shared/components/member-info-card';

const NewApproval = () => {
  return (
    <div className="flex flex-col gap-10 w-[95%] m-auto">
      <MainHeader>New Approval</MainHeader>
      <NewApprovalForm />
      {/* Member Information Card */}
      <MemberInfoCard />

      <MedicinesInfo />
    </div>
  );
};

export default NewApproval;

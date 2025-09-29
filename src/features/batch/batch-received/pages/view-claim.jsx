import MainHeader from '../../../../shared/UI/main-header';
import MemberInfoCard from '../../../../shared/components/member-info-card';
import ClaimInfo from '../components/claim-info';
import ClaimInfoForm from '../components/claim-info-form';

const ViewClaim = () => {
  return (
    <div className="w-[95%] m-auto flex flex-col gap-10">
      <MainHeader>View Claim</MainHeader>
      <ClaimInfoForm />
      <MemberInfoCard />
      <ClaimInfo />
    </div>
  );
};

export default ViewClaim;

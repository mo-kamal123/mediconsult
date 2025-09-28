import MemberFamilyCard from '../components/member-family-card';
import memberImg from '../imgs/member.jpg';
const familyMembersData = [
  { name: 'Marwa Saber Farag', level: 'Wife', src: memberImg },
  { name: 'Ahmed Mohamed', level: 'Child', src: memberImg },
  { name: 'Mostafa Mohamed', level: 'Child', src: memberImg },
  { name: 'Ahmed Mohamed', level: 'Child', src: memberImg },
  { name: 'Mostafa Mohamed', level: 'Child', src: memberImg },
  { name: 'Ahmed Mohamed', level: 'Child', src: memberImg },
  { name: 'Mostafa Mohamed', level: 'Child', src: memberImg },
];

const FamilyMembers = () => {
  return (
    <section className="flex flex-col gap-10 mb-10 bg-white border border-borders p-6 rounded-2xl">
      <p className="font-semibold text-lg text-blue-600">Family Members</p>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {familyMembersData?.length > 0 && (
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(370px,_1fr))]">
              {familyMembersData?.map((member, index) => (
                <MemberFamilyCard key={index} member={member} />
              ))}
            </div>
          )}
          {familyMembersData?.length === 0 && (
            <p className="font-semibold mb-5">No family members added yet.</p>
          )}
          <button className="bg-blue-500 py-2 px-6 text-white rounded-lg w-fit">
            Add Family Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default FamilyMembers;

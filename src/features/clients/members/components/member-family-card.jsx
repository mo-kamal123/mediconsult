const MemberFamilyCard = ({ member }) => {
  return (
    <div className="flex items-center gap-6 border border-gray-200 p-5 rounded-2xl shadow-sm bg-white">
      {/* Image */}
      <div className="w-24 h-24 overflow-hidden rounded-xl border border-gray-300 flex-shrink-0">
        <img
          src={member.src}
          alt={`${member.name} img`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Member Info */}
      <div className="space-y-2 text-sm text-gray-800">
        <div>
          <p className="font-semibold text-gray-600">Full Name:</p>
          <p className="text-base font-medium">{member.name}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-600">Member Level:</p>
          <p className="text-base font-medium">{member.level}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberFamilyCard;

export const useTransformMemberData = () => {
  const transformData = (memberData) => {
    // ✅ Build FormData from Redux state
    const formData = new FormData();

    // Always remove trailing spaces and use exact API field names
    formData.append('MemberName', memberData.memberName || '');
    formData.append('ClientId', memberData.clientName || '');
    formData.append('Mobile', memberData.mobile || '');
    formData.append('BranchId', memberData.branchName || '');
    formData.append('ProgramId', memberData.programName || '1');
    formData.append('IsMale', memberData.gender ?? '');
    formData.append('VipStatusId', memberData.vipStatus || '');
    formData.append('Notes', memberData.notes || '');
    formData.append('PrivateNotes', memberData.privateNotes || '');
    formData.append('NationalId', memberData.nationalId || '');
    formData.append('Birthday', memberData.birthday || '');
    formData.append('CompanyCode', memberData.companyCode || '');
    formData.append('JobTitle', memberData.jobTitle || '');
    formData.append('LevelId', memberData.level || '');
    formData.append('HofId', memberData.hofId || '');
    formData.append('ActivatedDate', memberData.activatedDate || '');

    // Append the image file if it exists
    // ImageUrl should be a File object stored in Redux
    if (memberData.memberImage) {
      if (memberData.memberImage[0] instanceof File) {
        formData.append('ImageFile', memberData.memberImage[0]);
        console.log(
          '✅ Image file added to FormData:',
          memberData.memberImage.name,
          `(${memberData.memberImage.size} bytes, type: ${memberData.memberImage.type})`
        );
      } else {
        console.log(
          '⚠️ memberImage exists but is not a File object:',
          memberData.memberImage
        );
        console.log(
          '⚠️ memberImage constructor:',
          memberData.memberImage?.constructor?.name
        );
      }
    } else {
      console.log('❌ No memberImage found in memberData');
    }

    // Debug: Log FormData
    console.log('📤 FormData being sent:');
    for (let pair of formData.entries()) {
      const value = pair[1];
      if (value instanceof File) {
        console.log(
          `  ${pair[0]}: File - ${value.name} (${value.size} bytes, type: ${value.type})`
        );
      } else {
        console.log(`  ${pair[0]}:`, value);
      }
    }

    return formData;
  };

  return { transformData };
};

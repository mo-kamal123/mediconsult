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
      }
    }

    return formData;
  };

  return { transformData };
};

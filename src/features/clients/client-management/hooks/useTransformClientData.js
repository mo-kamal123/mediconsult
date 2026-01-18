export const useTransformClientData = (clientData) => {
  // ✅ Build FormData from Redux state
  const formData = new FormData();

  // Required fields
  formData.append('ArabicName', clientData.ArabicName || '');
  formData.append('EnglishName', clientData.EnglishName || '');
  formData.append('CategoryId', clientData.CategoryId || '');
  formData.append('ClientTypeId', clientData.TypeId || ''); // ⚠️ Note: ClientTypeId (not TypeId)
  formData.append('StatusId', clientData.StatusId || '');
  formData.append('ReimbursementPerDays', clientData.RefundDueDays || null);
  formData.append('ShortName', clientData.ShortName || '');
  formData.append('ContactUs', JSON.stringify(clientData.Contacts || []));
  formData.append('Branches', JSON.stringify(clientData.Branches || []));
  formData.append('Contracts', JSON.stringify(clientData.Contracts || []));
  formData.append('Members', JSON.stringify(clientData.Members || []));

  // Append the image file if it exists
  // ImageUrl should be a File object stored in Redux
  if (clientData.ImageUrl) {
    if (clientData.ImageUrl instanceof File) {
      formData.append('ImageFile', clientData.ImageUrl);
    }
  }

  return { formData };
};

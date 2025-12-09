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
      console.log(
        '✅ Image file added to FormData:',
        clientData.ImageUrl.name,
        `(${clientData.ImageUrl.size} bytes, type: ${clientData.ImageUrl.type})`
      );
    } else {
      console.log(
        '⚠️ ImageUrl exists but is not a File object:',
        clientData.ImageUrl
      );
      console.log(
        '⚠️ ImageUrl constructor:',
        clientData.ImageUrl?.constructor?.name
      );
    }
  } else {
    console.log('❌ No ImageUrl found in clientData');
  }

  // TODO: Add arrays if needed (Contacts, Branches, Contracts, Members)
  // Example:
  // if (clientData.Contacts && clientData.Contacts.length > 0) {
  //   clientData.Contacts.forEach((contact, index) => {
  //     formData.append(`Contacts[${index}].Name`, contact.Name);
  //     formData.append(`Contacts[${index}].JobTitle`, contact.JobTitle);
  //     formData.append(`Contacts[${index}].Address`, contact.Address );
  //     formData.append(`Contacts[${index}].Note`, contact.Note);
  //   });
  // }

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

  return { formData };
};

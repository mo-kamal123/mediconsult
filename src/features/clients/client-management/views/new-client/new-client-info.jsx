import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newClientSchema } from '../../validation/client-validation';
import ClientForm from '../../components/client-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addClientInfo } from '../../store/client-data-slice';
import { useEffect } from 'react';

const NewClientInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  console.log('📦 Current Redux Store:', clientData);

  const methods = useForm({
    resolver: zodResolver(newClientSchema),
    defaultValues: {
      clientCategory: clientData.CategoryId || '',
      arabicClientName: clientData.ArabicName || '',
      englishClientName: clientData.EnglishName || '',
      clientType: clientData.TypeId || '',
      status: clientData.StatusId || '',
      reimbursementDueDays: clientData.RefundDueDays || 21,
      clientShortName: clientData.ShortName || '',
      imageUrl: null, // File objects can't be set as default values
    },
  });

  // If user navigates back, reset form with stored data
  useEffect(() => {
    if (clientData.ArabicName || clientData.EnglishName) {
      console.log('🔄 Resetting form with stored data');
      methods.reset({
        clientCategory: clientData.CategoryId || '',
        arabicClientName: clientData.ArabicName || '',
        englishClientName: clientData.EnglishName || '',
        clientType: clientData.TypeId || '',
        status: clientData.StatusId || '',
        reimbursementDueDays: clientData.RefundDueDays || 21,
        clientShortName: clientData.ShortName || '',
        imageUrl: null,
      });
    }
  }, [clientData, methods]);

  // Submit Handler
  const onSubmit = (data) => {
    console.log('📥 Client Info Submitted (raw data):', data);

    // Handle file: could be File object (from client-form) or FileList (direct from form)
    let imageFile = null;
    if (data.imageUrl) {
      if (data.imageUrl instanceof File) {
        imageFile = data.imageUrl;
      } else if (data.imageUrl[0] instanceof File) {
        imageFile = data.imageUrl[0];
      }
    }

    const clientInfoData = {
      ArabicName: data.arabicClientName || '',
      EnglishName: data.englishClientName || '',
      CategoryId: data.clientCategory || '',
      TypeId: data.clientType || '',
      StatusId: data.status || '',
      RefundDueDays: data.reimbursementDueDays || null,
      ShortName: data.clientShortName || '',
      ImageUrl: imageFile, // Store the actual File object
    };

    console.log('✅ Saving to Redux:', {
      ...clientInfoData,
      ImageUrl: imageFile
        ? `File: ${imageFile.name} (${imageFile.size} bytes, type: ${imageFile.type})`
        : 'null',
    });

    dispatch(addClientInfo(clientInfoData));

    navigate('/clients/new-client/contact-info');
  };

  return (
    <div className="flex flex-col gap-10">
      <ClientForm
        client={clientData}
        methods={methods}
        submitFunc={onSubmit}
        type="create"
      />
    </div>
  );
};

export default NewClientInfo;

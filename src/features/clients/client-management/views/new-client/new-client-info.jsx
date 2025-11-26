import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newClientSchema } from '../../validation/client-validation';
import useCreateClient from '../../hooks/useCreateClient';
import ClientForm from '../../components/client-form';
import MainHeader from '../../../../../shared/UI/main-header';

const NewClientInfo = () => {
  const { mutate: createNewClient, isPending } = useCreateClient(); // create client mutation hook
  const methods = useForm({
    resolver: zodResolver(newClientSchema),
    defaultValues: {
      clientCategory: '',
      arabicClientName: '',
      englishClientName: '',
      clientType: '',
      status: '',
      reimbursementDueDays: '',
      clientShortName: '',
      logo: null,
    },
  });

  // ✅ Handle submit
  const onSubmit = (data) => {
    //TODO: remove logs
    console.log('✅ Submitted Data:', data);
    // createNewClient(data); // call create client mutation
  };

  return (
    <div className=" flex flex-col gap-10">
      <ClientForm methods={methods} submitFunc={onSubmit} type='create' />
    </div>
  );
};

export default NewClientInfo;

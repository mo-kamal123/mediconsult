import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientInfoSchema } from '../validation/client-validation';
import useClientById from '../hooks/useClientById';
import { useParams } from 'react-router-dom';
import useUpdateClient from '../hooks/useUpdateClient';
import Spinner from '../../../../shared/layout/spinner';
import ClientForm from '../components/client-form';
import { useEffect } from 'react';

const ClietntInfo = () => {
  const { clientId } = useParams(); // get clientId from url params

  console.log(clientId);
  // TODO: remove comment when api ready
  const { data: client, isPending } = useClientById(clientId); // fetch client data by id
  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId); // update client mutation hook
  // react hook form setup
  const methods = useForm({
    resolver: zodResolver(clientInfoSchema),
    defaultValues: {
      clientCategory: '',
      arabicClientName: '',
      englishClientName: '',
      clientType: '',
      status: '',
      reimbursementDueDays: '',
      ibmNotesId: '',
      clientShortName: '',
      policyStart: '',
      policyExpire: '',
    },
  });

  // Reset form values when client data loads
  useEffect(() => {
    if (client) {
      methods.reset({
        clientCategory: client?.categoryName || '',
        arabicClientName: client?.name || '',
        englishClientName: client?.name || '',
        clientType: client?.type || '',
        status: client?.status || '',
        reimbursementDueDays: client?.refundDueDays || '',
        ibmNotesId: client?.ibmNotesId || '',
        clientShortName: client?.shortName || '',
        policyStart: client?.policyStart || '',
        policyExpire: client?.policyExpire || '',
      });
    }
  }, [client, methods]);

  if (isPending || clientPending) return <Spinner />;
  if (!client) return null;
  
  return (
    <ClientForm client={client} methods={methods} submitFunc={updateClient} />
  );
};

export default ClietntInfo;

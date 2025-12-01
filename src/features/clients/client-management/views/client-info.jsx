import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientInfoSchema } from '../validation/client-validation';
import useClientById from '../hooks/useClientById';
import { useParams } from 'react-router-dom';
import useUpdateClient from '../hooks/useUpdateClient';
import Spinner from '../../../../shared/layout/spinner';
import ClientForm from '../components/client-form';
import { useEffect } from 'react';
import { addClientInfo } from '../store/client-data-slice';
import { useDispatch } from 'react-redux';

const ClietntInfo = () => {
  const { clientId } = useParams(); // get clientId from url params
  const dispatch = useDispatch();
  console.log(clientId);
  // TODO: remove comment when api ready
  const { data: client, isPending, isSuccess } = useClientById(clientId); // fetch client data by id
  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId); // update client mutation hook
  console.log(client);
  // react hook form setup
  const methods = useForm({
    resolver: zodResolver(clientInfoSchema),
    defaultValues: {
      imageUrl: null,
      clientCategory: '',
      arabicClientName: '',
      englishClientName: '',
      clientType: '',
      status: '',
      reimbursementDueDays: '',
      clientShortName: '',
      policyStart: '',
      policyExpire: '',
    },
  });

  // Reset form values when client data loads
  useEffect(() => {
    if (client) {
      methods.reset({
        imageUrl: client?.ImageUrl || null,
        clientCategory: client?.CategoryName || '',
        arabicClientName: client?.ArabicName || '',
        englishClientName: client?.EnglishName || '',
        clientType: client?.TypeName || '',
        status: client?.StatusName || '',
        reimbursementDueDays: client?.RefundDueDays || '',
        clientShortName: client?.ShortName || '',
        policyStart: client?.PolicyStart || '',
        policyExpire: client?.PolicyExpire || '',
      });
    }
    // 2️⃣ Update Redux store
    dispatch(addClientInfo(client));
  }, [client, methods]);

  if (isPending || clientPending) return <Spinner />;
  if (!client) return null;

  return (
    <ClientForm client={client} methods={methods} submitFunc={updateClient} />
  );
};

export default ClietntInfo;

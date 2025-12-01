import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newClientSchema } from '../../validation/client-validation';
import ClientForm from '../../components/client-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addClientInfo } from '../../store/client-data-slice';

const NewClientInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientData = useSelector((state) => state.clientData);
  console.log(clientData);
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

  // Submit Handler
  const onSubmit = (data) => {
    console.log('Client Info Submitted:', data);

    dispatch(addClientInfo(data)); // <-- Save in Redux

    navigate('/clients/new-client/contact-info'); // go to next step
  };

  return (
    <div className="flex flex-col gap-10">
      <ClientForm methods={methods} submitFunc={onSubmit} type="create" />
    </div>
  );
};

export default NewClientInfo;

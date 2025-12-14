import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { clientInfoSchema } from '../validation/client-validation';
import useClientById from '../hooks/useClientById';
import { useParams, useNavigate } from 'react-router-dom';
import useUpdateClient from '../hooks/useUpdateClient';
import Spinner from '../../../../shared/layout/spinner';
import ClientForm from '../components/client-form';
import { useEffect, useState, useCallback } from 'react';
import { addClientInfo } from '../store/client-data-slice';
import { useDispatch } from 'react-redux';
import useDropDowns from '../hooks/useClientDropDowns';
import useDeleteClient from '../hooks/useDeleteClient';
import Modal from '../../../../shared/UI/modal';
import Btn from '../../../../shared/UI/Btn';

const ClietntInfo = () => {
  const { clientId } = useParams(); // get clientId from url params
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // console.log(clientId);
  // TODO: remove comment when api ready
  const { data: client, isPending, isSuccess } = useClientById(clientId); // fetch client data by id
  const { mutate: updateClient, isPending: clientPending } =
    useUpdateClient(clientId); // update client mutation hook
  const { mutate: deleteClient, isPending: isDeleting } = useDeleteClient(); // hook for deleting client
  // console.log(client);
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
      reimbursementDueDays: null,
      clientShortName: '',
      policyStart: '',
      policyExpire: '',
    },
  });

  // Reset form values when client data loads
  useEffect(() => {
    if (client) {
      // Convert IDs to match dropdown data format (support both number and string)
      // Dropdown matches by both d.value === selected || d.Id === selected
      const categoryId = client?.CategoryId ?? null;
      const typeId = client?.TypeId ?? null;
      const statusId = client?.StatusId ?? null;

      methods.reset({
        imageUrl: null, // Always start with null, existing image will be shown in preview
        arabicClientName: client?.ArabicName || '',
        englishClientName: client?.EnglishName || '',
        reimbursementDueDays: client?.RefundDueDays || null,
        clientShortName: client?.ShortName || '',
        policyStart: client?.PolicyStart || '',
        policyExpire: client?.PolicyExpire || '',
        // Set IDs as numbers (or strings if that's what dropdown expects)
        // The validation will coerce to string, but dropdown matching needs the correct type
        clientCategory: categoryId !== null ? categoryId : '',
        clientType: typeId !== null ? typeId : '',
        status: statusId !== null ? statusId : '',
      });
      // 2️⃣ Update Redux store
      dispatch(addClientInfo(client));
    }
  }, [client, methods, dispatch]);

  // Handle delete client
  const handleDeleteClick = useCallback(() => {
    setIsDeleteModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (clientId) {
      deleteClient(clientId, {
        onSuccess: () => {
          setIsDeleteModalOpen(false);
          // Navigate back to clients list after successful deletion
          navigate('/clients');
        },
      });
    }
  }, [clientId, deleteClient, navigate]);

  const handleCancelDelete = useCallback(() => {
    setIsDeleteModalOpen(false);
  }, []);

  if (isPending || clientPending) return <Spinner />;
  if (!client) return null;

  return (
    <>
      <ClientForm
        client={client}
        methods={methods}
        submitFunc={updateClient}
        onDelete={handleDeleteClick}
      />

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={handleCancelDelete}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Delete Client
          </h2>
          <p className="text-gray-600 mb-2">
            Are you sure you want to delete the client{' '}
            <span className="font-semibold text-gray-900">
              "{client?.EnglishName || client?.ArabicName || clientId}"
            </span>
            ?
          </p>
          <p className="text-sm text-red-600 mb-6">
            This action cannot be undone.
          </p>
          <div className="flex justify-end gap-4">
            <Btn
              onClick={handleCancelDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 disabled:opacity-50"
            >
              Cancel
            </Btn>
            <Btn
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Btn>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ClietntInfo;

import z from 'zod';

export const validateNewBatch = z.object({
  provider: z.string().min(1, 'Provider is required'),
  batchDueDays: z.string().min(1, 'Batch Due Days is required'),
  batchStatus: z.string().min(1, 'Batch Status is required'),
  receiveDate: z.string().min(1, 'Receive Date is required'),
  batchDueDate: z.string().min(1, 'Batch Due Date is required'),
  claimsCount: z.string().min(1, 'Claims Count is required'),
  totalAmount: z.string().min(1, 'Total Amount is required'),
  receivingWay: z.string().min(1, 'Receiving Way is required'),
  uploadOnPortal: z.string().min(1, 'Upload on Portal is required'),
  reason: z.string().optional(),
});

export const claimForm = z.object({
  approvalNumber: z.string().nonempty('Approval Number is required'),
  claimFormNumber: z.string().optional(),
  serviceDate: z.string().nonempty('Service Date is required'),
  approvalFormDate: z.string().nonempty('Approval/Claim Form Date is required'),
  memberCardNumber: z.string().nonempty('Member Card Number is required'),
  providerLocation: z.string().nonempty('Provider Location is required'),
  doctor: z.string().nonempty('Doctor is required'),
  diagnosis: z.string().nonempty('At least one diagnosis is required'),
  internalNote: z.string().optional(),
  debit: z.boolean().optional(),
});

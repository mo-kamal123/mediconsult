// src/features/client/validation/client-schema.js
import { z } from 'zod';

export const clientInfoSchema = z.object({
  logo: z
    .any()
    .refine((file) => file?.length === 1, 'Please upload one logo image')
    .optional(),
  clientInfo: z.string().min(2, 'Client Info is required'),
  clientCategory: z.string().nonempty('Client Category is required'),
  clientName: z.string().min(2, 'Client Name is required'),
  clientType: z.string().min(2, 'Client Type is required'),
  status: z.string().nonempty('Status is required'),
  reimbursementDueDays: z.string().optional(),
  ibmNotesId: z.string().optional(),
  clientShortName: z.string().optional(),
  policyId: z.string().optional(),
  policyStart: z.string().nonempty('Policy Start is required'),
  policyExpire: z.string().nonempty('Policy Expire is required'),
});

export const newClientSchema = z.object({
  client: z.string().min(1, 'Client is required'),
  clientType: z.string().min(1, 'Client Type is required'),
  clientCategory: z.string().min(1, 'Client Category is required'),
  refundDueDays: z
    .string()
    .regex(/^\d+$/, 'Refund Due Days must be a number')
    .min(1, 'Refund Due Days is required'),
  logo: z.any().refine((file) => file && file.length > 0, 'Logo is required'),
});

// src/features/client/validation/client-schema.js
import { z } from 'zod';

export const clientInfoSchema = z.object({
  logo: z
    .any()
    .refine((file) => file?.length === 1, 'Please upload one logo image')
    .optional(),
  clientCategory: z.string().nonempty('Client Category is required').optional(),
  clientName: z.string().min(2, 'Client Name is required').optional(),
  clientType: z.string().min(2, 'Client Type is required').optional(),
  status: z.string().nonempty('Status is required').optional(),
  reimbursementDueDays: z.string().optional(),
  ibmNotesId: z.string().optional(),
  clientShortName: z.string().optional(),
  policyStart: z.string().nonempty('Policy Start is required').optional(),
  policyExpire: z.string().nonempty('Policy Expire is required').optional(),
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

export const newBranchSchema = z.object({
  branchName: z.string().min(1, 'branch name is required'),
  status: z.string().nonempty('Status is required'),
});

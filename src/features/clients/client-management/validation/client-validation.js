// src/features/client/validation/client-schema.js
import { z } from 'zod';

export const clientInfoSchema = z.object({
  logo: z
    .any()
    .refine((file) => file?.length === 1, 'Please upload one logo image')
    .optional(),
  clientCategory: z.string().nonempty('Client Category is required').optional(),
  arabicClientName: z
    .string()
    .min(2, 'Client Arabic Name is required')
    .optional(),
  englishClientName: z
    .string()
    .min(2, 'Client English Name is required')
    .optional(),
  clientType: z.string().min(2, 'Client Type is required').optional(),
  status: z.string().nonempty('Status is required').optional(),
  reimbursementDueDays: z.string().optional(),
  clientShortName: z.string().optional(),
  policyStart: z.string().nonempty('Policy Start is required').optional(),
  policyExpire: z.string().nonempty('Policy Expire is required').optional(),
});

export const newClientSchema = z.object({
  clientCategory: z.string().min(1, 'Client Category is required'),
  arabicClientName: z.string().min(1, 'Arabic Client Name is required'),
  englishClientName: z.string().min(1, 'English Client Name is required'),
  clientType: z.string().min(1, 'Client Type is required'),
  status: z.string().min(1, 'Status is required'),
  reimbursementDueDays: z
    .string()
    .regex(/^\d+$/, 'Reimbursement Due Days must be a number')
    .min(1, 'Reimbursement Due Days is required'),
  clientShortName: z.string().min(1, 'Client Short Name is required'),

});

export const newBranchSchema = z.object({
  branchName: z.string().min(1, 'branch name is required'),
  status: z.string().nonempty('Status is required'),
});

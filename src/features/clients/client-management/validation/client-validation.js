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
export const newContactSchema = z.object({
  Name: z.string().min(1, 'Name is required'),
  JobTitle: z.string().min(1, 'Job Title is required'),
  Email: z.string().email('Invalid email address'),
  Mobile: z.string().min(1, 'Mobile is required'),
  Address: z.string().optional(),
  Note: z.string().optional(),
});

export const newContractSchema = z.object({
  startDate: z.string().min(1, 'Start Date is required'),
  expireDate: z.string().min(1, 'Expire Date is required'),
  totalAmount: z.string().min(1, 'Total Amount is required'),
  totalMembers: z.string().min(1, 'Total Members is required'),
  insuranceCompanyId: z.string().min(1, 'Insurance Company is required'),
});

export const newMemberSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  birthday: z.string().min(1, 'Birthday is required'),
  age: z.string().min(1, 'Age is required'),
  client: z.string().min(1, 'Client is required'),
  branch: z.string().min(1, 'Branch is required'),
  program: z.string().min(1, 'Program is required'),
  status: z.string().min(1, 'Status is required'),
  mobile: z.string().min(1, 'Mobile is required'),
});
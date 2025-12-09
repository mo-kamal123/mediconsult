// src/features/client/validation/client-schema.js
import { z } from 'zod';

export const clientInfoSchema = z.object({
  imageUrl: z.any().optional(),
  clientCategory: z.coerce
    .string()
    .nonempty('Client Category is required')
    .optional(),
  arabicClientName: z
    .string()
    .min(2, 'Client Arabic Name is required')
    .optional(),
  englishClientName: z
    .string()
    .min(2, 'Client English Name is required')
    .optional(),
  clientType: z.coerce.string().min(1, 'Client Type is required').optional(),
  status: z.coerce.string().nonempty('Status is required').optional(),
  reimbursementDueDays: z.any().optional(),
  clientShortName: z.string().optional(),
  policyStart: z.string().optional(),
  policyExpire: z.string().optional(),
});

export const newClientSchema = z.object({
  clientCategory: z.coerce.string().min(1, 'Client Category is required'),
  arabicClientName: z.string().min(1, 'Arabic Client Name is required'),
  englishClientName: z.string().min(1, 'English Client Name is required'),
  clientType: z.coerce.string().min(1, 'Client Type is required'),
  status: z.coerce.string().min(1, 'Status is required'),
  reimbursementDueDays: z.any().optional(),
  clientShortName: z.string().optional(),
});

export const newBranchSchema = z.object({
  BranchName: z.string().min(1, 'Branch Name is required'),
  MemberCount: z.number().nonnegative('Member Count must be a number ≥ 0'),
  BranchStatusId: z.number().min(1, 'Branch Status is required'),
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
  StartDate: z.string().min(1, 'Start Date is required'),
  ExpireDate: z.string().min(1, 'Expire Date is required'),
  TotalAmount: z.string().min(1, 'Total Amount is required'),
  TotalMembers: z.string().min(1, 'Total Members is required'),
  InsuranceCompanyId: z.number().min(1, 'Insurance Company is required'),
});

export const newMemberSchema = z.object({
  Name: z.string().min(1, 'Name is required'),
  Mobile: z.string().min(1, 'Mobile is required'),
  IsMale: z.boolean(),
  JobTitle: z.string().min(1, 'Job Title is required'),
  NationalId: z.string().min(14, 'National ID must be at least 14 digits'),
  LevelId: z.number().int().positive('Level is required'),
  VipStatusId: z.number().int().positive('VIP Status is required'),
  CompanyCode: z.string().min(1, 'Company Code is required'),
  BranchName: z.string().optional(),
  HofCode: z.string().min(1, 'HOF Code is required'),
  StatusId: z.number().int().positive('Status is required'),
  Birthday: z.string().min(1, 'Birthday is required'),
});

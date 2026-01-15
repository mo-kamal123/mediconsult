// src/features/client/validation/client-schema.js
import { z } from 'zod';

const arabicRegex = /^[\u0600-\u06FF\s]+$/;
const englishRegex = /^[A-Za-z\s]+$/;

const optionalArabicName = z
  .string()
  .transform((val) => val.trim())
  .refine(
    (val) => val === '' || arabicRegex.test(val),
    'Arabic name must contain Arabic letters only'
  )
  .refine(
    (val) => val === '' || val.length >= 2,
    'Client Arabic Name must be at least 2 characters'
  )
  .optional();

const optionalEnglishName = z
  .string()
  .transform((val) => val.trim())
  .refine(
    (val) => val === '' || englishRegex.test(val),
    'English name must contain English letters only'
  )
  .refine(
    (val) => val === '' || val.length >= 2,
    'Client English Name must be at least 2 characters'
  )
  .optional();

  export const clientInfoSchema = z
  .object({
    imageUrl: z.instanceof(File).optional(),
    clientCategory: z.coerce.string().min(1, 'Client Category is required'),
    arabicClientName: optionalArabicName,
    englishClientName: optionalEnglishName,
    clientType: z.coerce.string().min(1, 'Client Type is required'),
    status: z.coerce.string().min(1, 'Status is required'),
    reimbursementDueDays: z.coerce.number().optional(),
    clientShortName: z.string().optional(),
    policyStart: z.string().optional(),
    policyExpire: z.string().optional(),
  })
  .refine(
    (data) => data.arabicClientName || data.englishClientName,
    {
      message: 'Either Arabic or English name is required',
      path: ['arabicClientName'],
    }
  );


  export const newClientSchema = z
  .object({
    clientCategory: z.coerce.string().min(1, 'Client Category is required'),
    arabicClientName: optionalArabicName,
    englishClientName: optionalEnglishName,
    clientType: z.coerce.string().min(1, 'Client Type is required'),
    status: z.coerce.string().min(1, 'Status is required'),
    reimbursementDueDays: z.coerce.number().optional(),
    clientShortName: z.string().optional(),
  })
  .refine(
    (data) => data.arabicClientName || data.englishClientName,
    {
      message: 'Either Arabic or English name is required',
      path: ['arabicClientName'],
    }
  );


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

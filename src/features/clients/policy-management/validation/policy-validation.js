import { z } from 'zod';

// Validation schema for Policy Information
export const policyInfoSchema = z
  .object({
    PolicyTypeId: z.string().min(1, 'Policy Type is required'),

    CarrierCompanyId: z.string().min(1, 'Carrier Company is required'),

    StartDate: z.string().min(1, 'Start Date is required'),

    EndDate: z.string().min(1, 'Expire Date is required'),

    ClientId: z.string().min(1, 'Client is required'),

    TotalAmount: z
      .string()
      .optional()
      .refine(
        (val) => !val || (!isNaN(Number(val)) && Number(val) >= 0),
        'Total Amount must be a valid number'
      ),

    WarningOnPercentage: z
      .string()
      .optional()
      .refine(
        (val) =>
          !val ||
          (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100),
        'Warning On % must be between 0 and 100'
      ),

    IsCalculateUpperPeday: z.boolean().optional(),
  })
  .refine(
    (data) => {
      if (!data.StartDate || !data.EndDate) return true;
      return new Date(data.EndDate) >= new Date(data.StartDate);
    },
    {
      message: 'Expire Date must be after or equal to Start Date',
      path: ['EndDate'],
    }
  );

// Validation schema for creating a new policy
// For now, it's the same as policyInfoSchema
// You can extend it later if needed by creating a new schema from scratch
export const newPolicySchema = policyInfoSchema;

// Validation schema for programs
export const programSchema = z.object({
  programNameId: z.string().min(1, 'Program Name is required'),
  limit: z.string().min(1, 'Limit is required'),
  roomClassId: z.string().min(1, 'Room Class is required'),
  note: z.string().optional(),
});

// Validation schema for pool information
export const poolSchema = z.object({
  poolTypeIds: z.array(z.string()).min(1, 'At least one Pool Type is required'),
  applyOn: z.string().optional(),
  poolLimit: z.string().min(1, 'Pool Limit is required'),
  memberPercent: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || (!isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100),
      'Member % must be between 0 and 100'
    ),
  membersCount: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(Number(val)) && Number(val) >= 0),
      'Members count must be a valid number'
    ),
});

// Validation schema for reimbursement information
export const reimbursementSchema = z.object({
  reimbursementTypeId: z.string().min(1, 'Reimbursement Type is required'),
  applyOn: z.string().optional(),
  programId: z.string().optional(),
  pricelistId: z.string().optional(),
  price: z
    .string()
    .optional()
    .refine(
      (val) => !val || (!isNaN(Number(val)) && Number(val) >= 0),
      'Price must be a valid number'
    ),
});

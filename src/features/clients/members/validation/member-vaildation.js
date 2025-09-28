import z from 'zod';

// ✅ Validation Schema
export const memberInfoSchema = z.object({
  memberName: z.string().min(2, 'Member Name is required'),
  clientName: z.string().min(1, 'Client Name is required'),
  mobile: z.string().min(5, 'Mobile is required'),
  branchName: z.string().min(1, 'Branch Name is required'),
  oldId: z.string().optional(),
  programName: z.string().min(1, 'Program Name is required'),
  gender: z.string().min(1, 'Gender is required'),
  vipStatus: z.string().min(1, 'VIP Status is required'),
  jobTitle: z.string().optional(),
  birthday: z.string().nonempty('Birthday is required'),
  nationalId: z.string().min(5, 'National ID is required'),
  companyCode: z.string().optional(),
  level: z.string().min(1, 'Level is required'),
  hofId: z.string().optional(),
  activatedDate: z.string().nonempty('Activated Date is required'),
  notes: z.string().optional(),
  privateNotes: z.string().optional(),
  memberImage: z
    .any()
    .refine((file) => file && file.length > 0, 'Member image is required')
    .optional(),
});

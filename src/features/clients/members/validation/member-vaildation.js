import z from 'zod';

// ✅ Validation Schema
export const memberInfoSchema = z.object({
  memberName: z.string().min(2, 'Member Name is required'),
  clientName: z.number().min(1, 'Client Name is required'),
  mobile: z.string().min(5, 'Mobile is required'),
  branchName: z.number().min(1, 'Branch Name is required'),
  programName: z.string().optional(),
  gender: z.boolean(),
  vipStatus: z.number().min(1, 'VIP Status is required'),
  jobTitle: z.string().optional(),
  birthday: z.string().optional(),
  nationalId: z.string().min(5, 'National ID is required'),
  companyCode: z.string().optional(),
  level: z.number().min(1, 'Level is required'),
  hofId: z.string().optional(),
  activatedDate: z.string().nonempty('Activated Date is required'),
  notes: z.string().optional(),
  privateNotes: z.string().optional(),
  memberImage: z
    .any()
    .optional(),
});

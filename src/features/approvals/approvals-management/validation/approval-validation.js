import { z } from 'zod';

export const newApprovalSchema = z.object({
  memberId: z.string().nonempty('Member ID is required'),
  providerName: z.string().nonempty('Provider name is required'),
  providerBranch: z.string().optional(),
  receiveTime: z.string().optional(), // You might want to validate this as a time string if needed
  date: z.string().nonempty('Date is required'), // Or z.date() if you want to use Date type
  claimFormNo: z.string().optional(),
  additionalPool: z.string().optional(),
  chronicForDate: z.string().optional(),
  diagnosis: z.string().nonempty('Diagnosis is required'),
  contact: z.string().optional(),
  comment: z.string().optional(),
  maxAllowed: z.string().optional(), // Or z.number() if you want numeric validation
  note: z.string().optional(),
  debit: z.boolean(),
  repeated: z.boolean(),
  delivery: z.boolean(),
});

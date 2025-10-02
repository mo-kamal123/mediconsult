import z from 'zod';

export const newServiceSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  prices: z
    .string()
    .min(1, 'Price is required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number'),
  discount: z
    .string()
    .min(1, 'Discount is required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Discount must be a valid number'),
  priceApproval: z.boolean(),
});

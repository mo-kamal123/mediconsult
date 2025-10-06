import z from 'zod';

export const pricelistSchema = z.object({
  priceListName: z.string().nonempty('Price list name is required'),
  provider: z.string().nonempty('Provider is required'),
  startDate: z.string().nonempty('Start date is required'),
  endDate: z.string().nonempty('End date is required'),
  type: z.string().nonempty('Type is required'),
  normalDiscount: z.string().nonempty('Normal discount is required'),
  additionalDiscount: z.string().nonempty('Additional discount is required'),
  note: z.string().optional(),
});

export const addServiceSchema = z.object({
  service: z.string().nonempty('Service is required'),
  price: z.string().nonempty('Price is required'),
  discount: z.string().nonempty('Discount is required'),
  priceApproval: z.boolean(),
});

export const newPriceListSchema = z.object({
  priceListName: z.string().min(1, 'Price List Name is required'),
  note: z.string().optional(),
});

export const copyPriceListSchema = z.object({
  selectPriceLists: z.string().min(1, 'Please select a price list'),
  newPriceListName: z.string().min(1, 'New Price List Name is required'),
  increasePrices: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), { message: 'Must be a number' }),
  copyWithPrice: z.boolean().optional(),
  copyWithDiscount: z.boolean().optional(),
});

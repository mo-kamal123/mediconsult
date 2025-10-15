import { z } from 'zod';

export const providerInfoSchema = z.object({
  logo: z
    .any()
    .refine((file) => !file || file instanceof File, {
      message: 'Invalid file type',
    })
    .refine(
      (file) => {
        if (!file) return true;
        const fileSizeMB = file.size / (1024 * 1024);
        return fileSizeMB <= 3;
      },
      {
        message: 'File size must not exceed 3MB',
      }
    )
    .refine(
      (file) => {
        if (!file) return true;
        return ['image/jpeg', 'image/png'].includes(file.type);
      },
      {
        message: 'File must be a JPG or PNG image',
      }
    )
    .nullable(),

  providerId: z.string().min(1, 'Provider ID is required'),
  providerNameAR: z.string().min(1, 'Arabic Name is required'),
  providerNameEN: z.string().min(1, 'English Name is required'),

  providerCategory: z.string().min(1, 'Category is required'),
  generalSpecialist: z.string().min(1, 'General Specialist is required'),
  subSpecialist: z.string().min(1, 'Sub Specialist is required'),

  comercialName: z.string().min(1, 'Commercial Name is required'),
  hotline: z
    .string()
    .min(1, 'Hotline is required')
    .regex(/^\d+$/, 'Hotline must be a number'),

  iBMNotesId: z.string().min(1, 'IBM Notes ID is required'),
  batchDueDays: z
    .string()
    .min(1, 'Batch Due Days is required')
    .regex(/^\d+$/, 'Must be a number'),

  providerClass: z.string().min(1, 'Provider Class is required'),
  priority: z.string().min(1, 'Priority is required'),
  status: z.string().min(1, 'Status is required'),

  localDiscount: z
    .string()
    .min(1, 'Local Discount is required')
    .regex(/^\d+$/, 'Must be a number'),

  importedDiscount: z
    .string()
    .min(1, 'Imported Discount is required')
    .regex(/^\d+$/, 'Must be a number'),

  allowChronicOnPortal: z.boolean(),
});

export const providerAccountSchema = z.object({
  commercialRegistrationNumber: z
    .string()
    .min(1, 'Commercial Registration Number is required'),

  adminFees: z
    .string()
    .min(1, 'Admin Fees are required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Must be a valid number'),

  taxes: z
    .string()
    .min(1, 'Taxes are required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Must be a valid number'),
});

export const providerExtraFinanceSchema = z.object({
  providerType: z.string().nonempty('Provider type is required'),
  TAXNumber: z.string().nonempty('TAX Number is required'),
  fullAddress: z.string().nonempty('Full address is required'),
  shortcutAddress: z.string().nonempty('Shortcut address is required'),
  government: z.string().nonempty('Government is required'),
  city: z.string().nonempty('City is required'),
  Area: z.string().nonempty('Area is required'),
  streetName: z.string().nonempty('Street name is required'),
  buildingNo: z.string().nonempty('Building number is required'),
  officeNo: z.string().nonempty('Office number is required'),
  Landmark: z.string().nonempty('Landmark is required'),
  postalCode: z.string().nonempty('Postal code is required'),
});

export const newProviderSchema = z.object({
  providerNameAR: z.string().min(1, 'Arabic name is required'),
  providerNameEN: z.string().min(1, 'English name is required'),
  providerCategory: z.string().min(1, 'Category is required'),
  generalSpecialist: z.string().min(1, 'General specialty is required'),
  subSpecialist: z.string().min(1, 'Sub-specialty is required'),
  iBMNotesId: z.string().min(1, 'IBM Notes ID is required'),
  hotline: z
    .string()
    .min(1, 'Hotline is required')
    .regex(/^\d+$/, 'Hotline must be numeric'),
  batchDays: z
    .string()
    .min(1, 'Batch days is required')
    .regex(/^\d+$/, 'Batch days must be a number'),
});

export const newLocationSchema = z.object({
  government: z
    .string()
    .min(2, {
      message: 'Government is required and must be at least 2 characters.',
    }),

  city: z
    .string()
    .min(2, { message: 'City is required and must be at least 2 characters.' }),

  enArea: z
    .string()
    .min(2, { message: 'EN Area is required and must be descriptive.' }),

  arArea: z
    .string()
    .min(2, { message: 'AR Area is required and must be descriptive.' }),

  enAddress: z
    .string()
    .min(5, {
      message: 'EN Address is required and must be at least 5 characters.',
    }),

  arAddress: z
    .string()
    .min(5, {
      message: 'AR Address is required and must be at least 5 characters.',
    }),
});

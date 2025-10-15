import { z } from 'zod';

// ✅ Schema for login
export const loginSchema = z.object({
  phoneNumber: z.string().min(11, 'Mobile phone should be at least 11 digits'),
  password: z.string().min(8, 'At least 8 charactars: A/a/1/!'),
  // rememberMe: z.boolean().optional(),
});

// ✅ Schema for forget password
export const forgetPasswordSchema = z.object({
  phone: z.string().min(11, 'Mobile phone should be at least 10 digits'),
});

// ✅ Schema for OTP validation
export const otpSchema = z.object({
  otp: z
    .string()
    .min(6, 'OTP must be at least 6 digits')
    .max(6, 'OTP cannot be more than 6 digits'),
});

// ✅ Schema validation
export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(8, 'Please confirm your password'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

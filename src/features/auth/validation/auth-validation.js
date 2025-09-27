import { z } from 'zod';

// ✅ Schema for login
export const loginSchema = z.object({
  phone: z.string().min(10, 'Mobile phone should be at least 10 digits'),
  password: z.string().min(6, 'Passwword should be at least 6 digits'),
  rememberMe: z.boolean().optional(),
});

// ✅ Schema for forget password
export const forgetPasswordSchema = z.object({
  phone: z.string().min(10, 'Mobile phone should be at least 10 digits'),
});

// ✅ Schema for OTP validation
export const otpSchema = z.object({
  code: z
    .string()
    .min(6, 'OTP must be at least 6 digits')
    .max(6, 'OTP cannot be more than 6 digits'),
});

// ✅ Schema validation
export const resetPasswordSchema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    passwordConfirmation: z.string().min(6, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

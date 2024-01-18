import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: 'Le mot de passe est obligatoire!',
      path: ['password'],
    }
  );

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email invalide',
  }),
  password: z.string().min(1, {
    message: 'Le mot de passe est obligatoire',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email invalide',
  }),
  password: z.string().min(6, {
    message: 'Le mot de passe doit contenir au moins 6 caractères',
  }),
  name: z.string().min(1, {
    message: 'Le nom est obligatoire',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email invalide',
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Le mot de passe doit contenir au moins 6 caractères',
  }),
});

import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email invalide',
  }),
  password: z.string().min(1, {
    message: 'Le mot de passe est obligatoire',
  }),
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

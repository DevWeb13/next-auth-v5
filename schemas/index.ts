import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email invalide',
  }),
  password: z.string().min(1, {
    message: 'Le mot de passe est obligatoire',
  }),
});

// actions/login.ts

'use server';

import * as z from 'zod';

import { LoginSchema } from '@/schemas';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  console.log(validatedFields);

  if (!validatedFields.success) {
    return { error: 'Champs invalides' };
  }

  return { success: 'Email envoyé' };
};

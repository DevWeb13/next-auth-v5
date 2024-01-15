// actions/register.ts

'use server';

import bcrypt from 'bcryptjs';
import * as z from 'zod';
import { db } from '@/lib/db';

import { RegisterSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  // console.log(validatedFields);

  if (!validatedFields.success) {
    return { error: 'Champs invalides' };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Utilisateur existe déja' };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // TODO: Send verification token email

  return { success: 'Utilisateur créé' };
};

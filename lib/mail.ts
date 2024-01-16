// lib/mail.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'contact@lareponsedev.com',
    to: email,
    subject: 'Code 2FA',
    html: `<p>Voici votre code 2FA : ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'contact@lareponsedev.com',
    to: email,
    subject: 'Réinitialiser votre mot de passe',
    html: `<p>Cliquez sur le lien suivant pour réinitialiser votre mot de passe : <a href="${resetLink}">${resetLink}</a></p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'contact@lareponsedev.com',
    to: email,
    subject: 'Confirmer votre adresse email',
    html: `<p>Cliquez sur le lien suivant pour confirmer votre adresse email : <a href="${confirmLink}">${confirmLink}</a></p>`,
  });
};

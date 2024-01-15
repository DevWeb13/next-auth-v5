// lib/mail.ts

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'contact@lareponsedev.com',
    to: email,
    subject: 'Confirmer votre adresse email',
    html: `<p>Cliquez sur le lien suivant pour confirmer votre adresse email : <a href="${confirmLink}">${confirmLink}</a></p>`,
  });
};

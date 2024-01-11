// components/auth/login-form.tsx

import { CardWrapper } from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Bienvenue'
      backButtonLabel="Vous n'avez pas de compte?"
      backButtonHref='/auth/register'
      showSocial>
      Login
    </CardWrapper>
  );
};

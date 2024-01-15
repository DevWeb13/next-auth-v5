// components/auth/new-verification-form.tsx

'use client';

import { useState, useCallback, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import { newVerification } from '@/actions/new-verification';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const onSubmit = useCallback(async () => {
    if (success || error) return;

    if (!token) {
      setError('Token invalide');
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError('Une erreur est survenue');
      });
  }, [error, success, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);
  return (
    <CardWrapper
      headerLabel='Confirmation de votre adresse e-mail'
      backButtonLabel='Retour à la connexion'
      backButtonHref='/auth/signin'>
      <div className='flex w-full items-center justify-center'>
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

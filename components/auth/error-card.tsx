import { CardWrapper } from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oups! Une erreur s'est produite"
      backButtonLabel='Retour à la page de connexion'
      backButtonHref='/auth/login'>
      <div className='flex w-full justify-center'>
        <ExclamationTriangleIcon className='text-destructive' />
      </div>
    </CardWrapper>
  );
};

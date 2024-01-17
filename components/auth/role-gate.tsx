// components/auth/role-gate.tsx

'use client';

import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';
import { FormError } from '@/components/form-error';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="Vous n'avez pas les droits pour accéder à cette page" />
    );
  }

  return <>{children}</>;
};

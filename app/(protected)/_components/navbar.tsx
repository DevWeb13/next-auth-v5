// app/(protected)/_components/navbar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/auth/user-button';

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex w-[600px] items-center justify-between rounded-xl bg-secondary p-4 shadow-sm'>
      <div className='flex gap-2'>
        <Button
          asChild
          variant={pathname === '/server' ? 'default' : 'outline'}>
          <Link href='/server'>Serveur</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/client' ? 'default' : 'outline'}>
          <Link href='/client'>Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/admin' ? 'default' : 'outline'}>
          <Link href='/admin'>Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === '/settings' ? 'default' : 'outline'}>
          <Link href='/settings'>Paramètres</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
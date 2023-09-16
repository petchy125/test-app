'use client';

import { PropsWithChildren } from 'react';
import type { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

export default function SessionProvider({
  children,
  session,
}: PropsWithChildren<{ session: Session | null }>) {
  return <Provider session={session}>{children}</Provider>;
}

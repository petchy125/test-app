import { PropsWithChildren } from 'react';

// import { Nav } from '@/app/ui/nav';
// import Footer from '@/app/ui/footer';
import { getServerSession } from 'next-auth';

export default async function ProtectedLayout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen flex-col">
     <p> Header </p>
      <main className="flex-1">{children}</main>
      <p> Footer </p>
    </div>
  );
}

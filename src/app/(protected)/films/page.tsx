
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nerdflix | Films',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Record<PropertyKey, string>;
}) {


 

  return (
    <section>
      <div className="pt-10">
       Film page
      </div>
    </section>
  );
}

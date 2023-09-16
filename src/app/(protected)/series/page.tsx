
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nerdflix | Series',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Record<PropertyKey, string>;
}) {

  return (
    <section>
      <div className="pt-10">
       Series page
      </div>
    </section>
  );
}

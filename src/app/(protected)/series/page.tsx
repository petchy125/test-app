import Hero from '@/app/components/hero';
import { getSearchedResult, getShow } from '@/lib/fetcher';
import Collections from '../../components/collections';
import { getRandomShow } from '@/lib/util';
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
  const allShows = await getShow('tv');
  const searchedResults = await getSearchedResult(searchParams?.search ?? '');
  const randomShow = getRandomShow(allShows.netflix);

  const collections = [
    { title: 'Trending', shows: allShows.trending },
    { title: 'Top Rated', shows: allShows.topRated },
    { title: 'Comedy', shows: allShows.comedy },
    { title: 'Romance', shows: allShows.romance },
    { title: 'Documentary', shows: allShows.docs },
  ];

  return (
    <section>
      <div className="pt-10">
        {searchedResults.length < 1 && <Hero type="show" show={randomShow} />}
        <Collections
          collections={collections}
          searchedResults={searchedResults}
        />
      </div>
    </section>
  );
}

import 'server-only';
import type { MediaType, Show } from '../types';

async function fetchShowData(url: string): Promise<Show[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }
  const data = await response.json();
  return data.results;
}

export async function getShow(mediaType: MediaType) {
  const requests = [
    `https://api.themoviedb.org/3/trending/${mediaType}/week`,
    `https://api.themoviedb.org/3/${mediaType}/top_rated`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_networks=213`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=28`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=35`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=27`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=10749`,
    `https://api.themoviedb.org/3/discover/${mediaType}?with_genres=99`,
  ];

  const [trending, topRated, netflix, action, comedy, horror, romance, docs] =
    await Promise.all(requests.map((url) => fetchShowData(`${url}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)));

  return {
    trending,
    topRated,
    netflix,
    action,
    comedy,
    horror,
    romance,
    docs,
  };
}

export async function getSearchedResult(searchTerm: string) {
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(searchTerm)}`;

  const shows = await fetchShowData(url);
  return shows.sort((s1, s2) => s2.vote_count - s1.vote_count);
}

import type { Show } from "@/types";

export function getSafeImageUrl(url: string | null) {
  if (!url)
    return 'https://via.placeholder.com/230x130.jpg/ffffff?text=No+Movie+Poster';
  return `https://image.tmdb.org/t/p/original${url}`;
}

export function getRandomShow(shows: Show[]) {
  const random = Math.floor(Math.random() * shows.length);
  let randomShow = shows[random];

  return randomShow;
}

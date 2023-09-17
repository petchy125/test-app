'use client';

import { useEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import ReactPlayer from 'react-player/lazy';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/app/container/dialog';
import type { Show } from '@/types';
import { usePathname } from 'next/navigation';

interface ShowModalProps {
  show: Show;
  toggleHandler: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
}

export default function ShowModal({
  show,
  toggle,
  toggleHandler,
}: ShowModalProps) {
  const [trailer, setTrailer] = useState<string>('');
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchShowData() {
      let mediaType = show?.media_type || (pathname === '/series' ? 'tv' : 'movie');

      try {
        const resp = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${show?.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&append_to_response=videos`
        );
        const data = await resp.json();
        console.log(data);

        if (data?.videos) {
          setTrailer(
            data.videos.results.find((video: any) => video.type === 'Trailer')?.key || ''
          );
        }

        if (data?.genres) {
          setGenres(data.genres);
        }
      } catch (error) {
        console.error(error);
      }
    }

    if (show.id && show.media_type) {
      fetchShowData();
    }
  }, [show.id, show.media_type, toggle, pathname]);

  return (
    <Dialog open={toggle} onOpenChange={toggleHandler}>
      <DialogContent className="w-full overflow-hidden rounded-md bg-zinc-900 p-0 text-left align-middle shadow-xl dark:bg-zinc-900 sm:max-w-3xl">
        <div className="aspect-video relative">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
          />
        </div>
        <div className="grid gap-2.5 px-10 pb-10">
          <DialogTitle className="text-lg font-medium leading-6 text-slate-50 sm:text-xl">
            {show?.title ?? show?.name}
          </DialogTitle>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <p className="font-semibold text-green-400">
              {Math.round((Number(show?.vote_average) / 10) * 100) ?? '-'}%
              Match
            </p>
            {show?.release_date || show?.first_air_date ? (
              <p className="text-white">
                {show?.release_date ?? show?.first_air_date}
              </p>
            ) : null}
            {show?.original_language && (
              <span className="grid h-4 w-7 place-items-center text-xs font-bold text-neutral-400 ring-1 ring-neutral-400">
                {show.original_language.toUpperCase()}
              </span>
            )}
          </div>
          <DialogDescription className="line-clamp-3 text-xs text-slate-50 dark:text-slate-50 sm:text-sm">
            {show?.overview ?? '-'}
          </DialogDescription>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white">
            <span className="text-slate-400">Genres:</span>
            {genres.map((genre) => genre.name).join(', ')}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

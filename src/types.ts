import { LinkProps } from 'next/link';
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export type ParagraphProps = PropsWithChildren<
  HTMLAttributes<HTMLParagraphElement>
>;

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

export type HeadingProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement>
>;

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export type TextLinkProps = PropsWithChildren<
  LinkProps & { className?: string }
>;

export type MediaType = 'tv' | 'movie';

export interface Show {
  adult: boolean;
  backdrop_path: string | null;
  media_type: MediaType;
  budget: number | null;
  homepage: string | null;
  showId: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string | null;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  release_date: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  name: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface HeaderProps extends PropsWithChildren{
  bg: boolean;
}

export interface HeaderSearchProps {
  searchTerm: string;
  setSearchTerm: Function;
}

export interface HeaderLogoProps {
  to: string;
  src: string;
}

export interface PictureProps {
  src: string;
}
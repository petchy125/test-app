import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge as tm } from 'tailwind-merge';

function Column({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tm('flex flex-col text-left', className)} {...restProps}>
      {children}
    </div>
  );
}

function Row({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={tm(
        'grid gap-[15px] grid-cols-footer grid-cols-[repeat(auto-fill,minmax(210px,1fr))] max-[1000px]:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Link({
  children,
  className,
  ...restProps
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      className={tm('text-[#757575] mb-5 text-[13px] no-underline', className)}
      {...restProps}
    >
      {children}
    </a>
  );
}

function Title({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm('text-base text-[#757575] mb-10', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

function Text({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p
      className={tm('text-[13px] text-[#757575] mb-10', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

function Break({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tm('basis-full h-0', className)} {...restProps}>
      {children}
    </div>
  );
}

function Footer({
  children,
  className,
  ...restProps
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <div className="w-full">
      <footer
        className={tm(
          'flex max-w-[1000px] flex-col py-[70px] max-[1000px]:py-[70px] max-[1000px]:px-[30px] m-auto',
          className
        )}
        {...restProps}
      >
        {children}
      </footer>
    </div>
  );
}

export default Object.assign(Footer, { Column, Row, Link, Title, Text, Break });

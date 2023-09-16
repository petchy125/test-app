import { twMerge as tm } from 'tailwind-merge';

import { DivProps, HeadingProps } from '@/types';
import NextImage, { ImageProps } from 'next/image';

function Jumbotron({
  children,
  className,
  direction,
  ...restProps
}: DivProps & { direction: 'flex-row' | 'flex-row-reverse' }) {
  return (
    <div
      className={tm(
        'flex border-b-8 border-solid border-[#222] py-[50px] px-[5%] text-white overflow-hidden',
        className
      )}
      {...restProps}
    >
      <div
        className={tm(
          'flex items-center justify-between max-w-[1100px] m-auto w-full max-[1000px]:flex-col',
          direction
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Container({ children, className, ...restProps }: DivProps) {
  return (
    <div className={tm('', className)} {...restProps}>
      {children}
    </div>
  );
}

function Title({ children, className, ...restProps }: HeadingProps) {
  return (
    <h1
      className={tm(
        'text-[50px] leading-[1.1] mb-2 max-[600px]:text-[35px]',
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
}

function SubTitle({ children, className, ...restProps }: HeadingProps) {
  return (
    <h2
      className={tm(
        'text-[26px] font-normal leading-normal max-[600px]:text-[18px] my-5',
        className
      )}
      {...restProps}
    >
      {children}
    </h2>
  );
}

function Pane({ children, className, ...restProps }: DivProps) {
  return (
    <div
      className={tm(
        'w-1/2 max-[1000px]:w-full max-[1000px]:py-0 max-[1000px]:px-[45px] max-[1000px]:text-center',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Image({ className, ...restProps }: ImageProps) {
  return (
    <NextImage className={tm('max-w-full h-auto', className)} {...restProps} />
  );
}

export default Object.assign(Jumbotron, {
  Container,
  Title,
  SubTitle,
  Pane,
  Image,
});

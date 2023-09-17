import { twMerge as tm } from 'tailwind-merge';
import NextLink from 'next/link';
import {
  ButtonProps,
  DivProps,
  HeadingProps,
  InputProps,
  ParagraphProps,
  TextLinkProps,
} from '@/types';
import { FormHTMLAttributes, PropsWithChildren } from 'react';

function Form({ children, className, ...restProps }: DivProps) {
  return (
    <div
      className={tm(
        'flex flex-col min-h-[660px] bg-[rgba(0,0,0,0.75)] rounded-[5px] w-full m-auto max-w-[450px] px-[68px] pt-[60px] pb-10 mb-[100px]',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Error({ children, className, ...restProps }: DivProps) {
  return (
    <div
      className={tm(
        'bg-[#e87c03] rounded text-sm mx-0 mt-0 mb-4 text-white py-[15px] px-5',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Base({
  children,
  className,
  ...restProps
}: PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>) {
  return (
    <form
      className={tm('flex flex-col max-w-[450px] w-full', className)}
      {...restProps}
    >
      {children}
    </form>
  );
}

function Title({ children, className, ...restProps }: HeadingProps) {
  return (
    <h1
      className={tm('text-white text-[32px] font-bold mb-7', className)}
      {...restProps}
    >
      {children}
    </h1>
  );
}

function Text({ children, className, ...restProps }: ParagraphProps) {
  return (
    <p
      className={tm('text-[#737373] text-base font-medium', className)}
      {...restProps}
    >
      {children}
    </p>
  );
}

// function Paragraph({ children }: any) {
//   return <p>{children}</p>;
// }

function TextSmall({ children, className, ...restProps }: any) {
  return (
    <span
      className={tm(
        'mt-[10px] text-[13px] leading-normal text-[#8c8c8c]',
        className
      )}
      {...restProps}
    >
      {children}
    </span>
  );
}

function Link({ children, className, ...restProps }: TextLinkProps) {
  return (
    <NextLink
      className={tm('text-white hover:underline', className)}
      {...restProps}
    >
      {children}
    </NextLink>
  );
}

function Input({ className, ...restProps }: InputProps) {
  return (
    <input
      className={tm(
        'bg-[#333] rounded border-0 text-white h-[50px] leading-[50px] py-[5px] px-5 mb-5 last-of-type:mb-[30px]',
        className
      )}
      {...restProps}
    />
  );
}

function Submit({ className, children, ...restProps }: ButtonProps) {
  return (
    <button
      className={tm(
        'bg-[#e50914] rounded text-base font-bold mt-6 mx-0 mb-3 p-4 border-0 text-white cursor-pointer disabled:opacity-50',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Object.assign(Form, {
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
});
